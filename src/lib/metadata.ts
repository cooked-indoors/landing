import type { Metadata } from 'next';
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import type { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

// Site constants
export const siteConfig = {
  name: 'Cooked Indoors',
  description: 'Reverse Diseases With a Simple Diet Plan - Get personalized meal plans and expert advice from our dietitians.',
  url: 'https://cookedindoors.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://x.com/cookedindoorshq',
  },
};

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'diet plan',
    'healthy meals',
    'meal delivery',
    'dietitian consultation',
    'health improvement',
    'nutrition',
    'meal kits',
    'disease reversal',
    'healthy eating',
    'personalized diet',
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Default OpenGraph metadata
export const baseOpenGraph: OpenGraph = {
  type: 'website',
  siteName: siteConfig.name,
  title: siteConfig.name,
  description: siteConfig.description,
  images: [
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  ],
};

// Default Twitter metadata
export const baseTwitter: Twitter = {
  card: 'summary_large_image',
  title: siteConfig.name,
  description: siteConfig.description,
  images: [siteConfig.ogImage],
  creator: '@cookedindoors',
};

// Generate metadata for specific pages
export function generateMetadata(
  title: string,
  description?: string,
  ogImage?: string,
): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      ...baseOpenGraph,
      title,
      description: description || siteConfig.description,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : baseOpenGraph.images,
    },
    twitter: {
      ...baseTwitter,
      title,
      description: description || siteConfig.description,
      images: ogImage ? [ogImage] : baseTwitter.images,
    },
  };
}


