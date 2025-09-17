import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Prefer to reach out directly? Here are all the ways you can contact our team.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-2">Send us a detailed message about your project</p>
                    <Link href="mailto:hello@appamania.com" className="text-primary hover:text-primary/80 font-medium">
                      hello@appamania.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak directly with our team</p>
                    <Link href="tel:+15551234567" className="text-primary hover:text-primary/80 font-medium">
                      +1 (555) 123-4567
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">Our office location</p>
                    <address className="text-primary not-italic">
                      123 Tech Street
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </address>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground text-center">Other Ways to Connect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Live Chat</h4>
                      <p className="text-sm text-muted-foreground">Available during business hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Schedule Meeting</h4>
                      <p className="text-sm text-muted-foreground">Book a consultation call</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
            <h3 className="text-lg font-semibold text-foreground mb-2">Emergency Support</h3>
            <p className="text-sm text-muted-foreground mb-3">
              For existing clients with critical issues outside business hours
            </p>
            <Link href="tel:+15551234567" className="text-primary hover:text-primary/80 font-medium">
              +1 (555) 123-4567 (Emergency Line)
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
