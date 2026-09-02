import { escapeHtml } from "./escape-html";

/**
 * Line-aware markdown-lite for the research pages.
 *
 * Handles: `##`/`###` headings, paragraphs, `-`/`*` bullet lists, numbered
 * lists, `**bold**` and `*italic*`. Everything is HTML-escaped BEFORE the
 * transforms because the content is AI-drafted and rendered with
 * dangerouslySetInnerHTML; any raw HTML that slipped past review would
 * otherwise execute as stored XSS.
 *
 * Why line-aware: the previous renderer split on blank lines only, so a
 * heading written as `## Title\nParagraph` (66 of 73 seed files) swallowed
 * its whole first paragraph into the <h2>. A heading is a line, not a block.
 */
function inline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+?)\*(?!\*)/g, "$1<em>$2</em>");
}

export function renderMarkdownLite(content: string): string {
  const lines = escapeHtml(content).replace(/\r\n?/g, "\n").split("\n");
  const out: string[] = [];
  let para: string[] = [];
  let list: { tag: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list) {
      out.push(`<${list.tag}>${list.items.map((i) => `<li>${inline(i)}</li>`).join("")}</${list.tag}>`);
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if (h) {
      flushPara();
      flushList();
      const level = Math.min(h[1].length, 4);
      out.push(`<h${level}>${inline(h[2].trim())}</h${level}>`);
      continue;
    }
    const ul = line.match(/^[-*•]\s+(.*)$/);
    const ol = line.match(/^\d+[.)]\s+(.*)$/);
    if (ul || ol) {
      flushPara();
      const tag = ul ? "ul" : "ol";
      if (!list || list.tag !== tag) {
        flushList();
        list = { tag, items: [] };
      }
      list.items.push((ul || ol)![1].trim());
      continue;
    }
    if (list) flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return out.join("");
}
