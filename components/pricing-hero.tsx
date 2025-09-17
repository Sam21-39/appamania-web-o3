import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"

export function PricingHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <DollarSign className="w-4 h-4 mr-2" />
            Transparent Pricing
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight text-balance">
            Simple, Transparent
            <span className="text-primary block">Pricing Plans</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-pretty">
            Choose the perfect package for your mobile app development needs. No hidden fees, no surprises - just honest
            pricing for quality work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Get Custom Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
              <Link href="#plans">View Plans</Link>
            </Button>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">No Hidden Fees</div>
            <div className="text-muted-foreground">What you see is what you pay</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Fixed Timeline</div>
            <div className="text-muted-foreground">Predictable delivery dates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">Full Ownership</div>
            <div className="text-muted-foreground">Complete source code included</div>
          </div>
        </div>
      </div>
    </section>
  )
}
