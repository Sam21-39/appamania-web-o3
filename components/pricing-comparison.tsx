import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const features = [
  {
    category: "Development",
    items: [
      { name: "Cross-platform development", starter: false, professional: true, enterprise: true },
      { name: "Custom UI/UX design", starter: false, professional: true, enterprise: true },
      { name: "Responsive design", starter: true, professional: true, enterprise: true },
      { name: "Source code ownership", starter: true, professional: true, enterprise: true },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Firebase integration", starter: true, professional: true, enterprise: true },
      { name: "Supabase integration", starter: false, professional: true, enterprise: true },
      { name: "Custom backend", starter: false, professional: false, enterprise: true },
      { name: "Advanced database features", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    category: "Features",
    items: [
      { name: "User authentication", starter: true, professional: true, enterprise: true },
      { name: "Push notifications", starter: true, professional: true, enterprise: true },
      { name: "Real-time functionality", starter: false, professional: true, enterprise: true },
      { name: "Payment integration", starter: false, professional: true, enterprise: true },
      { name: "AI/ML capabilities", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      { name: "App store submission", starter: true, professional: true, enterprise: true },
      { name: "Bug fixes (3 months)", starter: true, professional: false, enterprise: false },
      { name: "Bug fixes (6 months)", starter: false, professional: true, enterprise: false },
      { name: "Bug fixes (12 months)", starter: false, professional: false, enterprise: true },
      { name: "Priority support", starter: false, professional: false, enterprise: true },
    ],
  },
]

export function PricingComparison() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Feature Comparison</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Compare what's included in each package to find the perfect fit for your project.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-card">
            <div className="grid grid-cols-4 gap-4">
              <div></div>
              <CardTitle className="text-center text-lg">Starter</CardTitle>
              <CardTitle className="text-center text-lg">Professional</CardTitle>
              <CardTitle className="text-center text-lg">Enterprise</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="bg-muted/50 px-6 py-3 border-b border-border">
                  <h3 className="font-semibold text-foreground">{category.category}</h3>
                </div>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/50 hover:bg-muted/20 transition-colors"
                  >
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                    <div className="flex justify-center">
                      {item.starter ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.professional ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50" />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {item.enterprise ? (
                        <Check className="h-5 w-5 text-primary" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/50" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
