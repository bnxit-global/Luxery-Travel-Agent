import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }

    // Mock authentication - in a real app, call API here
    const mockUser = { email }
    localStorage.setItem('mockUser', JSON.stringify(mockUser))

    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4 bg-luxury-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative z-10">
        {/* Left Side - Welcome Panel */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-luxury-gold via-yellow-500 to-yellow-600 rounded-3xl text-black shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <div className="mb-6 text-5xl">✈️</div>
          <h2 className="font-serif text-5xl font-bold mb-6 leading-tight">
            Welcome Back
          </h2>
          <p className="text-base opacity-95 leading-relaxed">
            Sign in to access your bookings, saved itineraries, and exclusive
            member offers from your personal travel concierge.
          </p>
          <div className="mt-10 flex gap-4">
            <div className="flex-1 p-4 bg-black/10 rounded-xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider font-bold mb-1">
                919+
              </p>
              <p className="text-sm">Happy Travelers</p>
            </div>
            <div className="flex-1 p-4 bg-black/10 rounded-xl backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider font-bold mb-1">
                50+
              </p>
              <p className="text-sm">Destinations</p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-4xl font-serif font-bold mb-2 text-white">
              Log In
            </h3>
            <p className="text-gray-400 text-base">
              Access your luxury travel account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Email Input */}
            <div className="space-y-3">
              <label className="block">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Email Address
                </span>
                <div className="relative mt-3">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-luxury-gold/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:border-luxury-gold focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="you@domain.com"
                  />
                </div>
              </label>
            </div>

            {/* Password Input */}
            <div className="space-y-3">
              <label className="block">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Password
                </span>
                <div className="relative mt-3">
                  <Lock className="absolute left-4 top-4 w-5 h-5 text-luxury-gold/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 pl-12 pr-12 py-3.5 text-white placeholder-gray-500 focus:border-luxury-gold focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-luxury-gold transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </label>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  className="rounded w-4 h-4 accent-luxury-gold cursor-pointer"
                />
                <span>Remember me</span>
              </label>
              <Link
                to="/"
                className="text-sm font-medium text-luxury-gold hover:text-yellow-400 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full text-base"
              >
                Sign In Now
              </Button>
            </div>

            {/* Divider */}
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-gray-500">
                  or
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-semibold text-luxury-gold hover:text-yellow-400 transition-colors"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
