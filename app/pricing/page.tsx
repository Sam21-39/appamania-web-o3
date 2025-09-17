import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"
import { PricingComparison } from "@/components/pricing-comparison"
import { PricingFAQ } from "@/components/pricing-faq"
import { PricingCTA } from "@/components/pricing-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development Pricing - Transparent & Competitive | Appamania",
  description:
    "Transparent pricing for Flutter and Firebase mobile app development. Choose from Starter, Professional, or Enterprise packages. Get a custom quote today.",
  keywords:
    "mobile app development cost, Flutter development pricing, Firebase app cost, mobile app development packages, app development quote",
  openGraph: {
    title: "Mobile App Development Pricing - Transparent & Competitive",
    description: "Transparent pricing for Flutter and Firebase mobile app development packages.",
    type: "website",
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </main>
  )
}
