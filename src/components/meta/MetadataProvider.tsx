'use client'

import { usePathname } from 'next/navigation'
import { OrganizationSchema, WebsiteSchema, WebPageSchema } from './StructuredData'
import { siteConfig } from '@/lib/metadata'

interface MetadataProviderProps {
  title?: string
  description?: string
  image?: string
  type?: 'website' | 'article'
  date?: string
  author?: string
}

/**
 * Component for adding structured data to pages
 * This should be used in the root layout to provide base structured data
 */
export default function MetadataProvider({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  date,
}: MetadataProviderProps) {
  const pathname = usePathname()
  const url = `${siteConfig.url}${pathname}`
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name

  return (
    <>
      {/* Add base structured data */}
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema
        title={pageTitle}
        description={description}
        url={url}
        image={image}
        datePublished={date}
        dateModified={date}
      />
    </>
  )
}
