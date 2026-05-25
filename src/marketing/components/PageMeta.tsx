import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE_PATH, SITE_ORIGIN, canonicalUrl } from '../seo/constants';

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  /** Absolute path for og:image / twitter:image (e.g. `/complycare-logo.svg`). */
  imagePath?: string;
  /** Optional array of FAQs to inject FAQPage schema. */
  faqs?: { question: string; answer: string }[];
};

const BASE_TITLE = 'ComplyCare.io';

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

function setTwitter(name: string, content: string) {
  ensureMeta('name', name).setAttribute('content', content);
}

export function PageMeta({ title, description, path, imagePath = DEFAULT_OG_IMAGE_PATH, faqs }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    const pageUrl = canonicalUrl(path);
    const imageUrl = `${SITE_ORIGIN}${imagePath}`;

    document.title = fullTitle;

    const descriptionTag = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    descriptionTag.setAttribute('content', description);
    if (!descriptionTag.parentElement) {
      document.head.appendChild(descriptionTag);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', pageUrl);
    if (!canonicalTag.parentElement) {
      document.head.appendChild(canonicalTag);
    }

    setMetaProperty('og:type', 'website');
    setMetaProperty('og:site_name', BASE_TITLE);
    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', pageUrl);
    setMetaProperty('og:image', imageUrl);
    setMetaProperty('og:locale', 'en_US');

    setTwitter('twitter:card', 'summary_large_image');
    setTwitter('twitter:title', fullTitle);
    setTwitter('twitter:description', description);
    setTwitter('twitter:image', imageUrl);

    const faqSchemaId = 'faq-page-schema';
    let faqScript = document.getElementById(faqSchemaId);
    if (faqs && faqs.length > 0) {
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
    } else if (faqScript) {
      faqScript.remove();
    }
  }, [description, imagePath, path, title, faqs]);

  return null;
}
