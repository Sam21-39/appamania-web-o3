import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { CompanyStats } from "@/components/company-stats"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Appamania - Expert Flutter & Firebase Development Team",
  description:
    "Learn about Appamania's journey, our expert team of Flutter and Firebase developers, and our commitment to delivering exceptional mobile applications.",
  keywords:
    "Appamania team, Flutter developers, Firebase experts, mobile app development company, about us, company story",
  openGraph: {
    title: "About Appamania - Expert Flutter & Firebase Development Team",
    description: "Learn about our expert team and commitment to delivering exceptional mobile applications.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <CompanyStats />
      <CompanyValues />
      <TeamSection />
      <Footer />
    </main>
  )
}
