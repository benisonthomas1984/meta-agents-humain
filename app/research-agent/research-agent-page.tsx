"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  User,
  Mail,
  Phone,
  Loader,
  DollarSign,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"
import { useRouter } from "next/navigation"

const clients = [
  {
    name: "Emily Johnson",
    email: "emily.johnson@techinnovate.com",
    phone: "+1 (415) 555-7890",
    location: "San Francisco, CA",
    averageIncome: "$135,000",
    emotionalValue: "Enthusiastic about cutting-edge technology",
    professionalStrength: "Product management, agile methodologies",
    technicalUnderstanding: "Strong in SaaS platforms and AI applications",
    interests: "Tech conferences, hiking, sustainable living",
    communicationStyle: "Visual and collaborative, prefers video calls",
    decisionMakingProcess: "Fast-paced, relies on data and team input",
    painPoints: "Scaling team efficiently, maintaining work-life balance",
  },
  {
    name: "Michael Chen",
    email: "michael.chen@globalfinance.com",
    phone: "+1 (212) 555-3456",
    phone: "+1 (212) 555-3456",
    location: "New York City, NY",
    averageIncome: "$180,000",
    emotionalValue: "Detail-oriented, values precision and reliability",
    professionalStrength: "Financial analysis, risk assessment",
    technicalUnderstanding: "Proficient in financial modeling and blockchain",
    interests: "Economic forums, classical music, international cuisine",
    communicationStyle: "Formal and data-driven, prefers detailed reports",
    decisionMakingProcess: "Methodical, requires comprehensive risk analysis",
    painPoints: "Regulatory compliance, adapting to rapid market changes",
  },
  {
    name: "Sarah Martinez",
    email: "sarah.martinez@ecoventures.org",
    phone: "+1 (303) 555-9012",
    location: "Denver, CO",
    averageIncome: "$95,000",
    emotionalValue: "Passionate about environmental sustainability",
    professionalStrength: "Project management, community outreach",
    technicalUnderstanding: "Familiar with renewable energy technologies",
    interests: "Environmental activism, organic gardening, eco-tourism",
    communicationStyle: "Warm and engaging, prefers in-person meetings",
    decisionMakingProcess: "Collaborative, considers long-term environmental impact",
    painPoints: "Securing funding for projects, measuring impact metrics",
  },
]

export default function ResearchAgentPage() {
  const router = useRouter()

  const navigateToWebListener = () => {
    window.scrollTo(0, 0)
    router.push("/web-listener")
  }

  const navigateToEmailAgent = () => {
    window.scrollTo(0, 0)
    router.push("/email-agent")
  }

  return (
    <div className="min-h-screen bg-[#fcf9f6] text-[#030609] px-4 py-12 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToWebListener}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToEmailAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      <main className="container mx-auto">
        <HeroSection />
        <ClientResearchCard />
        <Capabilities />
        <ValueMetrics />
        <CallToAction />
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="text-center mb-24 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full blur-3xl opacity-50 -z-10"
      />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-7xl font-extrabold mb-6 relative"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
          AI Research Agent
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl mb-12 text-gray-700 max-w-3xl mx-auto"
      >
        Know Your Prospects Better Than Your Competition
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=18605404520"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group w-fit"
        >
          Unlock Your Research Potential
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  )
}

function ClientResearchCard() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0)
  const [searchState, setSearchState] = useState("initial")
  const [revealedFields, setRevealedFields] = useState([])

  useEffect(() => {
    const cycleClient = () => {
      setSearchState("initial")
      setRevealedFields([])
      setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length)

      setTimeout(() => setSearchState("searching"), 1000)
      setTimeout(() => {
        setSearchState("results")
        revealFields()
      }, 3000)
    }

    const timer = setInterval(cycleClient, 15000)
    cycleClient()
    return () => clearInterval(timer)
  }, [])

  const revealFields = () => {
    const fields = [
      "location",
      "averageIncome",
      "emotionalValue",
      "professionalStrength",
      "technicalUnderstanding",
      "interests",
      "communicationStyle",
      "decisionMakingProcess",
      "painPoints",
    ]
    fields.forEach((field, index) => {
      setTimeout(() => {
        setRevealedFields((prev) => [...prev, field])
      }, index * 500)
    })
  }

  const currentClient = clients[currentClientIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-2xl p-8 mb-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 opacity-50 -z-10" />
      <div className="relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
          AI-Powered Client Research in Action
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center bg-gray-100 p-4 rounded-xl">
            <User className="w-8 h-8 mr-4 text-gray-800" />
            <div>
              <span className="block font-semibold text-lg">{currentClient.name}</span>
              <span className="text-sm text-gray-600">Name</span>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-4 rounded-xl">
            <Mail className="w-8 h-8 mr-4 text-gray-800" />
            <div>
              <span className="block font-semibold text-lg">{currentClient.email}</span>
              <span className="text-sm text-gray-600">Email</span>
            </div>
          </div>
          <div className="flex items-center bg-gray-100 p-4 rounded-xl">
            <Phone className="w-8 h-8 mr-4 text-gray-800" />
            <div>
              <span className="block font-semibold text-lg">{currentClient.phone}</span>
              <span className="text-sm text-gray-600">Phone</span>
            </div>
          </div>
        </div>

        {searchState === "initial" && (
          <div className="text-center text-gray-800 text-2xl py-12">Initializing AI research...</div>
        )}

        {searchState === "searching" && (
          <div className="flex justify-center items-center space-x-4 py-12">
            <Loader className="w-10 h-10 animate-spin text-gray-800" />
            <span className="text-2xl text-gray-800">AI agent analyzing client data...</span>
          </div>
        )}

        {searchState === "results" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(currentClient)
              .slice(3)
              .map(([key, value]) => (
                <AnimatePresence key={key}>
                  {revealedFields.includes(key) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gray-100 p-6 rounded-xl shadow-md"
                    >
                      <h3 className="font-semibold text-gray-800 capitalize mb-2 text-lg">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </h3>
                      <p className="text-gray-700 text-lg">{value}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function Capabilities() {
  const capabilities = [
    {
      icon: Search,
      title: "Comprehensive Digital Footprint Analysis",
      description: "Analyze social media profiles and online presence for deep insights.",
    },
    {
      icon: DollarSign,
      title: "Financial Capacity Assessment",
      description: "Evaluate client worth based on geographic location and professional summary.",
    },
    {
      icon: MessageCircle,
      title: "Communication Preference Mapping",
      description: "Identify the best channels and approaches for client engagement.",
    },
  ]

  return (
    <section className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
        Unlock Your Research Superpowers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <capability.icon className="w-10 h-10 text-gray-800" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">{capability.title}</h3>
            <p className="text-gray-700 text-lg">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ValueMetrics() {
  const metrics = [
    { value: "36%", description: "Higher conversion rates" },
    { value: "69%", description: "More accurate pricing strategies" },
    { value: "90%", description: "Reduction in research time" },
  ]

  return (
    <section className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
        Proven Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-6xl font-bold mb-4 text-gray-900">{metric.value}</h3>
            <p className="text-gray-700 text-xl">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-black">
        Ready to Dominate Your Market?
      </h2>
      <p className="text-2xl mb-12 text-gray-700 max-w-3xl mx-auto">
        Don't let your competition get ahead. Start using AI Research Agent today and transform your sales approach!
      </p>
      <div className="flex justify-center">
        <a
          href="https://api.whatsapp.com/send?phone=18605404520"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center group"
        >
          Explore Agent
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}

