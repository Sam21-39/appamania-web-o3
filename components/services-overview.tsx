import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Database, Cloud, Zap, Shield, Users } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Flutter Development",
    description: "Cross-platform mobile apps with native performance using Google's Flutter framework.",
  },
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Real-time databases, authentication, and cloud functions for scalable backend solutions.",
  },
  {
    icon: Cloud,
    title: "Supabase Solutions",
    description: "Open-source Firebase alternative with PostgreSQL database and real-time subscriptions.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast apps optimized for both iOS and Android platforms.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security with encrypted data transmission and secure authentication.",
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive and engaging user interfaces designed for maximum user retention.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We combine cutting-edge technology with proven development practices to deliver exceptional mobile
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
