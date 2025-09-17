import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  Settings,
  BarChart3,
  MessageSquare,
  ShoppingCart,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description: "Native-quality cross-platform mobile applications built with Google's Flutter framework.",
    features: [
      "iOS & Android from single codebase",
      "Native performance",
      "Hot reload development",
      "Custom UI components",
    ],
    technologies: ["Flutter", "Dart", "Material Design", "Cupertino"],
  },
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Complete backend-as-a-service integration with Google's Firebase platform.",
    features: ["Real-time database", "User authentication", "Cloud storage", "Push notifications"],
    technologies: ["Firestore", "Firebase Auth", "Cloud Functions", "Firebase Storage"],
  },
  {
    icon: Cloud,
    title: "Supabase Solutions",
    description: "Open-source Firebase alternative with PostgreSQL database and real-time capabilities.",
    features: ["PostgreSQL database", "Real-time subscriptions", "Row-level security", "Auto-generated APIs"],
    technologies: ["Supabase", "PostgreSQL", "PostgREST", "Realtime"],
  },
  {
    icon: Shield,
    title: "Security & Authentication",
    description: "Enterprise-grade security implementation with multiple authentication methods.",
    features: ["Multi-factor authentication", "OAuth integration", "Biometric authentication", "Data encryption"],
    technologies: ["Firebase Auth", "OAuth 2.0", "JWT", "Biometrics"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "App performance tuning and optimization for smooth user experience.",
    features: ["Code optimization", "Image compression", "Lazy loading", "Caching strategies"],
    technologies: ["Flutter DevTools", "Performance Profiler", "Memory Management", "Network Optimization"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Monitoring",
    description: "Comprehensive app analytics and crash reporting for data-driven decisions.",
    features: ["User behavior tracking", "Crash reporting", "Performance monitoring", "Custom events"],
    technologies: ["Firebase Analytics", "Crashlytics", "Performance Monitoring", "Custom Dashboards"],
  },
  {
    icon: MessageSquare,
    title: "Real-time Features",
    description: "Live chat, notifications, and real-time data synchronization capabilities.",
    features: ["Live messaging", "Push notifications", "Real-time updates", "Offline sync"],
    technologies: ["WebSocket", "Firebase Messaging", "Stream API", "Background Sync"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce app development with payment gateway integration.",
    features: ["Product catalog", "Shopping cart", "Payment processing", "Order management"],
    technologies: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing app maintenance, updates, and technical support services.",
    features: ["Bug fixes", "Feature updates", "OS compatibility", "Performance monitoring"],
    technologies: ["CI/CD", "Automated Testing", "Version Control", "Issue Tracking"],
  },
]

export function DetailedServices() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Service Offerings</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive mobile app development services tailored to your business needs and technical requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
