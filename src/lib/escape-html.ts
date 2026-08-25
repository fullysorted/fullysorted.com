/**
 * HTML-escape untrusted, user-supplied strings before interpolating them into
 * HTML (notification email bodies, server-rendered markdown, etc.). Prevents
 * stored/reflected HTML & script injection from form fields and AI output.
 */
export function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Sanitize a value destined for an href attribute. Only http(s) and mailto/tel
 * are allowed; anything else (javascript:, data:, etc.) is dropped to '#'.
 */
export function safeUrl(value: unknown): string {
  const raw = String(value ?? '').trim();
  if (/^(https?:|mailto:|tel:)/i.test(raw)) return escapeHtml(raw);
  return '#';
}

/**
 * Serialize a value for safe embedding inside a
 * <script type="application/ld+json"> block.
 *
 * JSON.stringify does NOT escape `<`, `>`, `&`, or the U+2028/U+2029 line
 * separators, so a listing/model field containing `</script>` (or those
 * separators) can break out of the script element and inject markup — a stored
 * XSS vector, since much of our structured data comes from user/AI content.
 * Escaping them to their \uXXXX forms keeps the output valid JSON while making
 * it inert as HTML. Always use this instead of JSON.stringify for JSON-LD.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
