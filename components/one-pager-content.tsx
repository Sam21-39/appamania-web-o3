"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowRight,
  Play,
  Smartphone,
  Database,
  Cloud,
  Zap,
  Shield,
  Users,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Clock,
  Rocket,
  Target,
  Award,
  Calendar,
  Code,
  Palette,
  Settings,
  Headphones,
} from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Flutter Development",
    description: "Cross-platform mobile apps with native performance using Google's Flutter framework.",
  },
  {
    icon: Database,
    title: "Firebase Integration",
    description: "Real-time databases, authentication, and cloud functions for scalable backend solutions.",
  },
  {
    icon: Cloud,
    title: "Supabase Solutions",
    description: "Open-source Firebase alternative with PostgreSQL database and real-time subscriptions.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast apps optimized for both iOS and Android platforms.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security with encrypted data transmission and secure authentication.",
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Intuitive and engaging user interfaces designed for maximum user retention.",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "₹49,999",
    originalPrice: "₹74,999",
    offer: "Free UI kit (₹9,999 value)",
    description: "Perfect for simple apps and MVPs",
    timeline: "4-6 weeks",
    features: [
      "Basic Flutter app development",
      "Firebase authentication & database",
      "Simple UI/UX design (3 screens)",
      "Basic push notifications",
      "Play Store deployment",
      "3 months technical support",
      "Source code delivery",
      "Basic analytics integration",
    ],
    includes: [
      "Project kickoff meeting",
      "Weekly progress updates",
      "Basic testing on 2 devices",
      "App store submission guide",
    ],
    bestFor: "Startups, MVPs, Simple business apps",
  },
  {
    name: "Professional",
    price: "₹1,49,999",
    originalPrice: "₹1,99,999",
    offer: "10% off + Free ASO setup",
    description: "Ideal for business applications",
    timeline: "8-12 weeks",
    features: [
      "Advanced Flutter app with complex features",
      "Firebase/Supabase backend integration",
      "Custom UI/UX design (8-12 screens)",
      "Advanced push notifications",
      "Both iOS & Android deployment",
      "Admin panel included",
      "6 months technical support",
      "API integrations (payment, maps, etc.)",
      "Advanced analytics & crash reporting",
      "User authentication & profiles",
    ],
    includes: [
      "Detailed project planning",
      "Bi-weekly demo sessions",
      "Testing on 5+ devices",
      "App store optimization",
      "Performance optimization",
      "Security audit",
    ],
    popular: true,
    bestFor: "Growing businesses, E-commerce, Service apps",
  },
  {
    name: "Enterprise",
    price: "₹2,99,999+",
    originalPrice: "₹4,49,999+",
    offer: "Complimentary onboarding workshop",
    description: "For complex, scalable solutions",
    timeline: "12-20 weeks",
    features: [
      "Full-scale enterprise application",
      "Advanced backend with microservices",
      "Premium UI/UX design (15+ screens)",
      "Real-time features & notifications",
      "Multi-platform deployment",
      "Advanced admin dashboard",
      "12 months technical support",
      "Custom integrations & APIs",
      "Advanced security implementation",
      "Multi-language support",
      "Offline functionality",
      "Advanced analytics & reporting",
    ],
    includes: [
      "Dedicated project manager",
      "Weekly stakeholder meetings",
      "Comprehensive testing suite",
      "Performance monitoring setup",
      "Security penetration testing",
      "Staff training sessions",
      "Maintenance & updates",
      "24/7 priority support",
    ],
    bestFor: "Large enterprises, Complex workflows, High-traffic apps",
  },
]

const portfolioProjects = [
  {
    title: "ShopEasy - E-commerce Platform",
    description:
      "Complete shopping solution with 50K+ active users, featuring secure payments, inventory management, and personalized recommendations.",
    tech: ["Flutter", "Firebase", "Stripe API", "ML Kit"],
    category: "E-Commerce",
    image: "/modern-ecommerce-mobile-app-interface.jpg",
    results: ["300% increase in sales", "4.8★ app store rating", "50K+ downloads"],
    features: ["Payment Gateway", "AI Recommendations", "Real-time Inventory", "Admin Dashboard"],
  },
  {
    title: "FinTrack - Personal Finance App",
    description:
      "Smart expense tracking and investment management app helping users save 25% more money through AI-powered insights.",
    tech: ["Flutter", "Supabase", "Chart.js", "Bank APIs"],
    category: "Finance",
    image: "/modern-finance-app-dashboard-with-charts-and-expen.jpg",
    results: ["25% average savings increase", "10K+ active users", "4.7★ rating"],
    features: ["Expense Tracking", "Investment Portfolio", "Budget Planning", "Bank Integration"],
  },
  {
    title: "FoodieExpress - Delivery Platform",
    description:
      "Multi-vendor food delivery app serving 100+ restaurants with real-time tracking and seamless ordering experience.",
    tech: ["Flutter", "Firebase", "Google Maps", "Payment APIs"],
    category: "Food Delivery",
    image: "/food-delivery-app-interface-with-maps.jpg",
    results: ["100+ restaurant partners", "20K+ orders monthly", "15-min avg delivery"],
    features: ["Live Order Tracking", "Multi-vendor Support", "Rating System", "Push Notifications"],
  },
  {
    title: "LearnHub - Educational Platform",
    description:
      "Interactive learning app with video courses and quizzes, helping 5K+ students improve their academic performance by 40%.",
    tech: ["Flutter", "Firebase", "Video Streaming", "Analytics"],
    category: "Education",
    image: "/educational-learning-app-interface.jpg",
    results: ["40% grade improvement", "5K+ students", "95% completion rate"],
    features: ["Video Courses", "Interactive Quizzes", "Progress Analytics", "Offline Learning"],
  },
  {
    title: "TaskMaster - Productivity Suite",
    description:
      "Team collaboration and project management tool used by 200+ companies to increase productivity by 35%.",
    tech: ["Flutter", "Supabase", "Real-time Sync", "Analytics"],
    category: "Productivity",
    image: "/task-management-app.png",
    results: ["35% productivity boost", "200+ companies", "99.9% uptime"],
    features: ["Team Collaboration", "Time Tracking", "Project Analytics", "Task Automation"],
  },
]

