import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    { 
      icon: Users, 
      title: "Student-Centric Approach", 
      description: "We prioritize individual growth and personalized learning experiences." 
    },
    { 
      icon: Target, 
      title: "Excellence in Education", 
      description: "Committed to delivering high-quality, innovative educational programs." 
    },
    { 
      icon: Award, 
      title: "Holistic Development", 
      description: "Nurturing not just academic skills, but overall personal and professional growth." 
    }
  ]

  return (
    <div className="flex-grow bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12">
            About GLD Institutions
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a vision to transform education, GLD Institutions has been 
              a beacon of knowledge and innovation. We believe in creating an inclusive, 
              dynamic learning environment that prepares students for global challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition"
              >
                <Icon className="mx-auto mb-6 text-primary" size={56} />
                <h3 className="font-heading text-xl font-semibold mb-4 text-primary">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About