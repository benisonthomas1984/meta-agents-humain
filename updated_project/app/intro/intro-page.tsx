"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Mail,
  Phone,
  Share2,
  UserPlus,
  Wifi,
  MessageCircle,
  PieChart,
  ArrowRight,
  Zap,
  ArrowLeft,
} from "lucide-react"
import { useRouter } from "next/navigation"

const IntroPage: React.FC = () => {
  const router = useRouter()
  const [businessesImplementing, setBusinessesImplementing] = useState(1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessesImplementing((prev) => prev + Math.floor(Math.random() * 5) + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const navigateToCover = () => {
    window.scrollTo(0, 0)
    router.push("/")
  }

  const navigateToLeadGen = () => {
    window.scrollTo(0, 0)
    router.push("/lead-gen")
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={navigateToCover}
        >
          <ArrowLeft size={32} className="text-white hover:text-yellow-400 transition-colors" />
        </motion.div>

        {/* Update navigation button to Lead Gen page */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={navigateToLeadGen}
        >
          <ArrowRight size={32} className="text-white hover:text-yellow-400 transition-colors" />
        </motion.div>

        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Your Complete AI Sales Workforce</h1>
          <p className="text-xl text-blue-200">Outperform Your Competitors with Cutting-Edge AI Technology</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-semibold mb-4">Why Choose AI Sales Agents?</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-400 mr-2" size={20} />
                  <span>Generate qualified leads 24/7, even while you sleep</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-400 mr-2" size={20} />
                  <span>Conduct perfect research on every prospect</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="text-yellow-400 mr-2" size={20} />
                  <span>Engage leads across all channels automatically</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mb-4">The AI Advantage</h2>
              <p className="text-lg mb-4">
                While the average sales hire costs $45,000 and takes 3 months to onboard, your AI sales team starts
                immediately and scales effortlessly.
              </p>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                <p className="text-2xl font-bold">95% of Sales Tasks Automated</p>
                <p className="text-yellow-300 animate-pulse mt-2">Early Adopter Advantages Closing Soon - Act Now!</p>
              </div>
            </section>

            <section className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h2 className="text-3xl font-semibold mb-2">Businesses Already Implementing:</h2>
              <p className="text-5xl font-bold text-yellow-400">{businessesImplementing.toLocaleString()}</p>
              <p className="text-sm mt-2 text-blue-200">Join the AI revolution in sales today!</p>
            </section>
          </div>

          <div className="flex items-center justify-center">
            <AIAgentsInfographic />
          </div>
        </main>

        <footer className="mt-12">
          <div className="bg-white bg-opacity-10 rounded-full h-8 overflow-hidden">
            <div className="flex h-full">
              <div className="bg-red-500 w-1/3 text-sm flex items-center justify-center">Traditional Sales</div>
              <div className="bg-green-500 w-2/3 text-sm flex items-center justify-center">Your AI-Powered Growth</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

const AIAgentsInfographic = () => {
  const [activeFeature, setActiveFeature] = useState(null)
  const features = [
    { name: "Research", icon: Search, description: "Gathers in-depth insights on prospects" },
    { name: "Email", icon: Mail, description: "Crafts personalized, high-converting emails" },
    { name: "Call", icon: Phone, description: "Conducts intelligent sales calls" },
    { name: "Social Media", icon: Share2, description: "Engages prospects across platforms" },
    { name: "Lead Generation", icon: UserPlus, description: "Identifies and qualifies potential leads" },
    { name: "Web Listener", icon: Wifi, description: "Monitors online activity for sales opportunities" },
    { name: "Chat", icon: MessageCircle, description: "Provides 24/7 intelligent chat support" },
    { name: "Presentation", icon: PieChart, description: "Creates dynamic, data-driven presentations" },
  ]

  return (
    <div className="relative w-full aspect-square max-w-2xl">
      <motion.div
        className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      </svg>
      {features.map((feature, index) => {
        const angle = (index / features.length) * 2 * Math.PI
        const x = 50 + 40 * Math.cos(angle)
        const y = 50 + 40 * Math.sin(angle)
        return (
          <motion.div
            key={index}
            className="absolute w-20 h-20 bg-white bg-opacity-10 rounded-2xl flex flex-col items-center justify-center shadow-lg cursor-pointer"
            style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setActiveFeature(feature)}
          >
            <feature.icon className="text-yellow-400 mb-1" size={28} />
            <span className="text-xs font-medium text-center">{feature.name}</span>
          </motion.div>
        )
      })}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Zap className="text-yellow-400 mb-2" size={48} />
        <motion.p
          className="text-white text-lg font-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          AI Agents
        </motion.p>
      </motion.div>
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 bottom-0 bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg text-center"
          >
            <h3 className="text-lg font-semibold mb-2">{activeFeature.name}</h3>
            <p>{activeFeature.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default IntroPage

