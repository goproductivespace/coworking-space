"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Building, Wifi } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-coworking-space-with-people-working-at-desk.png"
          alt="Go Productive Space - Modern Coworking Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
          <Wifi className="h-8 w-8 text-white" />
        </div>
      </div>
      <div
        className="absolute top-32 right-16 animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="bg-secondary/20 backdrop-blur-sm rounded-full p-4">
          <Users className="h-8 w-8 text-white" />
        </div>
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-accent/20 backdrop-blur-sm rounded-full p-4">
          <Building className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            Your <span className="text-yellow-400">Productive</span> Space
            Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-in-right">
            Premium coworking solutions in the heart of Noida. Private offices,
            virtual plans, and flexible workspaces designed for modern
            professionals.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">₹500</div>
              <div className="text-sm text-gray-300">Day Pass</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">₹5,000</div>
              <div className="text-sm text-gray-300">Monthly Seat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">
                6th Floor
              </div>
              <div className="text-sm text-gray-300">Spectrum Mall</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="#contact">
                Book Your Tour <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link href="#services">
                <Play className="mr-2 h-5 w-5" />
                Explore Spaces
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
