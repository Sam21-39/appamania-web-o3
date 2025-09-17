export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Appamania",
    description:
      "Expert mobile app development company specializing in Flutter, Firebase, and Supabase. Transform your ideas into powerful mobile applications.",
    url: "https://appamania.com",
    logo: "https://appamania.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@appamania.com",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    sameAs: ["https://linkedin.com/company/appamania", "https://twitter.com/appamania", "https://github.com/appamania"],
    foundingDate: "2019",
    numberOfEmployees: "15",
    areaServed: "Worldwide",
    serviceType: ["Mobile App Development", "Flutter Development", "Firebase Integration", "Supabase Development"],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development",
    description: "Professional Flutter and Firebase mobile app development services for iOS and Android platforms.",
    provider: {
      "@type": "Organization",
      name: "Appamania",
      url: "https://appamania.com",
    },
    serviceType: "Mobile App Development",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flutter Development",
            description: "Cross-platform mobile app development using Flutter framework",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Firebase Integration",
            description: "Backend-as-a-service integration with Google Firebase",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Supabase Development",
            description: "Open-source Firebase alternative with PostgreSQL database",
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://appamania.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://appamania.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: "https://appamania.com/pricing",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        item: "https://appamania.com/about",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://appamania.com/contact",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
