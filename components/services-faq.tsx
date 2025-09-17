import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Why choose Flutter over native development?",
    answer:
      "Flutter allows us to build high-performance apps for both iOS and Android from a single codebase, reducing development time and costs by up to 50%. You get native performance with faster time-to-market and easier maintenance.",
  },
  {
    question: "What's the difference between Firebase and Supabase?",
    answer:
      "Firebase is Google's comprehensive backend platform with excellent real-time capabilities and extensive integrations. Supabase is an open-source alternative built on PostgreSQL, offering more control and SQL capabilities. We help you choose based on your specific needs.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "Development time varies based on complexity. A simple app takes 6-8 weeks, medium complexity apps take 10-16 weeks, and complex enterprise apps can take 20+ weeks. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide app store submission and approval?",
    answer:
      "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including app optimization, metadata creation, and addressing any review feedback.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "We offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, OS compatibility updates, and technical support. We have flexible maintenance packages to suit your needs.",
  },
  {
    question: "Can you integrate with existing systems and APIs?",
    answer:
      "We specialize in integrating mobile apps with existing business systems, third-party APIs, legacy databases, and enterprise software. We ensure seamless data flow and functionality.",
  },
  {
    question: "How do you ensure app security?",
    answer:
      "We implement multiple security layers including data encryption, secure authentication, API security, code obfuscation, and follow OWASP mobile security guidelines. We also conduct security audits and penetration testing.",
  },
  {
    question: "Do you provide source code and documentation?",
    answer:
      "Yes, you receive complete source code ownership, comprehensive documentation, deployment guides, and knowledge transfer sessions. We ensure you have everything needed for future maintenance and updates.",
  },
]

export function ServicesFAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Get answers to common questions about our mobile app development services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
