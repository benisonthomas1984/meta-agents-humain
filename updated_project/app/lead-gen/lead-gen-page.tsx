"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, BarChart, PieChart, Search, Users, Mail, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)

  React.useEffect(() => {
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      setCount(Math.floor(end * percentage))
      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

const TypeWriter = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      onComplete()
    }
  }, [currentIndex, text, onComplete])

  return <span>{displayText}</span>
}

const LeadGenerationDemo = () => {
  const [isTyping, setIsTyping] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [scenarioIndex, setScenarioIndex] = useState(0)

  const scenarios = [
    {
      demoText:
        "Get me leads of Business owners who are in North Dakota in the industry of retail and who has an average revenue of $8mn per year",
      sampleLeads: [
        {
          name: "Emily Thompson",
          phone: "+1 (701) 555-3842",
          email: "emily.thompson@ndretailco.com",
          facebook: "facebook.com/emily.thompson.retail",
          instagram: "@emilys_boutique_nd",
        },
        {
          name: "Michael Larson",
          phone: "+1 (701) 555-7619",
          email: "m.larson@dakotashops.com",
          facebook: "facebook.com/michael.larson.92",
          instagram: "@larson_retail_group",
        },
        {
          name: "Sarah Olson",
          phone: "+1 (701) 555-2104",
          email: "sarah@olsonfamilystores.com",
          facebook: "facebook.com/saraholsonretail",
          instagram: "@olson_family_stores",
        },
        {
          name: "David Chen",
          phone: "+1 (701) 555-9376",
          email: "dchen@northdakotamart.com",
          facebook: "facebook.com/david.chen.retail",
          instagram: "@chen_retail_solutions",
        },
      ],
    },
    {
      demoText:
        "Find tech startups in Austin, Texas with 10-50 employees and have raised at least $1 million in funding",
      sampleLeads: [
        {
          name: "Alex Rivera",
          phone: "+1 (512) 555-1234",
          email: "alex@technovate.io",
          facebook: "facebook.com/alexrivera.technovate",
          instagram: "@technovate_alex",
        },
        {
          name: "Samantha Wu",
          phone: "+1 (512) 555-5678",
          email: "sam@quantumleap.tech",
          facebook: "facebook.com/samanthawu.quantumleap",
          instagram: "@quantum_sam",
        },
        {
          name: "Jordan Patel",
          phone: "+1 (512) 555-9012",
          email: "jordan@aiforge.com",
          facebook: "facebook.com/jordanpatel.aiforge",
          instagram: "@ai_forge_jordan",
        },
        {
          name: "Taylor Nguyen",
          phone: "+1 (512) 555-3456",
          email: "taylor@cyberscape.io",
          facebook: "facebook.com/taylornguyen.cyberscape",
          instagram: "@cyberscape_taylor",
        },
      ],
    },
    {
      demoText:
        "Show me healthcare professionals in California specializing in telemedicine with over 5 years of experience",
      sampleLeads: [
        {
          name: "Dr. Olivia Martinez",
          phone: "+1 (415) 555-7890",
          email: "dr.martinez@telehealth.com",
          facebook: "facebook.com/dr.oliviamartinez",
          instagram: "@dr_olivia_telehealth",
        },
        {
          name: "Dr. Benjamin Lee",
          phone: "+1 (310) 555-2345",
          email: "ben.lee@virtualcare.med",
          facebook: "facebook.com/dr.benjaminlee",
          instagram: "@dr_ben_virtualcare",
        },
        {
          name: "Dr. Amelia Wong",
          phone: "+1 (650) 555-6789",
          email: "amelia@teledoc.health",
          facebook: "facebook.com/dr.ameliawong",
          instagram: "@dr_amelia_teledoc",
        },
        {
          name: "Dr. Marcus Johnson",
          phone: "+1 (916) 555-0123",
          email: "marcus@remotehealth.org",
          facebook: "facebook.com/dr.marcusjohnson",
          instagram: "@dr_marcus_remote",
        },
      ],
    },
  ]

  const handleTypingComplete = () => {
    setIsTyping(false)
    setTimeout(() => {
      setShowResults(true)
    }, 1000)
  }

  useEffect(() => {
    if (showResults) {
      const timer = setTimeout(() => {
        setShowResults(false)
        setIsTyping(true)
        setScenarioIndex((prevIndex) => (prevIndex + 1) % scenarios.length)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [showResults])

  const currentScenario = scenarios[scenarioIndex]

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-16">
      <h3 className="text-2xl font-bold text-indigo-800 mb-4">Find Your Ideal Clients</h3>
      <div className="h-[600px] flex flex-col">
        <div className="bg-gray-100 p-4 rounded-md mb-4 h-32 flex items-center">
          {isTyping ? (
            <TypeWriter text={currentScenario.demoText} onComplete={handleTypingComplete} />
          ) : (
            <span>{currentScenario.demoText}</span>
          )}
        </div>
        <AnimatePresence>
          {!isTyping && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 mb-4"
            >
              Find Now
            </motion.button>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showResults && (
            <motion.div
              key={scenarioIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-grow overflow-hidden"
            >
              <h4 className="text-lg font-semibold text-indigo-800 mb-2">Potential Leads:</h4>
              <div className="overflow-x-auto h-[400px]">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Facebook
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Instagram
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentScenario.sampleLeads.map((lead, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.facebook}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.instagram}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function LeadGenerationPage() {
  const router = useRouter()

  const navigateToIntro = () => {
    window.scrollTo(0, 0)
    router.push("/intro")
  }

  const navigateToWebListener = () => {
    window.scrollTo(0, 0)
    router.push("/web-listener")
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToIntro}
      >
        <ArrowLeft size={24} className="text-indigo-600 hover:text-indigo-800 transition-colors" />
      </motion.div>

      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToWebListener}
      >
        <ArrowRight size={24} className="text-indigo-600 hover:text-indigo-800 transition-colors" />
      </motion.div>

      <main className="container mx-auto px-4 py-12">
        {/* Rest of the component remains unchanged */}
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            AI Lead Gen Agent
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center text-indigo-800 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Supercharge Your Sales with AI-Powered Leads
        </motion.h1>

        <motion.p
          className="text-2xl text-center text-indigo-600 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering growing businesses to scale their sales effortlessly
        </motion.p>

        <LeadGenerationDemo />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-indigo-700">Why Choose Our Lead Generation?</h2>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TrendingUp className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">
                  Boost sales productivity by up to <span className="font-bold text-indigo-600">300%</span> with
                  AI-qualified leads
                </span>
              </motion.li>
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Search className="w-8 h-8 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Precision-targeted leads matching your exact customer profile</span>
              </motion.li>
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">
                  Save <span className="font-bold text-indigo-600">20+ hours</span> per week on lead research and cold
                  outreach
                </span>
              </motion.li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-indigo-700">Our AI-Powered Process</h2>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Search className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Advanced data mining from multiple sources</span>
              </motion.li>
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Intelligent lead scoring and qualification</span>
              </motion.li>
              <motion.li
                className="flex items-start bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-8 h-8 text-purple-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg">Automated outreach and follow-up sequences</span>
              </motion.li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              <CountUp end={300} />+ qualified leads monthly
            </h3>
            <p className="text-gray-600">Consistently fill your sales pipeline</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BarChart className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              <CountUp end={60} />% reduction in CAC
            </h3>
            <p className="text-gray-600">Lower your customer acquisition cost</p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <PieChart className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              <CountUp end={90} />% increase in lead quality
            </h3>
            <p className="text-gray-600">Focus on leads most likely to convert</p>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
            Success Stories from Businesses Like Yours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              key={1}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{ position: "relative", width: "1px", minWidth: "100%", paddingBottom: "56.180%" }}>
                <iframe
                  allow="autoplay"
                  className="spotlightr"
                  allowtransparency="true"
                  style={{ width: "1px", minWidth: "100%", height: "100%", position: "absolute" }}
                  allowFullScreen={true}
                  src="https://videos.cdn.spotlightr.com/watch/MTcyMDE4Nw==?fallback=true"
                  frameBorder="0"
                  scrolling="no"
                  name="videoPlayer"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              key={2}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{ position: "relative", width: "1px", minWidth: "100%", paddingBottom: "56.180%" }}>
                <iframe
                  allow="autoplay"
                  className="spotlightr"
                  allowtransparency="true"
                  style={{ width: "1px", minWidth: "100%", height: "100%", position: "absolute" }}
                  allowFullScreen={true}
                  src="https://videos.cdn.spotlightr.com/watch/MTQ5MTAyNA==?fallback=true"
                  frameBorder="0"
                  scrolling="no"
                  name="videoPlayer"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              key={3}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{ position: "relative", width: "1px", minWidth: "100%", paddingBottom: "56.180%" }}>
                <iframe
                  allow="autoplay"
                  className="spotlightr"
                  allowtransparency="true"
                  style={{ width: "1px", minWidth: "100%", height: "100%", position: "absolute" }}
                  allowFullScreen={true}
                  src="https://videos.cdn.spotlightr.com/watch/MTcyMDE4OQ==?fallback=true"
                  frameBorder="0"
                  scrolling="no"
                  name="videoPlayer"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <motion.h2
            className="text-4xl font-bold text-indigo-800"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Your Competitors Are Already Ahead
          </motion.h2>
          <p className="text-xl text-indigo-600">
            Don't miss out on high-quality leads. Start dominating your market today!
          </p>
          <motion.div
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            Generate 300+ Qualified Leads Monthly
          </motion.div>
        </div>

        <motion.div className="mt-12 text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="https://api.whatsapp.com/send?phone=18605404520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-2xl font-semibold py-4 px-10 rounded-full shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            Supercharge Your Sales Now
          </a>
          <p className="mt-4 text-gray-600">30-day money-back guarantee. No risk, all reward!</p>
        </motion.div>
      </main>
    </div>
  )
}

