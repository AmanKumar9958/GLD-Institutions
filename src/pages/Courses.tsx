import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Computer, Briefcase } from 'lucide-react'

const Courses: React.FC = () => {
  const courseCategories = [
    { 
      icon: BookOpen, 
      title: "Academics Courses", 
      courses: ["8th-10th All subjects", "11th & 12th PCB", "11th & 12th Arts"] 
    },
    { 
      icon: Computer, 
      title: "Technical Courses", 
      courses: ["Computer", "Spoken English"] 
    },
    { 
      icon: Briefcase, 
      title: "Competitive Courses", 
      courses: ["Banking", "SSC", "Railway", "UPSC", "State PSCs", "Delhi Police", "UP Police", "DSSSB", ] 
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
            Our Courses
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map(({ icon: Icon, title, courses }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition"
              >
                <Icon className="mx-auto mb-6 text-primary" size={56} />
                <h3 className="font-heading text-xl font-semibold mb-4 text-center text-primary">{title}</h3>
                <ul className="text-center text-gray-700 space-y-2">
                  {courses.map(course => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Courses