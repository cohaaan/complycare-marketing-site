import type { BlogPost } from '../data/blogPosts';
import { SITE_ORIGIN, canonicalUrl } from './constants';

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

function extractFaqsFromHtml(html: string): { question: string; answer: string }[] {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const faqs: { question: string; answer: string }[] = [];
  const h2s = tempDiv.querySelectorAll('h2');

  h2s.forEach((h2) => {
    const question = h2.textContent?.trim();
    const nextP = h2.nextElementSibling;
    if (question && nextP && nextP.tagName === 'P') {
      const strong = nextP.querySelector('strong');
      if (strong && strong.textContent?.includes('Answer:')) {
        const answerText = nextP.textContent?.replace('Answer:', '').trim();
        if (answerText) {
          faqs.push({ question, answer: answerText });
        }
      }
    }
  });

  return faqs;
}

function applyFaqSchema(articleContentHtml: string | null | undefined) {
  const faqSchemaId = 'blog-faq-schema';
  let faqScript = document.getElementById(faqSchemaId);

  if (articleContentHtml) {
    const faqs = extractFaqsFromHtml(articleContentHtml);
    if (faqs.length > 0) {
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = faqSchemaId;
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
      return;
    }
  }

  faqScript?.remove();
}

/** Remove JSON-LD and article-specific meta; leave generic OG for next route to overwrite via PageMeta. */
export function removeBlogArticleMetaArtifacts() {
  document.getElementById('blog-post-schema')?.remove();
  document.getElementById('breadcrumb-schema')?.remove();
  document.getElementById('blog-faq-schema')?.remove();
  removeMetaProperty('article:published_time');
  removeMetaProperty('article:modified_time');
  removeMetaProperty('article:author');
  removeMetaProperty('article:section');
}

/** Article page: title, description, OG article type, canonical, JSON-LD. */
export function applyBlogArticleMeta(post: BlogPost, articleContentHtml?: string | null) {
  const description =
    post.excerpt.length <= 160 ? post.excerpt : `${post.excerpt.slice(0, 157)}…`;
  const url = canonicalUrl(`/blog/${post.slug}`);
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
  const modified = post.dateModified ?? post.date;
  setMetaProperty('article:modified_time', modified);
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
      '@type': post.author === 'ComplyCare Team' ? 'Organization' : 'Person',
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
    dateModified: modified,
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
        item: canonicalUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: canonicalUrl('/blog'),
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

  applyFaqSchema(articleContentHtml);
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
  setMetaProperty('og:url', canonicalUrl('/blog'));
  setMetaProperty('og:image', `${SITE_ORIGIN}/complycare-logo.svg`);

  setTwitter('twitter:card', 'summary_large_image');
  setTwitter('twitter:title', title);
  setTwitter('twitter:description', description);
  setTwitter('twitter:image', `${SITE_ORIGIN}/complycare-logo.svg`);

  setCanonical(canonicalUrl('/blog'));
}
