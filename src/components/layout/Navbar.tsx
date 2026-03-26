import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/Logo_GLD.png" alt="GLD Logo" className='w-14 rounded-full' />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-6">
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

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              role="button"
              aria-label="Close menu"
              tabIndex={-1}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setMenuOpen(false) }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 flex flex-col md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src="/images/Logo_GLD.png" alt="GLD Logo" className="w-12 rounded-full" />
                </Link>
                <button
                  className="p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer nav links */}
              <div className="flex flex-col px-6 py-4 space-y-4">
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      text-lg font-medium py-2 border-b border-gray-100 transition
                      ${location.pathname === path
                        ? 'text-primary font-semibold'
                        : 'text-gray-600 hover:text-primary'}
                    `}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar