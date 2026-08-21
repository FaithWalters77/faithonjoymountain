import Link from 'next/link';
import { SiteHeader, SiteFooter } from './site-chrome';
import { assetPath, sitePath } from './paths';

const discovery = [
  { title: 'Articles', text: 'Taking a deeper look at what Scripture says about our lives, our questions, and our understanding.', image: '/discover-articles.png', href: sitePath('/blog') },
  { title: 'Resources', text: 'Recommended Resources', image: '/discover-resources.png', href: sitePath('/resources-books') },
  { title: 'Truth-Filled Inspirations', text: 'Access our collection of inspiring videos, music, and media to encourage your walk with God.', image: '/discover-media.png', href: sitePath('/media-music') },
];

export default function Home() {
  return <><SiteHeader /><main>
    <section className="wix-hero"><div className="wix-hero-inner"><h1>Illuminating the<br />Word of God</h1><p>Deep exegesis and illuminating media designed to restore your connection to the truth of God&apos;s Word.</p><div className="hero-buttons"><Link className="wix-button" href={sitePath('/blog')}>Explore Articles</Link><a className="story-button" href="#light">Our Story</a></div></div></section>
    <section className="light-section" id="light"><div className="arched-photo"><img src={assetPath('/scripture-frame.jpg')} alt="Open Scripture displayed in a softly lit room" /></div><div className="light-copy"><h2>The Light of Scripture</h2><p>Looking into Scripture with the Spirit of revelation to draw out what the Word is saying to us—letting Scripture interpret Scripture and allowing the Holy Spirit to illuminate God’s message for our lives.</p><p>Let us put down doctrines shaped by man, that cloud what the Word is really saying. Instead of trying to read into Scripture our theologies, we should let Scripture be what forms them. We don&apos;t need to guess at what the Word is telling us, or be confused at passages that don&apos;t seem to make sense. When we look to other Scripture to shed light on and define what we are reading, we can come to a fuller understanding of what is being communicated to us.</p><p>With the Holy Spirit as out teacher, and the spirit of revelation to open our eyes and understanding, we can comprehend the beauty and truth of the Word of God.</p><p>Jesus said in Matthew 11:27 &quot;No one can really know me unless they know the Father. I am the only one who can understand the Father, but you can understand him if you will let me reveal him to you&quot;.</p></div></section>
    <section className="discover-section"><h2>Discover<br />His Word</h2><div className="discover-grid">{discovery.map(item => <article key={item.title}><img src={assetPath(item.image)} alt="" /><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Learn More</Link></article>)}</div></section>
    <section className="support-panel" id="support"><div><h2>Support This Effort</h2><p>If this ministry has blessed you, please consider donating to support these efforts to bring understanding and reveal all that God has for us.</p><div className="donate-stack"><a className="wix-button" href="https://www.paypal.me/faithwalters77" target="_blank" rel="noreferrer">Donate with PayPal</a><a className="wix-button" href="https://venmo.com/u/Faith-Walters-4" target="_blank" rel="noreferrer">Donate with Venmo</a><a className="wix-button" href="https://cash.app/$faithlwalters" target="_blank" rel="noreferrer">Donate with Cash App</a></div></div></section>
  </main><SiteFooter /></>;
}
