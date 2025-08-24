import Link from "next/link"
import { MapPin, Phone, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <span className="font-bold text-xl">GPS</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Go Productive Space</h3>
                <p className="text-sm text-background/70">Premium Coworking</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Your premier coworking destination in Noida. We provide flexible workspace solutions designed for modern
              professionals, startups, and growing businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-background/10 hover:bg-background/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-background/80 hover:text-background transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-background/80">6th Floor, Spectrum Mall</p>
                  <p className="text-background/80">Noida, Uttar Pradesh</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-background/80">+91-8527289273</p>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <p className="text-background/80">goproductivespace.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 Go Productive Space. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
