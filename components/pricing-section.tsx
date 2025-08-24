import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Day Pass",
      price: "₹500",
      period: "per day",
      description: "Perfect for occasional visits and trying out our space",
      features: [
        "Access to coworking area",
        "High-speed internet",
        "Complimentary tea/coffee",
        "Basic printing services",
        "Access to common areas",
      ],
      popular: false,
      cta: "Get Day Pass",
    },
    {
      name: "Monthly Seat",
      price: "₹5,000",
      period: "per month",
      description: "Ideal for regular users who need consistent workspace",
      features: [
        "Dedicated desk space",
        "24/7 access to facility",
        "High-speed internet",
        "Unlimited tea/coffee",
        "Meeting room credits (2 hours)",
        "Professional mailing address",
        "Printing & scanning services",
        "Community events access",
      ],
      popular: true,
      cta: "Choose Monthly",
    },
    {
      name: "Private Office",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for teams and established businesses",
      features: [
        "Fully furnished private office",
        "Dedicated phone line",
        "Meeting room access",
        "Professional address",
        "Receptionist services",
        "Custom branding options",
        "Priority support",
        "Flexible lease terms",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your workspace needs. No hidden fees, no long-term commitments required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : ""} hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom solution? We're here to help.</p>
          <Button variant="outline" size="lg">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}
