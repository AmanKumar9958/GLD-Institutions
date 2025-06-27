import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, GraduationCap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="flex-grow bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16 lg:py-24"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Empowering Futures, Inspiring Minds
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              GLD is not just an institution it is the emotion that beasts in the heart of thousands of Gldians.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/courses" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition flex items-center"
              >
                Explore Courses <ArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Diverse Programs" },
              { icon: GraduationCap, title: "Expert Faculty" },
              { icon: Globe, title: "Global Perspective" },
              { icon: ArrowRight, title: "Career Growth" }
            ].map(({ icon: Icon, title }, index) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition"
              >
                <Icon className="mx-auto mb-4 text-primary" size={48} />
                <h3 className="font-heading text-lg font-semibold">{title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home