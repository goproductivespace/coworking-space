import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Globe, Users, ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: "Private Office Solutions",
      description:
        "Fully furnished private offices with premium amenities, perfect for teams and established businesses seeking privacy and professionalism.",
      features: ["Dedicated workspace", "Meeting room access", "24/7 access", "Professional address"],
      image: "/modern-private-office-with-glass-walls--executive-.png",
    },
    {
      icon: Globe,
      title: "Virtual Office Plans",
      description:
        "Establish your business presence in Noida without physical space. Perfect for remote teams and growing startups.",
      features: ["Business address", "Mail handling", "Call forwarding", "Meeting room credits"],
      image: "/professional-business-address-reception-area-with-.png",
    },
    {
      icon: Users,
      title: "Flexible Coworking",
      description:
        "Dynamic shared workspace that adapts to your needs. Network, collaborate, and grow in our vibrant community.",
      features: ["Hot desks available", "Community events", "Networking opportunities", "Flexible terms"],
      image: "/open-coworking-space-with-people-collaborating--mo.png",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Workspace Solutions for <span className="text-primary">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From private offices to flexible coworking, we provide premium workspace solutions tailored to modern
            professionals and growing businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-3">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full group-hover:bg-primary/90 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
