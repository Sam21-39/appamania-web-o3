import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOHead({ title, description, canonical, ogImage, noindex = false }: SEOHeadProps) {
  const defaultTitle = "Appamania - Expert Flutter & Firebase Mobile App Development"
  const defaultDescription =
    "Professional mobile app development company specializing in Flutter, Firebase, and Supabase. Transform your ideas into powerful mobile applications."
  const defaultOgImage = "https://appamania.com/og-image.jpg"

  const pageTitle = title ? `${title} | Appamania` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageCanonical = canonical || "https://appamania.com"
  const pageOgImage = ogImage || defaultOgImage

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />

      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Additional SEO tags */}
      <meta name="author" content="Appamania Team" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="web" />
      <meta name="rating" content="general" />
    </Head>
  )
}
