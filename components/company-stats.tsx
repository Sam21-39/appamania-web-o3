export function CompanyStats() {
  const stats = [
    { number: "50+", label: "Apps Delivered", description: "Successful projects across various industries" },
    { number: "5+", label: "Years Experience", description: "Deep expertise in mobile development" },
    { number: "100%", label: "Client Satisfaction", description: "Committed to exceeding expectations" },
    { number: "24/7", label: "Support Available", description: "Always here when you need us" },
    { number: "15+", label: "Team Members", description: "Skilled developers and designers" },
    { number: "10M+", label: "App Downloads", description: "Combined downloads of our client apps" },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Numbers that reflect our commitment to delivering exceptional mobile applications and client success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground leading-tight">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
