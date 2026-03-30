import type { BlogPost } from '../data/blogPosts';
import { SITE_ORIGIN } from './constants';

function ensureMeta(attr: 'name' | 'property', key: string): HTMLMetaElement {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el as HTMLMetaElement;
}

function setMetaProperty(property: string, content: string) {
  ensureMeta('property', property).setAttribute('content', content);
}

function removeMetaProperty(property: string) {
  document.querySelector(`meta[property="${property}"]`)?.remove();
}

function setTwitter(name: string, content: string) {
  ensureMeta('name', name).setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

/** Remove JSON-LD and article-specific meta; leave generic OG for next route to overwrite via PageMeta. */
export function removeBlogArticleMetaArtifacts() {
  document.getElementById('blog-post-schema')?.remove();
  document.getElementById('breadcrumb-schema')?.remove();
  removeMetaProperty('article:published_time');
  removeMetaProperty('article:author');
  removeMetaProperty('article:section');
}

/** Article page: title, description, OG article type, canonical, JSON-LD. */
export function applyBlogArticleMeta(post: BlogPost) {
  const description =
    post.excerpt.length <= 160 ? post.excerpt : `${post.excerpt.slice(0, 157)}…`;
  const path = `/blog/${post.id}`;
  const url = `${SITE_ORIGIN}${path}`;
  const imageUrl = `${SITE_ORIGIN}${post.image}`;
  const title = `${post.title} | ComplyCare Blog`;

  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
  descriptionTag.setAttribute('name', 'description');
  descriptionTag.setAttribute('content', description);
  if (!descriptionTag.parentElement) {
    document.head.appendChild(descriptionTag);
  }

  setMetaProperty('og:type', 'article');
  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);
  setMetaProperty('og:url', url);
  setMetaProperty('og:image', imageUrl);

  setTwitter('twitter:card', 'summary_large_image');
  setTwitter('twitter:title', title);
  setTwitter('twitter:description', description);
  setTwitter('twitter:image', imageUrl);

  setMetaProperty('article:published_time', post.date);
  setMetaProperty('article:author', post.author);
  setMetaProperty('article:section', post.category);

  const authorName = document.querySelector('meta[name="author"]') ?? document.createElement('meta');
  authorName.setAttribute('name', 'author');
  authorName.setAttribute('content', post.author);
  if (!authorName.parentElement) {
    document.head.appendChild(authorName);
  }

  const keywords = document.querySelector('meta[name="keywords"]') ?? document.createElement('meta');
  keywords.setAttribute('name', 'keywords');
  keywords.setAttribute('content', post.tags.join(', '));
  if (!keywords.parentElement) {
    document.head.appendChild(keywords);
  }

  setCanonical(url);

  const schemaId = 'blog-post-schema';
  let schemaScript = document.getElementById(schemaId);
  if (!schemaScript) {
    schemaScript = document.createElement('script');
    schemaScript.id = schemaId;
    schemaScript.type = 'application/ld+json';
    document.head.appendChild(schemaScript);
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ComplyCare',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/complycare-logo.svg`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: post.tags.join(', '),
  };
  schemaScript.textContent = JSON.stringify(articleSchema);

  const breadcrumbId = 'breadcrumb-schema';
  let breadcrumbScript = document.getElementById(breadcrumbId);
  if (!breadcrumbScript) {
    breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = breadcrumbId;
    breadcrumbScript.type = 'application/ld+json';
    document.head.appendChild(breadcrumbScript);
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_ORIGIN,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${SITE_ORIGIN}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
}

export function applyBlogNotFoundMeta() {
  removeBlogArticleMetaArtifacts();
  const title = `Post not found | ComplyCare Blog`;
  const description =
    'That article could not be found. Browse insights for post-acute operators on the ComplyCare blog.';
  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
  descriptionTag.setAttribute('name', 'description');
  descriptionTag.setAttribute('content', description);
  if (!descriptionTag.parentElement) {
    document.head.appendChild(descriptionTag);
  }

  setMetaProperty('og:type', 'website');
  setMetaProperty('og:title', title);
  setMetaProperty('og:description', description);
  setMetaProperty('og:url', `${SITE_ORIGIN}/blog`);
  setMetaProperty('og:image', `${SITE_ORIGIN}/complycare-logo.svg`);

  setTwitter('twitter:card', 'summary_large_image');
  setTwitter('twitter:title', title);
  setTwitter('twitter:description', description);
  setTwitter('twitter:image', `${SITE_ORIGIN}/complycare-logo.svg`);

  setCanonical(`${SITE_ORIGIN}/blog`);
}
