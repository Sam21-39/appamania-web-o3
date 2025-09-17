import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export function PricingCTA() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Get a detailed quote tailored to your specific requirements. We'll discuss your project, recommend the
              best approach, and provide transparent pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" asChild className="text-lg px-8 py-6">
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Get Custom Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-6 bg-transparent">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule Consultation
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Free consultation
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                No obligation quote
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                24-hour response
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
