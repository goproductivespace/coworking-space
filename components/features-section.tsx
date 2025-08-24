import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Armchair, Droplets, Train, Coffee, Shield } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Wifi,
      title: "High Speed Internet",
      description: "Lightning-fast fiber optic internet with 99.9% uptime guarantee for uninterrupted productivity.",
    },
    {
      icon: Armchair,
      title: "Ergonomic Seating",
      description: "Premium ergonomic chairs and adjustable desks designed for comfort during long work sessions.",
    },
    {
      icon: Droplets,
      title: "Water & Clean Washrooms",
      description: "24/7 access to clean, well-maintained washrooms and complimentary drinking water.",
    },
    {
      icon: Train,
      title: "Metro Connectivity",
      description: "Prime location with direct metro connectivity, making your commute hassle-free.",
    },
    {
      icon: Coffee,
      title: "Complimentary Tea/Coffee",
      description: "Unlimited premium tea and coffee to keep you energized throughout your workday.",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV monitoring and secure access control systems.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-primary">Amenities</span> Included
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every workspace comes with carefully curated amenities designed to enhance your productivity and comfort
            throughout the day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Located in the Heart of Noida</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our premium coworking space is strategically located on the 6th floor of Spectrum Mall, offering easy
              access to restaurants, shopping, and entertainment. With excellent metro connectivity and ample parking,
              your daily commute becomes effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
