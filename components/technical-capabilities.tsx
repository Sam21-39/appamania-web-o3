import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Database, Cloud, Shield, Zap, Globe, Cpu, Palette } from "lucide-react"

const capabilities = [
  {
    icon: Smartphone,
    title: "Cross-Platform Development",
    description: "Single codebase for multiple platforms with native performance.",
    technologies: ["Flutter", "Dart", "iOS", "Android", "Web", "Desktop"],
  },
  {
    icon: Database,
    title: "Backend Integration",
    description: "Seamless integration with modern backend services and databases.",
    technologies: ["Firebase", "Supabase", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and serverless computing solutions.",
    technologies: ["Google Cloud", "AWS", "Vercel", "Netlify", "Cloud Functions", "Serverless"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with industry-standard compliance.",
    technologies: ["OAuth 2.0", "JWT", "HTTPS", "Data Encryption", "GDPR", "HIPAA"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast apps with optimized performance and user experience.",
    technologies: ["Code Splitting", "Lazy Loading", "Caching", "CDN", "Image Optimization", "Bundle Analysis"],
  },
  {
    icon: Globe,
    title: "Internationalization",
    description: "Multi-language support and localization for global audiences.",
    technologies: ["i18n", "l10n", "RTL Support", "Currency", "Date Formats", "Locale-specific UI"],
  },
  {
    icon: Cpu,
    title: "Advanced Features",
    description: "Cutting-edge features like AI/ML integration and IoT connectivity.",
    technologies: ["Machine Learning", "AI Integration", "IoT", "Bluetooth", "NFC", "Biometrics"],
  },
  {
    icon: Palette,
    title: "UI/UX Excellence",
    description: "Beautiful, intuitive interfaces following platform design guidelines.",
    technologies: [
      "Material Design",
      "Human Interface Guidelines",
      "Figma",
      "Adobe XD",
      "Responsive Design",
      "Accessibility",
    ],
  },
]

export function TechnicalCapabilities() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Technical Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our expertise spans across modern technologies and development practices to deliver robust, scalable
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                <div className="flex flex-wrap gap-1">
                  {capability.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
