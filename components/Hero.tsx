import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

interface HeroProps {
  title: string
  subtitle?: string
  image?: string
  video?: string
  height?: string
  showOverlay?: boolean
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  video,
  height = 'h-screen',
  showOverlay = true,
}) => {
  return (
    <div
      className={`relative w-full ${height} overflow-hidden flex items-center justify-center`}
    >
      {/* Video Background */}
      {video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {/* Image Background (fallback) */}
      {image && !video && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-in-out scale-110 hover:scale-100"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-luxury-black" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight leading-none drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="pt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" variant="gold" className="min-w-[200px]">
                Plan My Trip
              </Button>
            </Link>
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                Explore World
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-70 hidden md:block">
        <ChevronDown className="w-10 h-10 text-white" />
      </div>
    </div>
  )
}

export default Hero
