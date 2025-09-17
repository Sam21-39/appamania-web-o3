import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Smartphone } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Code className="w-4 h-4 mr-2" />
            Professional Development Services
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight text-balance">
            Complete Mobile App
            <span className="text-primary block">Development Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-pretty">
            From concept to deployment, we provide end-to-end mobile app development services using Flutter, Firebase,
            and Supabase technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Cross-Platform</h3>
            <p className="text-muted-foreground">Single codebase for iOS and Android</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Scalable Backend</h3>
            <p className="text-muted-foreground">Firebase & Supabase integration</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Clean Code</h3>
            <p className="text-muted-foreground">Maintainable and documented</p>
          </div>
        </div>
      </div>
    </section>
  )
}
