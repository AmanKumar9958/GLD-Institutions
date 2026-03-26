import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Computer, Briefcase, CheckCircle, Clock, GraduationCap, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

const Courses: React.FC = () => {
  const courseCategories = [
    { 
      icon: BookOpen, 
      title: "Academics Courses",
      accent: 'from-primary to-primary-dark',
      description: "Strong foundation classes with disciplined guidance and regular assessments.",
      courses: ["8th-10th All subjects", "11th & 12th PCB", "11th & 12th Arts"] 
    },
    { 
      icon: Computer, 
      title: "Technical Courses",
      accent: 'from-red-DEFAULT to-red-dark',
      description: "Future-ready skills with hands-on sessions and project based learning.",
      courses: ["Computer", "Spoken English"] 
    },
    { 
      icon: Briefcase, 
      title: "Competitive Courses",
      accent: 'from-primary-dark to-red-DEFAULT',
      description: "Mentorship-driven preparation for banking, SSC, railways and state services.",
      courses: ["Banking", "SSC", "Railway", "UPSC", "State PSCs", "Delhi Police", "UP Police", "DSSSB"] 
    }
  ]

  const highlights = [
    { icon: CheckCircle, title: 'Structured Roadmaps', desc: 'Topic-wise plans, revision loops and doubt clearance built into every batch.' },
    { icon: Clock, title: 'Flexible Timings', desc: 'Morning, afternoon and evening options to balance school, college or work.' },
    { icon: GraduationCap, title: 'Result Focused', desc: 'Progress tracking, mock tests and personalized feedback from mentors.' },
    { icon: Compass, title: 'Guided Counselling', desc: 'Course and career guidance to help you choose the right path with confidence.' },
  ]

  return (
    <div className="flex-grow overflow-hidden">
      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #0f1e5c 0%, #1E3A8A 45%, #172D6E 100%)' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }} />
        <div className="absolute top-10 right-16 w-56 h-56 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 px-4 py-2 rounded-full text-sm font-medium"
            >
              Our Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white mt-6 leading-tight"
            >
              Learning paths designed to turn
              <span className="text-red-200"> ambition </span>
              into achievement.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/80 mt-4 text-lg max-w-2xl leading-relaxed"
            >
              Choose from academics, technical or competitive tracks, each crafted with mentoring, assessments and hands-on learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
              >
                Talk to a Mentor
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition"
              >
                Why GLD?
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
              style={{ color: '#DC2626', backgroundColor: '#FEE2E2' }}>
              Explore Streams
            </span>
            <h2 className="text-4xl font-heading font-bold text-primary mb-3">Courses that fit your goals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every stream includes guided mentoring, practice material, mock tests and feedback loops.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courseCategories.map(({ icon: Icon, title, description, courses, accent }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <div className={`p-6 text-white bg-gradient-to-br ${accent}`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{title}</h3>
                  <p className="text-white/80 mt-2 text-sm">{description}</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {courses.map((course) => (
                      <li key={course} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle size={18} className="text-red-DEFAULT mt-0.5" />
                        <span className="text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
              style={{ color: '#1E3A8A', backgroundColor: '#DBEAFE' }}>
              How we teach
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-3">Designed for outcomes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We mix classroom energy with modern learning tools to make every session count.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #172D6E 50%, #0f1e5c 100%)' }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">Need guidance choosing the right course?</h3>
                <p className="text-white/80 max-w-2xl">Speak with our counsellors to create a learning plan tailored to your timeline and goals.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
                >
                  Book a Call
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition"
                >
                  Learn about GLD
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
