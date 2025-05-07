'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/metadata'

interface PageMetaProps {
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article'
  date?: string
  author?: string
}

/**
 * Component for adding page-specific metadata
 * This is useful for client components that need to add metadata
 */
export default function PageMeta({
  title,
  description,
  image = siteConfig.ogImage,
  type = 'website',
  date,
  author,
}: PageMetaProps) {
  const pathname = usePathname()
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const fullDescription = description || siteConfig.description
  const url = `${siteConfig.url}${pathname}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={image} />

      {/* Article specific tags */}
      {type === 'article' && date && (
        <>
          <meta property="article:published_time" content={date} />
          {author && <meta property="article:author" content={author} />}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  )
}
