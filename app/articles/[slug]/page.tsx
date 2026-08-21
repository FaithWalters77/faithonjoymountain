import { notFound } from 'next/navigation';
import { articles } from '../../articles-data';
import { SiteFooter, SiteHeader } from '../../site-chrome';
import { articleHtml, sitePath } from '../../paths';

const readTimes = [4, 3, 5, 4];

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = articles.findIndex((entry) => entry.slug === slug);
  if (articleIndex < 0) notFound();
  const article = articles[articleIndex];
  return <><SiteHeader/><main className="article-page"><article className="article-shell"><p className="post-meta">Faith Walters · {readTimes[articleIndex]} min read</p><h1>{article.title}</h1><div className="article-body">{article.blocks.map((block,index)=>{const Tag=block.tag as 'p'|'h2'|'h3'|'blockquote';return <Tag key={index} dangerouslySetInnerHTML={{__html:articleHtml(block.html)}}/>})}</div><nav className="article-return" aria-label="Article navigation"><a href={sitePath("/blog")}>← All Posts</a></nav></article><aside className="recent-posts"><h2>Recent Posts</h2><div>{articles.filter((entry)=>entry.slug!==slug).slice(0,3).map((entry)=><a href={sitePath(`/articles/${entry.slug}`)} key={entry.slug}>{entry.title}</a>)}</div></aside></main><SiteFooter/></>;
}
