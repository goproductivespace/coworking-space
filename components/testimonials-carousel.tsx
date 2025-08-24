"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Startup Founder",
      company: "TechVenture Solutions",
      content:
        "Go Productive Space has been instrumental in our startup journey. The professional environment and networking opportunities have helped us grow exponentially.",
      rating: 5,
      image: "/indian-woman-entrepreneur.png",
    },
    {
      name: "Rajesh Kumar",
      role: "Freelance Designer",
      company: "Independent",
      content:
        "The flexible day pass option is perfect for my freelance work. Great internet, comfortable seating, and the coffee keeps me going all day!",
      rating: 5,
      image: "/professional-indian-man-designer-working.png",
    },
    {
      name: "Anita Gupta",
      role: "Sales Manager",
      company: "Digital Marketing Pro",
      content:
        "Our team loves the private office setup. The location is perfect with metro connectivity, and the amenities are top-notch. Highly recommended!",
      rating: 5,
      image: "/professional-indian-woman-manager-confident.png",
    },
    {
      name: "Vikram Singh",
      role: "Tech Consultant",
      company: "CloudTech Consulting",
      content:
        "The virtual office plan has given our remote team a professional address in Noida. The mail handling service is excellent and very reliable.",
      rating: 5,
      image: "/professional-indian-man-consultant-technology.png",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Members</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied professionals who have made Go Productive Space their workspace of choice.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 border-0 shadow-xl bg-gradient-to-br from-background to-muted/30">
                    <CardContent className="p-12 text-center">
                      <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-xl text-foreground mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div className="text-primary font-medium">{testimonial.role}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
