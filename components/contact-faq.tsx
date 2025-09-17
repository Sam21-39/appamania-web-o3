import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly and we'll get back to you within a few hours.",
  },
  {
    question: "What information should I include in my project inquiry?",
    answer:
      "Include your project goals, target audience, key features you envision, timeline, budget range, and any specific technical requirements. The more details you provide, the better we can tailor our response.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer a free initial consultation to discuss your project, understand your needs, and provide expert advice on the best approach for your mobile app.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "We work with clients worldwide and have established processes for remote collaboration, including regular video calls, project management tools, and clear communication channels.",
  },
  {
    question: "What happens after I submit the contact form?",
    answer:
      "After you submit the form, we'll review your project details and respond within 24 hours with follow-up questions, initial recommendations, and next steps for moving forward.",
  },
  {
    question: "Do you sign NDAs for project discussions?",
    answer:
      "Yes, we're happy to sign a Non-Disclosure Agreement (NDA) before discussing your project details. We understand the importance of protecting your intellectual property and business ideas.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Questions About Getting Started?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Here are answers to common questions about contacting us and starting your project.
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
