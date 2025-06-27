import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission logic
    console.log(formData)
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "info@gldinstitutions.com" },
    { icon: Phone, title: "Phone", value: "+91 9999302537" },
    { icon: MapPin, title: "Address", value: "Milk Shop 12003 Shop 4 Prop No I 1258G I Block, Gali 18 Hari Nagar Extn, Badarpur, New Delhi, Delhi 110044" }
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
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              {contactInfo.map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary">{title}</h4>
                    <p className="text-gray-700">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact