"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, CheckCircle, TrendingUp, UserCheck, BarChart2, Clock, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const clients = [
  {
    name: "Emma Thompson",
    email: "emma.thompson@globaltech.com",
    company: "GlobalTech Solutions",
    industry: "Software Development",
  },
  {
    name: "Raj Patel",
    email: "raj.patel@innovatehealth.org",
    company: "InnovateHealth",
    industry: "Healthcare Technology",
  },
  { name: "Sophia Chen", email: "sophia.chen@ecostart.io", company: "EcoStart", industry: "Sustainable Energy" },
  { name: "Alex Rodriguez", email: "alex.rodriguez@finedge.com", company: "FinEdge", industry: "Financial Technology" },
]

const generateEmailContent = (client) => {
  const introductions = [
    `I hope this email finds you well. I recently came across ${client.company} and was impressed by your innovative work in the ${client.industry} sector.`,
    `I trust you're having a great week. Your company, ${client.company}, caught my attention due to its groundbreaking approach to ${client.industry}.`,
    `I hope you're doing well. I've been following ${client.company}'s progress in the ${client.industry} space and I'm truly impressed with your achievements.`,
    `I hope this message finds you in good spirits. The work ${client.company} is doing in ${client.industry} is truly remarkable, and I wanted to reach out.`,
  ]

  const bodies = [
    `I believe our AI-powered email optimization service could significantly enhance your outreach efforts. We've helped companies in ${client.industry} increase their email open rates by up to 35% and response rates by 22%.`,
    `Our AI email agent has been particularly effective for businesses in ${client.industry}, helping them save an average of 15 hours per week on email communications while improving engagement metrics across the board.`,
    `Given your focus on innovation in ${client.industry}, I think you'd be interested in how our AI email technology can streamline your communication processes and boost your team's productivity.`,
    `We've developed a unique AI solution that can personalize email communications at scale, which has proven especially valuable for companies in ${client.industry} like yours.`,
  ]

  const closings = [
    `Would you be open to a brief call next week to discuss how we could tailor our solution to ${client.company}'s specific needs?`,
    `I'd love the opportunity to show you a quick demo of how our AI email agent could work for ${client.company}. Might you have 15 minutes to spare this coming week?`,
    `If you're interested in learning more about how we could boost ${client.company}'s email effectiveness, I'd be happy to schedule a short call at your convenience.`,
    `I'm excited about the potential impact our solution could have for ${client.company}. Would you be available for a quick chat to explore this further?`,
  ]

  const intro = introductions[Math.floor(Math.random() * introductions.length)]
  const body = bodies[Math.floor(Math.random() * bodies.length)]
  const closing = closings[Math.floor(Math.random() * closings.length)]

  return `Dear ${client.name},\n\n${intro}\n\n${body}\n\n${closing}\n\nBest regards,\nAI Email Agent`
}

const EmailComposition = ({ client, onComplete }) => {
  const [text, setText] = useState("")
  const fullText = useMemo(() => generateEmailContent(client), [client])

  useEffect(() => {
    let isMounted = true
    let i = 0
    const typingInterval = 30

    const typeText = () => {
      if (isMounted) {
        if (i <= fullText.length) {
          setText(fullText.slice(0, i))
          i++
          setTimeout(typeText, typingInterval)
        } else {
          setTimeout(onComplete, 1000)
        }
      }
    }

    typeText()

    return () => {
      isMounted = false
    }
  }, [fullText, onComplete])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full overflow-auto">
      <div className="mb-2">
        <span className="font-semibold">To:</span> {client.email}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Subject:</span> Enhancing {client.company}'s Email Strategy
      </div>
      <div className="border-t pt-2 whitespace-pre-wrap">{text}</div>
    </div>
  )
}

export default function EmailAgentPage() {
  const [currentClientIndex, setCurrentClientIndex] = useState(0)
  const [isComposing, setIsComposing] = useState(true)
  const [emailsSent, setEmailsSent] = useState(0)

  const nextClient = useCallback(() => {
    setIsComposing(true)
    setCurrentClientIndex((prevIndex) => (prevIndex + 1) % clients.length)
    setEmailsSent((prev) => prev + 1)
  }, [])

  const handleCompositionComplete = () => {
    setIsComposing(false)
  }

  useEffect(() => {
    if (!isComposing) {
      const timer = setTimeout(nextClient, 3000) // Wait for 3 seconds before moving to the next client
      return () => clearTimeout(timer)
    }
  }, [isComposing, nextClient])

  const router = useRouter()

  const navigateToResearchAgent = () => {
    window.scrollTo(0, 0)
    router.push("/research-agent")
  }

  const navigateToCallAgent = () => {
    window.scrollTo(0, 0)
    router.push("/call-agent")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcf9f6] via-[#e5e2df] to-[#c9c6c3] text-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToResearchAgent}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToCallAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600"
        >
          Perfect Timing, Perfect Message, Every Time
        </motion.h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 lg:mb-0 lg:w-1/2 pr-8"
          >
            <h2 className="text-3xl font-semibold mb-6">AI-Powered Email Precision</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Watch as our AI Email Agent automatically composes and sends personalized emails to potential clients,
              ensuring perfect timing and messaging for maximum impact.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <CheckCircle className="mr-3 text-green-500" /> Time zone optimized sending
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-3 text-green-500" /> Personality-matched communication
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-3 text-green-500" /> Automated follow-up sequences
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 h-[500px] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">AI Email Agent</h3>
              <div className="text-sm">Emails Sent: {emailsSent}</div>
            </div>
            <div className="p-4 h-[calc(100%-60px)]">
              <AnimatePresence mode="wait">
                {isComposing ? (
                  <motion.div
                    key="composing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full"
                  >
                    <EmailComposition client={clients[currentClientIndex]} onComplete={handleCompositionComplete} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center h-full"
                  >
                    <div className="text-center">
                      <Mail className="mx-auto mb-4 text-green-500" size={48} />
                      <p className="text-xl font-semibold mb-2">Email Sent!</p>
                      <p className="text-gray-600 mb-4">Successfully sent to {clients[currentClientIndex].name}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-lg shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Real-Time Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <BarChart2 className="mx-auto mb-3 text-blue-500" size={40} />
              <p className="font-medium text-lg mb-2">Open Rate</p>
              <p className="text-3xl font-bold text-blue-600">32%</p>
              <p className="text-sm text-blue-700 mt-2">
                <TrendingUp className="inline mr-1" size={16} />
                5% increase
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <UserCheck className="mx-auto mb-3 text-green-500" size={40} />
              <p className="font-medium text-lg mb-2">Response Rate</p>
              <p className="text-3xl font-bold text-green-600">18%</p>
              <p className="text-sm text-green-700 mt-2">
                <TrendingUp className="inline mr-1" size={16} />
                3% increase
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <Clock className="mx-auto mb-3 text-purple-500" size={40} />
              <p className="font-medium text-lg mb-2">Time Saved</p>
              <p className="text-3xl font-bold text-purple-600">15 hrs/week</p>
              <p className="text-sm text-purple-700 mt-2">
                <TrendingUp className="inline mr-1" size={16} />
                20% improvement
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-gray-900 mb-16"
        >
          <h3 className="text-3xl font-semibold mb-6">Don't Miss Out on Potential Clients</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every minute you wait is a potential client lost to your competition. Start optimizing your email outreach
            today and stay ahead of the curve!
          </p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=18605404520"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now - Limited Time Offer!
          </motion.a>
          <p className="text-sm text-gray-600 mt-4">*Offer ends soon. Don't let this opportunity slip away!</p>
        </motion.div>
      </div>
    </div>
  )
}

