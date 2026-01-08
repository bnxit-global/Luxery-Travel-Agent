import { CheckCircle2, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !password) {
      setError('Please fill all required fields.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    // Mock registration - in a real app, call API here
    const mockUser = { name, email }
    localStorage.setItem('mockUser', JSON.stringify(mockUser))

    navigate('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-24 px-4 bg-luxury-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-luxury-gold/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative z-10">
        {/* Left Side - Welcome Panel */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-luxury-gold via-yellow-500 to-yellow-600 rounded-3xl text-black shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <div className="mb-6 text-5xl">🌍</div>
          <h2 className="font-serif text-5xl font-bold mb-6 leading-tight">
            Create Account
          </h2>
          <p className="text-base opacity-95 leading-relaxed mb-8">
            Join Lap of Luxury Travel and unlock exclusive benefits,
            personalized itineraries, and VIP access to luxury destinations
            worldwide.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">No planning fees</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Personal concierge service</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Exclusive member offers</p>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-4xl font-serif font-bold mb-2 text-white">
              Register
            </h3>
            <p className="text-gray-400 text-base">
              Create your account and start planning
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-start gap-3">
                <span className="text-lg">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Full Name Input */}
            <div className="space-y-3">
              <label className="block">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Full Name
                </span>
                <div className="relative mt-3">
                  <User className="absolute left-4 top-4 w-5 h-5 text-luxury-gold/60" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 pl-12 pr-4 py-3.5 text-white placeholder-gray-500 focus:border-luxury-gold focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </label>
            </div>

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
                    placeholder="Enter a password"
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

            {/* Confirm Password Input */}
            <div className="space-y-3">
              <label className="block">
                <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                  Confirm Password
                </span>
                <div className="relative mt-3">
                  <Lock className="absolute left-4 top-4 w-5 h-5 text-luxury-gold/60" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 pl-12 pr-12 py-3.5 text-white placeholder-gray-500 focus:border-luxury-gold focus:bg-white/10 focus:outline-none transition-all duration-300"
                    placeholder="Confirm password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-4 text-gray-400 hover:text-luxury-gold transition-colors"
                  >
                    {showConfirm ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </label>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 text-sm text-gray-400 hover:text-gray-300 cursor-pointer transition-colors pt-2">
              <input
                type="checkbox"
                defaultChecked
                className="rounded w-4 h-4 accent-luxury-gold cursor-pointer flex-shrink-0 mt-0.5"
              />
              <span>
                I agree to the{' '}
                <Link to="/" className="text-luxury-gold hover:text-yellow-400">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/" className="text-luxury-gold hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full text-base"
              >
                Create Account
              </Button>
            </div>

            {/* Divider */}
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-gray-500">
                  Already a member?
                </span>
              </div>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                <Link
                  to="/login"
                  className="font-semibold text-luxury-gold hover:text-yellow-400 transition-colors"
                >
                  Sign in to your account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
