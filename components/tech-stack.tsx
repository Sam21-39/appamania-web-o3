import { Badge } from "@/components/ui/badge"

const technologies = [
  { name: "Flutter", category: "Framework" },
  { name: "Dart", category: "Language" },
  { name: "Firebase", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Node.js", category: "Runtime" },
  { name: "TypeScript", category: "Language" },
  { name: "REST APIs", category: "Integration" },
  { name: "GraphQL", category: "Integration" },
  { name: "Cloud Functions", category: "Serverless" },
  { name: "Push Notifications", category: "Feature" },
  { name: "Real-time Sync", category: "Feature" },
]

export function TechStack() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Technologies We Master</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our team stays current with the latest technologies to deliver modern, scalable, and maintainable mobile
            applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-card hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
            >
              {tech.name}
            </Badge>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">And many more technologies to meet your specific requirements</p>
        </div>
      </div>
    </section>
  )
}