const developmentTimeline = [
  {
    phase: "Discovery & Planning",
    duration: "1-2 weeks",
    description: "Requirements gathering, wireframing, and project planning",
    icon: Target,
  },
  {
    phase: "UI/UX Design",
    duration: "2-3 weeks",
    description: "Visual design, prototyping, and user experience optimization",
    icon: Palette,
  },
  {
    phase: "Development",
    duration: "4-12 weeks",
    description: "Frontend and backend development with regular testing",
    icon: Code,
  },
  {
    phase: "Testing & Launch",
    duration: "1-2 weeks",
    description: "Quality assurance, app store submission, and deployment",
    icon: Rocket,
  },
]

export function OnePagerContent() {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center animate-fade-in-left">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 group">
                  <div className="absolute inset-0 bg-primary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Smartphone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">Appamania</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Case Studies
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern-mobile-app-development.jpg')] opacity-5 bg-repeat"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <Badge variant="secondary" className="mb-8 px-4 py-2 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Flutter & Firebase Experts in Kolkata
            </Badge>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight text-balance animate-fade-in-up animate-delay-100">
              Transform Your Ideas Into
              <span className="text-primary block">Powerful Mobile Apps</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-pretty animate-fade-in-up animate-delay-200">
              We specialize in Flutter and Firebase/Supabase development to create cross-platform mobile applications
              that scale with your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animate-delay-300">
              <Button size="lg" asChild className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300">
                <a href="#contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-lg px-8 py-6 bg-transparent hover:scale-105 transition-transform duration-300"
              >
                <a href="#portfolio" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  View Our Work
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Apps Delivered</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We combine cutting-edge technology with proven development practices to deliver exceptional mobile
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Real success stories from our clients across E-commerce, Finance, Food Delivery, Education, and
              Productivity sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        Key Results:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="text-xs bg-accent text-accent-foreground hover:bg-accent/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2">
                Discuss Your Project
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance animate-fade-in-up">
              Transparent Pricing & Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in-up animate-delay-100">
              Choose the perfect plan for your mobile app development needs. All prices include development, testing,
              and deployment.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8 animate-fade-in-up animate-delay-200">
              Our Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentTimeline.map((phase, index) => (
                <Card
                  key={index}
                  className={`text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-${(index + 3) * 100}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <phase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="mx-auto">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animate-delay-${(index + 1) * 100} ${
                  plan.popular ? "border-primary shadow-lg scale-105 bg-primary/5" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground animate-pulse">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.offer && (
                      <div className="text-xs font-medium text-accent bg-accent/10 inline-block px-2 py-1 rounded-md">
                        {plan.offer}
                      </div>
                    )}
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {plan.timeline}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mt-4">
                    <strong>Best for:</strong> {plan.bestFor}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Settings className="h-4 w-4 text-primary" />
                      Core Features
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {plan.includes.map((include, includeIndex) => (
                        <li key={includeIndex} className="flex items-start gap-2 text-sm">
                          <Star className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animate-delay-600">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Money-Back Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Not satisfied with our work? Get a full refund within the first 2 weeks of development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Get a free 30-minute consultation to discuss your project requirements and get expert advice.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flexible Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Pay in installments: 50% to start, 30% at milestone, and 20% on completion and delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">About Appamania</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
              Based in Kolkata, West Bengal, we are a passionate team of mobile app developers specializing in Flutter
              and modern backend technologies. We transform innovative ideas into successful mobile applications that
              drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experienced Flutter developers and UI/UX designers staying current with latest technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Industry best practices with thorough testing to ensure flawless app performance.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Close collaboration throughout development to exceed expectations and deliver success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to bring your mobile app idea to life? Contact us today for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Location</h3>
                  <p className="text-muted-foreground">
                    Kolkata, West Bengal, India
                    <br />
                    Serving clients across India and globally
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    hello@appamania.in
                    <br />
                    support@appamania.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    +91 98765 43210
                    <br />
                    Available Mon-Fri, 9 AM - 6 PM IST
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>Fill out this form and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input
                      type="text"
                      className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Project Type</label>
                  <select className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select project type</option>
                    <option>New Mobile App</option>
                    <option>App Redesign</option>
                    <option>App Maintenance</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Project Description</label>
                  <textarea
                    rows={4}
                    className="w-full mt-1 px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full">
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full"></div>
                </div>
              </div>
              <div className="text-2xl font-bold text-primary">Appamania</div>
            </div>
            <p className="text-muted-foreground mb-6">Transforming ideas into powerful mobile applications</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Case Studies
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Appamania. All rights reserved. | Kolkata, West Bengal, India
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
