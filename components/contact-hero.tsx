import { MessageSquare, Clock, CheckCircle } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Start Your Project
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight text-balance">
            Ready to Build Your
            <span className="text-primary block">Mobile App?</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed text-pretty">
            Get in touch with our team for a free consultation. We'll discuss your project, provide expert advice, and
            create a custom development plan.
          </p>
        </div>

        {/* Contact Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Free Consultation</h3>
            <p className="text-muted-foreground">No-obligation discussion about your project</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">24-Hour Response</h3>
            <p className="text-muted-foreground">Quick turnaround on all inquiries</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Custom Quote</h3>
            <p className="text-muted-foreground">Tailored pricing for your specific needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
