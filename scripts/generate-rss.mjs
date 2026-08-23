import { readFile, writeFile } from 'node:fs/promises';

const siteUrl = 'https://faithonjoymountain.com';
const sourceUrl = new URL('../app/articles-data.ts', import.meta.url);
const outputUrl = new URL('../public/feed.xml', import.meta.url);

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const source = await readFile(sourceUrl, 'utf8');
const json = source
  .replace(/^export const articles =\s*/, '')
  .replace(/\s*as const;\s*$/, '');
const articles = JSON.parse(json);

const items = articles.map((article) => {
  if (!article.slug || !article.title || !article.publishedDate || !article.excerpt) {
    throw new Error(`Article ${article.slug ?? '(unknown)'} is missing RSS metadata.`);
  }

  const url = `${siteUrl}/articles/${article.slug}`;

  return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(article.publishedDate).toUTCString()}</pubDate>
      <description>${escapeXml(article.excerpt)}</description>
    </item>`;
}).join('\n');

const latestPublication = articles.reduce(
  (latest, article) => article.publishedDate > latest ? article.publishedDate : latest,
  articles[0]?.publishedDate ?? new Date(0).toISOString(),
);

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Faith on Joy Mountain Articles</title>
    <link>${siteUrl}/blog</link>
    <description>Bible-study articles from Faith on Joy Mountain.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(latestPublication).toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

await writeFile(outputUrl, feed, 'utf8');
