"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Globe } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Spectrum Mall, Noida - 6th Floor</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-8527289273</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>goproductivespace.com</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <span className="font-bold text-xl">GO</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">
                Go Productive Space
              </h1>
              <p className="text-sm text-muted-foreground">Premium Coworking</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="tel:+918527289273">Call Now</Link>
            </Button>
            <Button asChild>
              <Link href="#contact">Book Tour</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#features"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link href="tel:+918527289273">Call Now</Link>
                </Button>
                <Button asChild>
                  <Link href="#contact">Book Tour</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
