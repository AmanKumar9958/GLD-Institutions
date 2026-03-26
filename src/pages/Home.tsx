import React, { useEffect, useRef } from 'react'
import { ArrowRight, BookOpen, Computer, Briefcase, GraduationCap, Users, Award, Clock, CheckCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const courseCategories = [
  {
    icon: BookOpen,
    title: 'Academics Courses',
    courses: ['8th-10th All subjects', '11th & 12th PCB', '11th & 12th Arts'],
    color: 'from-blue-600 to-blue-800',
    accent: '#2563EB',
  },
  {
    icon: Computer,
    title: 'Technical Courses',
    courses: ['Computer', 'Spoken English'],
    color: 'from-red-600 to-red-800',
    accent: '#DC2626',
  },
  {
    icon: Briefcase,
    title: 'Competitive Courses',
    courses: ['Banking', 'SSC', 'Railway', 'UPSC', 'State PSCs', 'Delhi Police', 'UP Police', 'DSSSB'],
    color: 'from-primary-dark to-primary',
    accent: '#1E3A8A',
  },
]

const stats = [
  { icon: Users, value: '500+', label: 'Students Enrolled' },
  { icon: BookOpen, value: '3', label: 'Course Categories' },
  { icon: Award, value: '10+', label: 'Years of Excellence' },
  { icon: GraduationCap, value: '100%', label: 'Dedication & Care' },
]

const features = [
  { icon: CheckCircle, title: 'Expert Faculty', desc: 'Learn from experienced educators who are passionate about your success.' },
  { icon: Clock, title: 'Flexible Timings', desc: 'Batches designed to fit your schedule — morning, afternoon and evening.' },
  { icon: Award, title: 'Proven Results', desc: 'Track record of students achieving their academic and career goals.' },
  { icon: GraduationCap, title: 'Holistic Growth', desc: 'Beyond books — we build confidence, skills and character.' },
]

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const heroBtnsRef = useRef<HTMLDivElement>(null)
  const heroBadgeRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const coursesHeadingRef = useRef<HTMLDivElement>(null)
  const coursesGridRef = useRef<HTMLDivElement>(null)
  const featuresHeadingRef = useRef<HTMLDivElement>(null)
  const featuresGridRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      heroTl
        .from(heroBadgeRef.current, { opacity: 0, y: -30, duration: 0.6 })
        .from(heroTitleRef.current, { opacity: 0, y: 50, duration: 0.8 }, '-=0.2')
        .from(heroSubRef.current, { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
        .from(heroBtnsRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')

      // Hero decorative orbs float
      gsap.to('.hero-orb-1', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
      gsap.to('.hero-orb-2', {
        y: 20,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1,
      })

      // Stats section — slide up on scroll
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Counter animation for stat numbers
      document.querySelectorAll<HTMLElement>('.stat-number').forEach((el) => {
        const target = el.getAttribute('data-target') || ''
        const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''))
        const suffix = target.replace(/[0-9.]/g, '')
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          innerText: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate() {
            el.innerText = Math.round(numericPart * (this.progress())) + suffix
          },
        })
      })

      // Courses heading reveal
      gsap.from(coursesHeadingRef.current, {
        scrollTrigger: {
          trigger: coursesHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Course cards — slide in from alternating sides
      gsap.from('.course-card', {
        scrollTrigger: {
          trigger: coursesGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -80 : 80),
        stagger: 0.2,
        duration: 0.9,
        ease: 'power3.out',
      })

      // Features heading
      gsap.from(featuresHeadingRef.current, {
        scrollTrigger: {
          trigger: featuresHeadingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      // Feature cards — reveal from below with stagger
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 70,
        stagger: 0.18,
        duration: 0.85,
        ease: 'back.out(1.4)',
      })

      // CTA section slide up
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex-grow overflow-x-hidden">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f1e5c 0%, #1E3A8A 45%, #172D6E 100%)' }}
      >
        {/* Decorative orbs */}
        <div className="hero-orb-1 absolute top-16 right-12 w-64 h-64 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)' }} />
        <div className="hero-orb-2 absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div ref={heroBadgeRef} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-DEFAULT animate-pulse" style={{ backgroundColor: '#DC2626' }} />
            <span className="text-white/90 text-sm font-medium tracking-wide">Welcome to GLD Institutions</span>
          </div>

          <h1
            ref={heroTitleRef}
            className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6"
          >
            Empowering Futures,
            <br />
            <span style={{ color: '#EF4444' }}>Inspiring Minds</span>
          </h1>

          <p
            ref={heroSubRef}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            GLD is not just an institution — it is the emotion that beats in the heart of thousands of Gldians.
            Join us and unlock your true potential.
          </p>

          <div ref={heroBtnsRef} className="flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/40"
              style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
            >
              Explore Courses
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="stat-card group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>
                  <Icon size={24} color="white" />
                </div>
                <span
                  className="stat-number text-4xl font-heading font-bold mb-1"
                  data-target={value}
                  style={{ color: '#1E3A8A' }}
                >
                  {value}
                </span>
                <span className="text-gray-500 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={coursesHeadingRef} className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
              style={{ color: '#DC2626', backgroundColor: '#FEE2E2' }}>
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: '#1E3A8A' }}>
              Our Courses
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive programs designed to shape academics, technical skills, and competitive careers.
            </p>
          </div>

          <div ref={coursesGridRef} className="grid md:grid-cols-3 gap-8">
            {courseCategories.map(({ icon: Icon, title, courses, color }) => (
              <div
                key={title}
                className={`course-card relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-2`}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${color} p-8 text-white`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} color="white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{title}</h3>
                </div>

                {/* Course list */}
                <div className="bg-white p-6">
                  <ul className="space-y-3">
                    {courses.map((course) => (
                      <li key={course} className="flex items-center gap-3 text-gray-600 text-sm">
                        <ChevronRight size={14} style={{ color: '#DC2626', flexShrink: 0 }} />
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
              style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}
            >
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE GLD ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={featuresHeadingRef} className="text-center mb-14">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1 rounded-full"
              style={{ color: '#1E3A8A', backgroundColor: '#DBEAFE' }}>
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4" style={{ color: '#1E3A8A' }}>
              The GLD Difference
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We go beyond textbooks to create leaders, thinkers, and achievers.
            </p>
          </div>

          <div ref={featuresGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="feature-card group p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
                >
                  <Icon size={28} color="white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#1E3A8A' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={ctaRef}
            className="relative rounded-3xl overflow-hidden shadow-2xl text-center px-8 py-16"
            style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #172D6E 50%, #0f1e5c 100%)' }}
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #DC2626 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
                Take the first step towards a brighter future. Enroll at GLD Institutions today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #DC2626, #B91C1C)' }}
                >
                  Enroll Now
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105"
                >
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home