"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Book a tour, ask questions, or get started with your perfect workspace solution today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Visit our premium coworking space in Spectrum Mall or reach out to us. Our team is ready to help you
                find the perfect workspace solution.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    6th Floor, Spectrum Mall
                    <br />
                    Noida, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91-8527289273</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Website</h4>
                  <p className="text-muted-foreground">goproductivespace.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Sunday
                    <br />
                    24/7 Access Available
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Spectrum Mall, Noida</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Tour</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select a service</option>
                    <option value="day-pass">Day Pass</option>
                    <option value="monthly-seat">Monthly Seat</option>
                    <option value="private-office">Private Office</option>
                    <option value="virtual-office">Virtual Office</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your workspace needs..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
