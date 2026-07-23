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
