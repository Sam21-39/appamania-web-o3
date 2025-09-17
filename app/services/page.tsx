import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { DetailedServices } from "@/components/detailed-services"
import { ProcessSection } from "@/components/process-section"
import { TechnicalCapabilities } from "@/components/technical-capabilities"
import { ServicesFAQ } from "@/components/services-faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development Services - Flutter & Firebase Experts | Appamania",
  description:
    "Comprehensive mobile app development services using Flutter, Firebase, and Supabase. From MVP to enterprise solutions, we deliver scalable cross-platform applications.",
  keywords:
    "Flutter development services, Firebase app development, Supabase integration, cross-platform mobile apps, iOS Android development, mobile app consulting",
  openGraph: {
    title: "Mobile App Development Services - Flutter & Firebase Experts",
    description: "Comprehensive mobile app development services using Flutter, Firebase, and Supabase.",
    type: "website",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <DetailedServices />
      <ProcessSection />
      <TechnicalCapabilities />
      <ServicesFAQ />
      <Footer />
    </main>
  )
}
