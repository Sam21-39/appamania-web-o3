import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Lightbulb, Code, TestTube, Rocket, Headphones } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements.",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Design & Prototyping",
    description: "Create wireframes, user flows, and interactive prototypes to visualize your app.",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development",
    description: "Build your app using Flutter with Firebase/Supabase backend integration.",
    duration: "6-12 weeks",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description: "Comprehensive testing across devices, platforms, and user scenarios.",
    duration: "1-2 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch your app on App Store and Google Play with proper optimization.",
    duration: "1 week",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and feature enhancements post-launch.",
    duration: "Ongoing",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Development Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A proven methodology that ensures your project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  <span className="text-primary mr-2">{String(index + 1).padStart(2, "0")}.</span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>

              {/* Connection line for desktop */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
