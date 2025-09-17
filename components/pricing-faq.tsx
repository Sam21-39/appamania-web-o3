import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What's included in the pricing?",
    answer:
      "Our pricing includes complete app development, UI/UX design, backend integration, testing, app store submission, and post-launch support. You also get full source code ownership and comprehensive documentation.",
  },
  {
    question: "Are there any hidden costs?",
    answer:
      "No hidden costs! Our pricing is transparent and includes everything mentioned in the package. The only additional costs might be third-party services like app store fees ($99/year for Apple, $25 one-time for Google) or premium Firebase/Supabase plans if needed.",
  },
  {
    question: "Can I upgrade my plan during development?",
    answer:
      "Yes, you can upgrade your plan at any time during development. We'll adjust the timeline and pricing accordingly, ensuring you only pay the difference between plans.",
  },
  {
    question: "What if my project takes longer than estimated?",
    answer:
      "We provide fixed timelines based on the agreed scope. If additional features are requested that extend the timeline, we'll discuss the impact and adjust accordingly. We never charge extra for our estimation errors.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans. Typically, we structure payments as: 30% upfront, 40% at milestone completion, and 30% upon final delivery. Custom payment schedules can be arranged for enterprise clients.",
  },
  {
    question: "What happens after the support period ends?",
    answer:
      "After the included support period, you can choose to extend support with our maintenance packages, handle updates in-house (you own the source code), or engage us for specific updates as needed.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with our work within the first 2 weeks, we'll refund your initial payment. After that, we work closely with you to ensure the final product meets your expectations.",
  },
  {
    question: "How do you handle scope changes?",
    answer:
      "Minor changes are included in our packages. For significant scope changes, we'll provide a detailed impact assessment including time and cost implications before proceeding. We believe in transparent communication throughout the project.",
  },
]

export function PricingFAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Pricing FAQ</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Common questions about our pricing and development process.
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
