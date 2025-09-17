import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "Former Google engineer with 8+ years in mobile development. Flutter expert and Firebase specialist.",
    skills: ["Flutter", "Firebase", "iOS", "Android"],
    image: "/professional-headshot-of-asian-male-software-engin.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Design Lead",
    bio: "Award-winning designer with expertise in mobile interfaces and user experience optimization.",
    skills: ["UI/UX", "Figma", "Design Systems", "User Research"],
    image: "/female-ux-designer-headshot.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Senior Flutter Developer",
    bio: "Flutter enthusiast with 6+ years building cross-platform apps for startups and enterprises.",
    skills: ["Flutter", "Dart", "State Management", "Performance"],
    image: "/professional-headshot-of-hispanic-male-developer.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Zhang",
    role: "Backend Architect",
    bio: "Cloud infrastructure expert specializing in Firebase, Supabase, and scalable backend solutions.",
    skills: ["Firebase", "Supabase", "Node.js", "Cloud Architecture"],
    image: "/professional-headshot-of-asian-female-backend-engi.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Mobile QA Engineer",
    bio: "Quality assurance specialist ensuring every app meets the highest standards across all devices.",
    skills: ["Testing", "Automation", "QA", "Device Testing"],
    image: "/professional-headshot-of-korean-male-qa-engineer.jpg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Lisa Thompson",
    role: "Project Manager",
    bio: "Agile project management expert ensuring smooth delivery and excellent client communication.",
    skills: ["Project Management", "Agile", "Client Relations", "Strategy"],
    image: "/female-project-manager-headshot.png",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Talented professionals who are passionate about creating exceptional mobile experiences for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                  <Link
                    href={member.social.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to join our team?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Open Positions
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
