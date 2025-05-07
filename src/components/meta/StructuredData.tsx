'use client'

import { siteConfig } from '@/lib/metadata'

interface OrganizationSchemaProps {
  url?: string
  logo?: string
  name?: string
}

interface WebsiteSchemaProps {
  url?: string
  name?: string
  description?: string
}

interface WebPageSchemaProps {
  title: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
}

interface BreadcrumbSchemaProps {
  items: {
    name: string
    item: string
  }[]
}

interface ProductSchemaProps {
  name: string
  description: string
  image: string
  price: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  url: string
  sku?: string
  brand?: string
  reviewCount?: number
  reviewRating?: number
}

/**
 * Component for adding Organization Schema.org structured data
 */
export function OrganizationSchema({
  url = siteConfig.url,
  logo = `${siteConfig.url}/logo.png`,
  name = siteConfig.name,
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs: [
      siteConfig.links.twitter,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Component for adding Website Schema.org structured data
 */
export function WebsiteSchema({
  url = siteConfig.url,
  name = siteConfig.name,
  description = siteConfig.description,
}: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url,
    name,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Component for adding WebPage Schema.org structured data
 */
export function WebPageSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Component for adding BreadcrumbList Schema.org structured data
 */
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Component for adding Product Schema.org structured data
 */
export function ProductSchema({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  url,
  sku,
  brand,
  reviewCount,
  reviewRating,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url,
    },
    ...(sku && { sku }),
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand,
      },
    }),
    ...(reviewCount &&
      reviewRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: reviewRating,
          reviewCount,
        },
      }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
