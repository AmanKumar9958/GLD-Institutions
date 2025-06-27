import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ]

  // Only YouTube link remains
  const socialLinks = [
    { icon: Youtube, url: 'https://www.youtube.com/@GLDinstitution' }
  ]

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="text-primary" size={32} />
              <span className="font-heading text-2xl font-bold text-primary">GLD</span>
            </div>
            <p className="text-gray-600">
              GLD is not just an institution it is the emotion that beasts in the heart of thousands of Gldians.
              We are committed to providing quality education and empowering students to achieve their dreams.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(({ path, label }) => (
                <Link 
                  key={path} 
                  to={path} 
                  className="block text-gray-600 hover:text-primary transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url }) => (
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} GLD Institutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer