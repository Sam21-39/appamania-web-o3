import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for MVPs and simple apps",
    price: "$14,999",
    duration: "6-8 weeks",
    popular: false,
    offer: "Launch offer: Free design sprint (worth $1,999)",
    features: [
      "Single platform (iOS or Android)",
      "Basic UI/UX design",
      "Firebase authentication",
      "Basic database integration",
      "Push notifications",
      "App store submission",
      "3 months support",
      "Source code included",
    ],
    notIncluded: ["Cross-platform development", "Advanced animations", "Third-party integrations", "Custom backend"],
  },
  {
    name: "Professional",
    description: "Most popular for business apps",
    price: "$34,999",
    duration: "10-14 weeks",
    popular: true,
    offer: "10% off + Free ASO setup",
    features: [
      "Cross-platform (iOS & Android)",
      "Custom UI/UX design",
      "Firebase/Supabase integration",
      "Advanced database features",
      "Real-time functionality",
      "Payment gateway integration",
      "Analytics & monitoring",
      "App store optimization",
      "6 months support",
      "Complete documentation",
    ],
    notIncluded: ["Enterprise features", "Advanced AI/ML", "Complex integrations"],
  },
  {
    name: "Enterprise",
    description: "For complex, large-scale applications",
    price: "$74,999+",
    duration: "16+ weeks",
    popular: false,
    offer: "Complimentary onboarding workshop",
    features: [
      "Everything in Professional",
      "Advanced security features",
      "Custom backend development",
      "Third-party API integrations",
      "AI/ML capabilities",
      "Advanced analytics",
      "Multi-tenant architecture",
      "Enterprise-grade scalability",
      "12 months support",
      "Dedicated project manager",
      "Priority support",
    ],
    notIncluded: [],
  },
]

export function PricingPlans() {
  return (
    <section id="plans" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Select the package that best fits your project requirements and budget. All plans include full source code
            ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-primary/50 shadow-lg scale-105" : "border-border/50 hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{plan.description}</CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-primary">{plan.price}</div>
                  {plan.offer && (
                    <div className="text-xs font-medium text-accent bg-accent/10 inline-block px-2 py-1 rounded-md">
                      {plan.offer}
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground">Timeline: {plan.duration}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Not included:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <span className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground">×</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  asChild
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need something custom?</p>
          <Button variant="outline" asChild>
            <Link href="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
