import {
  Anchor,
  CheckCircle2,
  Globe,
  Heart,
  Map,
  Plane,
  Quote,
  ShieldCheck,
  Star,
} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Hero from '../components/Hero'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/Card'

const Home: React.FC = () => {
  return (
    <div className="bg-luxury-black text-white selection:bg-luxury-gold selection:text-black">
      {/* 1. Hero Section */}
      <Hero
        title="Platinum Concierge Luxury Travel Planning"
        subtitle="No Planning Fees. No call centers. Just flawless travel."
        video="/background.mp4"
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 2. Values / Why Choose Us - Floating Cards */}
      <section className="relative z-20 -mt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/60 backdrop-blur-xl border-luxury-gold/20 hover:border-luxury-gold transition-colors shadow-2xl">
              <CardHeader>
                <ShieldCheck className="w-12 h-12 text-luxury-gold mb-4" />
                <CardTitle className="text-white text-xl">
                  Licensed & Insured
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Professional travel planners — not hobby agents.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/60 backdrop-blur-xl border-luxury-gold/20 hover:border-luxury-gold transition-colors shadow-2xl">
              <CardHeader>
                <Star className="w-12 h-12 text-luxury-gold mb-4" />
                <CardTitle className="text-white text-xl">
                  No Planning Fees
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Our concierge planning service costs you nothing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/60 backdrop-blur-xl border-luxury-gold/20 hover:border-luxury-gold transition-colors shadow-2xl">
              <CardHeader>
                <Map className="w-12 h-12 text-luxury-gold mb-4" />
                <CardTitle className="text-white text-xl">
                  Platinum Overwatch
                </CardTitle>
                <CardDescription className="text-gray-300">
                  We monitor your trip before, during, and after travel.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Narrative Intro */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-4xl md:text-7xl font-serif leading-tight">
            Because Ordinary{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-yellow-200">
              Isn't An Option
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Your Personal Luxury Travel Concierge based in Apollo Beach,
            Florida. Custom-curated vacations, cruises, honeymoons & Europe
            trips — planned by real licensed travel advisors.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Start Planning My Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Specialties Grid (Tour Design) */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-gold/5 via-black to-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold">
              What We Do Best
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mt-4 text-white">
              Luxury Travel Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Europe */}
            <Link
              to="/destinations"
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1503917988258-f87a78e3c995"
                alt="Europe"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <Globe className="w-10 h-10 text-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-3xl font-serif font-bold mb-2">Europe</h3>
                <p className="text-luxury-gold text-sm uppercase tracking-wider mb-2 font-bold">
                  Classic Elegance
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Italy • France • Greece • Croatia • Portugal
                </p>
              </div>
            </Link>

            {/* Cruises */}
            <Link
              to="/offers"
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl lg:mt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1628266447508-6601444a505e"
                alt="Cruise"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <Anchor className="w-10 h-10 text-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-3xl font-serif font-bold mb-2">
                  Luxury Cruises
                </h3>
                <p className="text-luxury-gold text-sm uppercase tracking-wider mb-2 font-bold">
                  Cruise with Class
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Viking • Celebrity • Explora • Atlas
                </p>
              </div>
            </Link>

            {/* Exotic */}
            <Link
              to="/destinations"
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1632&auto=format&fit=crop"
                alt="Exotic"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <Plane className="w-10 h-10 text-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-3xl font-serif font-bold mb-2">
                  Exotic Escapes
                </h3>
                <p className="text-luxury-gold text-sm uppercase tracking-wider mb-2 font-bold">
                  Adventure & Mystery
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bora Bora • Bali • Thailand • Africa
                </p>
              </div>
            </Link>

            {/* Romance */}
            <Link
              to="/contact"
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl lg:mt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1470&auto=format&fit=crop"
                alt="Romance"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8">
                <Heart className="w-10 h-10 text-luxury-gold mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
                <h3 className="text-3xl font-serif font-bold mb-2">Romance</h3>
                <p className="text-luxury-gold text-sm uppercase tracking-wider mb-2 font-bold">
                  Exotic Bliss
                </p>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Overwater bungalows • Private villas
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Concierge (Bruce) Section */}
      <section className="py-32 bg-[#0f0f0f] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-luxury-gold/10 rounded-full blur-[100px] transform -translate-x-10"></div>
              <div className="relative z-10 p-4 border border-white/10 rounded-3xl bg-white/5 rotate-[-2deg]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
                  alt="Bruce"
                  className="w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 rotate-[2deg]"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif leading-none">
                Meet Your Personal
                <br />
                <span className="text-luxury-gold">Travel Concierge</span>
              </h2>
              <div className="w-24 h-1.5 bg-luxury-gold"></div>
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Welcome to Lap of Luxury Travel! I'm Bruce, and I take pride
                personally curating every itinerary to ensure that your journey
                is nothing short of exceptional.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                At Lap of Luxury Travel, we believe in crafting unique
                experiences rather than just selling trips, so you can relax
                knowing every detail is meticulously managed before, during, and
                after your travel.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="mt-4">
                  Work With Bruce
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials & Stats */}
      <section className="py-32 bg-gradient-to-b from-[#0f0f0f] to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Testimonial */}
            <div className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] relative">
              <Quote className="w-20 h-20 text-luxury-gold/10 absolute top-10 right-10" />
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-luxury-gold fill-luxury-gold"
                  />
                ))}
              </div>
              <p className="text-3xl font-serif leading-relaxed mb-10 italic text-white">
                "Emma raves about the personalized attention and luxury
                experiences provided by Lap of Luxury Travel that made her
                vacation truly memorable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center font-bold text-black text-xl">
                  E
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Emma Smith</h4>
                  <p className="text-gray-500 text-sm">Verified Client</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
                <span className="text-6xl font-serif font-bold text-luxury-gold mb-2">
                  919+
                </span>
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                  Trips Organized
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
                <span className="text-6xl font-serif font-bold text-luxury-gold mb-2">
                  100%
                </span>
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                  Client Satisfaction
                </span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center text-center col-span-2 hover:bg-white/10 transition-colors">
                <span className="text-6xl font-serif font-bold text-luxury-gold mb-2">
                  50+
                </span>
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                  Destination Options
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Map / Map Intro */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/90 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <Globe className="w-20 h-20 text-luxury-gold mx-auto mb-10 animate-float" />
          <h2 className="text-5xl md:text-7xl font-serif mb-10 text-white">
            Embark on a Journey
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 font-light">
            Our expert team is dedicated to curating unforgettable experiences
            in Italy, Greece, France, Thailand, Bora Bora, and the Caribbean.
            Let us elevate your travel dreams to reality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Italy',
              'Greece',
              'France',
              'Thailand',
              'Bora Bora',
              'Caribbean',
            ].map((loc) => (
              <span
                key={loc}
                className="px-8 py-3 rounded-full border border-white/20 bg-white/5 text-sm uppercase tracking-widest hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all cursor-default"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="py-24 bg-white text-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-black">
              Tailored Luxury Travel
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join our newsletter to receive exclusive offers, travel guides,
              and inspiration directly from Apollo Beach.
            </p>
            <div className="flex items-center gap-4 text-gray-500 mb-8">
              <CheckCircle2 className="w-5 h-5 text-luxury-green" /> No spam.
              Unsubscribe anytime.
            </div>
          </div>
          <div className="bg-gray-100 p-10 rounded-[2.5rem]">
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full px-8 py-5 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-black outline-none text-lg"
                required
              />
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-black"
                  required
                />
                <span>
                  Yes, subscribe me to your newsletter. I agree to the privacy
                  policy.
                </span>
              </div>
              <Button
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
