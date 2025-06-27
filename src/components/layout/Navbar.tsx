import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const Navbar: React.FC = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/Logo_GLD.png" alt="GLD Logo" className='w-14 rounded-full' />
        </Link>

        <div className="flex space-x-6">
          {navItems.map(({ path, label }) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={path} 
                className={`
                  font-medium transition 
                  ${location.pathname === path 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-600 hover:text-primary'}
                `}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar