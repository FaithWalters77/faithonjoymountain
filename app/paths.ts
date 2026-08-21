export const basePath = '';

export function assetPath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}

export const sitePath = assetPath;

export function articleHtml(html: string) {
  return html.replaceAll('href="/articles/', `href="${basePath}/articles/`);
}
