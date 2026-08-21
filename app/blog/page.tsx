import Link from 'next/link';
import { articles } from '../articles-data';
import { SiteHeader, SiteFooter } from '../site-chrome';
import { sitePath } from '../paths';

const readTimes = [4, 3, 5, 4];

export default function Blog() {
  return <><SiteHeader/><main className="blog-page"><h1 className="page-title">Articles</h1><div className="blog-nav">All Posts</div><section className="post-list" aria-label="All articles">{articles.map((article,index)=><article className="post-card" key={article.slug}><p className="post-meta">Faith Walters · {readTimes[index]} min read</p><h2><Link href={sitePath(`/articles/${article.slug}`)}>{article.title}</Link></h2><p>{article.excerpt}</p><Link className="read-post" href={sitePath(`/articles/${article.slug}`)}>Read More</Link></article>)}</section></main><SiteFooter/></>;
}
