import React from 'react'
import Spline from '@splinetool/react-spline'
import { Home, Building2, KeyRound, ShieldCheck, Phone, MapPin, Star } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm/50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/90 shadow flex items-center justify-center">
            <Home className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-xl font-semibold text-white drop-shadow">Skyline Estates</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#listings" className="text-white/90 hover:text-white transition">Listings</a>
          <a href="#features" className="text-white/90 hover:text-white transition">Why Us</a>
          <a href="#testimonials" className="text-white/90 hover:text-white transition">Reviews</a>
          <a href="#contact" className="text-white/90 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg px-4 py-2 font-medium shadow transition">
            <Phone className="h-4 w-4" /> Book a Tour
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[86vh] w-full">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-gray-950/60" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex items-center">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-sm mb-4">
            <Star className="h-4 w-4 text-yellow-300" /> Luxury • Contemporary • Urban
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow">
            Discover Elevated Living in the Heart of the City
          </h1>
          <p className="mt-4 text-white/90 text-lg leading-relaxed">
            Explore refined residences with panoramic views, curated amenities, and timeless interiors. Your next address awaits.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#listings" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-lg shadow-blue-600/20 transition">
              Browse Listings
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-gray-900 px-6 py-3 font-medium shadow transition">
              Why Choose Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
      <div className="h-11 w-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function ListingCard({ title, price, location, image }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
      <div className="relative h-52 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute top-3 left-3 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium shadow">
          {price}
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <div className="mt-1 flex items-center gap-1 text-gray-600 text-sm">
          <MapPin className="h-4 w-4" /> {location}
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4" /> 2,100 sqft</span>
          <span className="inline-flex items-center gap-1"><KeyRound className="h-4 w-4" /> 3 Bed</span>
          <span className="inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> 24/7 Security</span>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">What residents are saying</h2>
          <p className="mt-2 text-gray-600">Real words from happy homeowners and renters.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[ 
            {
              quote: 'The attention to detail and premium finishes exceeded our expectations.',
              name: 'Sophia M.',
            },
            {
              quote: 'Seamless process from tour to move-in. Highly recommended!',
              name: 'Daniel K.',
            },
            {
              quote: 'Unmatched views and amenities. Truly feels like a private retreat.',
              name: 'Ava R.',
            },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-gray-500">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-lg bg-white text-blue-600 flex items-center justify-center">
              <Home className="h-5 w-5" />
            </div>
            <span className="text-white font-semibold">Skyline Estates</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Luxury residences designed for modern urban living. Book a private viewing today.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 012-3456</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 100 Skyline Ave, Suite 2400</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#listings" className="hover:text-white">Available Homes</a></li>
            <li><a href="#features" className="hover:text-white">Amenities</a></li>
            <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="w-full rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Skyline Estates. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  const listings = [
    {
      title: 'Penthouse on Park',
      price: '$2,950,000',
      location: 'Uptown • Central Park North',
      image: 'https://images.unsplash.com/photo-1643115514982-8e75bb39ed11?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZW50aG91c2UlMjBvbiUyMFBhcmt8ZW58MHwwfHx8MTc2MjgxNDA5N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Skyline Loft',
      price: '$6,200 / mo',
      location: 'Midtown • Theater District',
      image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Riverfront Residence',
      price: '$1,780,000',
      location: 'Westside • Hudson Yards',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />

      <section id="features" className="relative -mt-14 z-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Feature icon={Building2} title="Architecturally Curated" desc="Residences designed by award‑winning studios with premium finishes." />
            <Feature icon={ShieldCheck} title="Private & Secure" desc="Concierge services, controlled access, and 24/7 on‑site security." />
            <Feature icon={KeyRound} title="Move‑in Ready" desc="Turn‑key options with designer furnishings and flexible terms." />
            <Feature icon={Home} title="Amenities" desc="Rooftop lounges, fitness centers, co‑working suites, and pet spas." />
          </div>
        </div>
      </section>

      <section id="listings" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Featured Listings</h2>
              <p className="mt-2 text-gray-600">Handpicked homes that showcase the best of modern city living.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg bg-gray-900 hover:bg-black text-white px-4 py-2">View All</a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l, i) => (
              <ListingCard key={i} {...l} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Book a Private Viewing</h3>
              <p className="mt-2 text-white/90">Tell us what you’re looking for and we’ll curate a list just for you.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium hover:bg-white/90 transition">Get in Touch</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
