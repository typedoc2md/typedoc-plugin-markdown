/**
 * The link element
 * @param label The text to display for the link
 * @param url The URL to link to
 * @returns A Markdown link if URL is provided, otherwise plain text
 */
export function link(label: string, url?: string): string {
  const parsedUrl = url?.trim() || '';
  const safeLabel = label.trim();
  return parsedUrl.length ? `[${safeLabel}](${parsedUrl})` : safeLabel;
}
