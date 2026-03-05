import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

const BASE_TITLE = 'ComplyCare.io';

export function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;

    const descriptionTag = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    descriptionTag.setAttribute('content', description);
    if (!descriptionTag.parentElement) {
      document.head.appendChild(descriptionTag);
    }

    const canonicalTag = document.querySelector('link[rel="canonical"]') ?? document.createElement('link');
    canonicalTag.setAttribute('rel', 'canonical');
    canonicalTag.setAttribute('href', `https://complycare.io${path}`);
    if (!canonicalTag.parentElement) {
      document.head.appendChild(canonicalTag);
    }
  }, [description, path, title]);

  return null;
}
