import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Rocket, Target } from "lucide-react"

export function CompanyStory() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Appamania was born from a simple observation: too many great ideas never make it to users' phones
                because of complex, expensive development processes. We set out to change that.
              </p>
              <p>
                Founded in 2019 by a team of passionate developers who had worked at major tech companies, we saw the
                potential of Flutter and Firebase to revolutionize mobile app development. We believed that with the
                right expertise and approach, we could make high-quality mobile apps accessible to businesses of all
                sizes.
              </p>
              <p>
                Today, we've helped over 50 companies bring their mobile app ideas to life, from innovative startups to
                established enterprises. Our focus remains the same: delivering exceptional mobile experiences using
                cutting-edge technology.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Innovation First</h3>
                    <p className="text-muted-foreground">
                      We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a
                      competitive advantage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Client-Focused</h3>
                    <p className="text-muted-foreground">
                      Every project is tailored to our client's specific needs, goals, and budget. Your success is our
                      success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Quality Delivery</h3>
                    <p className="text-muted-foreground">
                      We maintain the highest standards in code quality, user experience, and project delivery
                      timelines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
