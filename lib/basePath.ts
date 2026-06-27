/**
 * Base path the site is served from (e.g. "/portfolio" on a GitHub Pages
 * project site, "" everywhere else). Use it to prefix plain anchor links to
 * files in /public. next/image and next/link already apply basePath on their
 * own, so only manual <a href="/..."> asset links need this.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the base path. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
