import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Users className="w-4 h-4 mr-2" />
            Meet Our Team
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight text-balance">
            We're Passionate About
            <span className="text-primary block">Mobile Innovation</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-pretty">
            Founded by mobile app enthusiasts, Appamania combines technical expertise with creative vision to transform
            ideas into powerful mobile experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Work With Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="/portfolio">See Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
