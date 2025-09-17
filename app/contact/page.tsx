import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactFAQ } from "@/components/contact-faq"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Appamania - Get Your Mobile App Development Quote",
  description:
    "Ready to build your mobile app? Contact Appamania for a free consultation and custom quote. Expert Flutter and Firebase development team ready to help.",
  keywords:
    "contact Appamania, mobile app development quote, Flutter development consultation, Firebase app development contact, get started",
  openGraph: {
    title: "Contact Appamania - Get Your Mobile App Development Quote",
    description: "Ready to build your mobile app? Contact us for a free consultation and custom quote.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactFAQ />
      <Footer />
    </main>
  )
}
