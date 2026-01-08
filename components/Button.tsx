import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold'
  size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center transition-all duration-300 ease-in-out font-medium rounded-full tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'

  const variants = {
    primary: 'bg-white text-luxury-black hover:bg-gray-100',
    secondary:
      'bg-luxury-charcoal text-white hover:bg-gray-800 border border-gray-700',
    outline:
      'bg-transparent border border-white text-white hover:bg-white hover:text-black',
    gold: 'bg-gradient-to-r from-luxury-gold to-yellow-600 text-black hover:brightness-110',
  }

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3 text-sm',
    lg: 'px-10 py-4 text-base font-semibold',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
