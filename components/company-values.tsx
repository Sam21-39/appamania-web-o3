import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Zap, Users, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description:
      "We're genuinely passionate about mobile technology and take pride in every line of code we write. Excellence isn't just a goal—it's our standard.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in honest communication, transparent pricing, and building long-term relationships based on trust and mutual respect.",
  },
  {
    icon: Zap,
    title: "Innovation & Agility",
    description:
      "We embrace new technologies and methodologies, staying agile to adapt to changing requirements and deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We see ourselves as an extension of your team, working collaboratively to understand your vision and bring it to life.",
  },
  {
    icon: Award,
    title: "Quality Commitment",
    description:
      "Quality is non-negotiable. From code architecture to user experience, we maintain the highest standards in everything we deliver.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We design and develop apps with a global mindset, considering diverse users, markets, and cultural contexts from day one.",
  },
]

export function CompanyValues() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The principles that guide everything we do and shape how we work with our clients and each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
