"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Facebook,
  MessageCircle,
  Send,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Check,
  X,
  Bell,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

// ... (keep all the existing imports and component definitions)

export default function WebListenerPage() {
  const router = useRouter()

  const navigateToLeadGen = () => {
    window.scrollTo(0, 0)
    router.push("/lead-gen")
  }

  const navigateToResearchAgent = () => {
    window.scrollTo(0, 0)
    router.push("/research-agent")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative">
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToLeadGen}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToResearchAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      <ScarcityBanner />
      <SocialProofNotification />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          Accelerate Your Sales Pipeline with AI-Powered Web Listening
        </h1>
        <p className="text-xl text-center mb-8">
          Discover high-intent prospects before your competitors and close deals faster
        </p>
        <CountdownTimer />
        <WebListenerDemo />
        <TrustIndicators />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <KeyFeatures />
          <BusinessImpact />
        </div>
        <SuccessMetrics />
        <Testimonials />
        <ComparisonTable />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="md:col-span-2">
            <LeadForm />
          </div>
          <ActivityFeed />
        </div>
        <FAQ />
        <div className="mt-12 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=18605404520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
          >
            Claim Your Free Consultation Now
          </a>
        </div>
      </div>
    </main>
  )
}

function ScarcityBanner() {
  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center">
      <p className="font-bold">
        Only 5 consultation slots left this week! Don't miss out on accelerating your sales growth.
      </p>
    </div>
  )
}

function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  const notifications = [
    "Sarah from TechCorp just booked a demo",
    "John closed a $100k deal using our tool",
    "50 new leads generated in the last hour",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true)
      setCurrentNotification((prev) => (prev + 1) % notifications.length)

      setTimeout(() => setIsVisible(false), 5000)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 z-50"
        >
          <Bell className="w-6 h-6" />
          <span>{notifications[currentNotification]}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60) // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-2">Limited Time Offer Ends In:</h3>
      <div className="flex justify-center items-center space-x-4">
        <div className="bg-blue-600 rounded-lg p-3">
          <span className="text-3xl font-bold">{hours.toString().padStart(2, "0")}</span>
          <span className="text-sm block">Hours</span>
        </div>
        <div className="bg-blue-600 rounded-lg p-3">
          <span className="text-3xl font-bold">{minutes.toString().padStart(2, "0")}</span>
          <span className="text-sm block">Minutes</span>
        </div>
        <div className="bg-blue-600 rounded-lg p-3">
          <span className="text-3xl font-bold">{seconds.toString().padStart(2, "0")}</span>
          <span className="text-sm block">Seconds</span>
        </div>
      </div>
    </div>
  )
}

function WebListenerDemo() {
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [response, setResponse] = useState("")

  const platforms = [
    {
      name: "Reddit",
      icon: MessageCircle,
      color: "bg-orange-600",
      textColor: "text-orange-600",
      post: {
        author: "car_enthusiast",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Can anyone recommend a reliable auto mechanic in downtown? My car's been making weird noises lately.",
        time: "2 minutes ago",
      },
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      post: {
        author: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Hey everyone! I'm looking for a great physiotherapist in the area. Any recommendations?",
        time: "5 minutes ago",
      },
    },
  ]

  useEffect(() => {
    const platformInterval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length)
      setIsTyping(false)
      setResponse("")
    }, 10000)

    return () => clearInterval(platformInterval)
  }, [platforms.length])

  useEffect(() => {
    if (currentPlatform === 0) {
      setTimeout(() => setIsTyping(true), 2000)
      setTimeout(() => {
        setIsTyping(false)
        setResponse(
          "Hi there! I recommend checking out AutoPro Mechanics on 5th Street. They're known for their reliability and fair pricing. Hope this helps!",
        )
      }, 6000)
    } else {
      setTimeout(() => setIsTyping(true), 2000)
      setTimeout(() => {
        setIsTyping(false)
        setResponse(
          "Hello Sarah! Dr. Emily Thompson at PhysioFit Clinic comes highly recommended. She specializes in sports injuries and rehabilitation. You can book an appointment online or call them at 555-0123.",
        )
      }, 6000)
    }
  }, [currentPlatform])

  const platform = platforms[currentPlatform]

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Web Listener Agent in Action</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <PlatformPost platform={platform} />
        <ResponsePanel platform={platform} isTyping={isTyping} response={response} />
      </div>
    </div>
  )
}

function PlatformPost({ platform }) {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 text-gray-800">
      <div className="flex items-center gap-2 mb-4">
        <platform.icon className={`w-6 h-6 ${platform.textColor}`} />
        <span className="font-semibold">{platform.name}</span>
      </div>
      <div className="flex items-start gap-3">
        <img
          src={platform.post.avatar || "/placeholder.svg"}
          alt={platform.post.author}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="font-semibold">{platform.post.author}</div>
          <p className="mt-1">{platform.post.content}</p>
          <div className="text-sm text-gray-500 mt-2">{platform.post.time}</div>
        </div>
      </div>
    </div>
  )
}

function ResponsePanel({ platform, isTyping, response }) {
  return (
    <div className="flex-1 bg-gray-700 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <img src="/placeholder.svg?height=32&width=32" alt="Web Listener" className="w-8 h-8 rounded-full" />
        <span className="font-semibold">Web Listener Agent</span>
      </div>
      <div className="bg-gray-600 rounded-lg p-3 min-h-[100px]">
        <AnimatePresence>
          {isTyping ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </motion.div>
          ) : response ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-2">
              <div className="flex-grow">{response}</div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}>
                <Send className="w-4 h-4 text-green-500" />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

function TrustIndicators() {
  return (
    <div className="my-12 text-center">
      <h3 className="text-xl mb-4">Trusted by High Growth Entrepreneurs</h3>
      <p className="text-lg text-gray-300">
        Our Web Listener Agent is the choice of industry leaders across America, helping businesses of all sizes
        accelerate their sales and marketing efforts.
      </p>
    </div>
  )
}

function KeyFeatures() {
  const features = [
    "24/7 monitoring of online conversations across multiple platforms",
    "AI-powered identification of high-intent prospects",
    "Automated, personalized responses to potential customers",
    "Real-time alerts for immediate follow-up opportunities",
    "Integration with your existing CRM and sales tools",
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Key Features for Business Growth</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BusinessImpact() {
  const impacts = [
    { icon: TrendingUp, text: "Increase lead generation by up to 300%" },
    { icon: Clock, text: "Reduce response time from hours to minutes" },
    { icon: DollarSign, text: "Boost conversion rates by 50% or more" },
    { icon: Users, text: "Expand your customer base across North America" },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Impact on Your Business</h2>
      <ul className="space-y-4">
        {impacts.map((impact, index) => (
          <li key={index} className="flex items-center">
            <impact.icon className="text-blue-500 mr-3 w-6 h-6 flex-shrink-0" />
            <span className="text-lg">{impact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SuccessMetrics() {
  const metrics = [
    { label: "Average ROI", value: "500%", icon: "💰" },
    { label: "Lead Response Time", value: "< 5 min", icon: "⚡" },
    { label: "Increase in Qualified Leads", value: "3X", icon: "📈" },
  ]

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Success Metrics for North American Businesses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="text-4xl mb-2">{metric.icon}</span>
            <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
            <p className="text-3xl font-bold">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, TechInnovate Inc.",
      company: "TechInnovate Inc.",
      text: "The Web Listener Agent has transformed our sales process. We're now connecting with prospects we never knew existed, and our sales team is closing deals faster than ever.",
    },
    {
      name: "Sarah Johnson",
      position: "Sales Director, GrowthMax Solutions",
      company: "GrowthMax Solutions",
      text: "As a B2B company, finding the right leads was always a challenge. This tool has not only increased our lead quality but also significantly reduced our customer acquisition costs.",
    },
  ]

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">What North American Business Leaders Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="mb-4">"{testimonial.text}"</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.position}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ComparisonTable() {
  const features = [
    "24/7 Lead Generation",
    "AI-Powered Prospect Identification",
    "Automated Personalized Responses",
    "Multi-Platform Monitoring",
    "Real-Time Sales Alerts",
    "CRM Integration",
  ]

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">How We Compare</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3 text-left">Feature</th>
              <th className="p-3 text-center">Web Listener Agent</th>
              <th className="p-3 text-center">Traditional Methods</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-750" : ""}>
                <td className="p-3">{feature}</td>
                <td className="p-3 text-center">
                  <Check className="inline-block text-green-500" />
                </td>
                <td className="p-3 text-center">
                  <X className="inline-block text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function LeadForm() {
  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-4">Ready to Accelerate Your Sales?</h2>
      <p className="text-center mb-6">
        Get a free consultation and see how the Web Listener Agent can transform your business
      </p>
      <div className="mx-auto w-full max-w-sm">
        <a
          href="https://api.whatsapp.com/send?phone=18605404520"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg transition-colors duration-300"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-white-icon-Zv8ITWYZ9WERlyv8WKQ9C7DsQF3yE0.png"
            alt="WhatsApp"
            className="w-6 h-6 mr-2"
          />
          Contact Us
        </a>
      </div>
    </div>
  )
}

function ActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState(0)

  const activities = [
    "John D. just signed up for a demo",
    "Sarah M. closed a $50k deal using our tool",
    "TechCorp increased leads by 250% this month",
    "New feature: AI-powered response templates",
    "Webinar: 'Mastering Web Listening' starting soon",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-xl font-bold mb-4">Live Activity Feed</h3>
      <div className="h-40 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentActivity}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 rounded p-3 mb-2"
          >
            {activities[currentActivity]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does the Web Listener Agent find potential customers?",
      answer:
        "Our AI-powered Web Listener Agent continuously monitors various online platforms, including social media, forums, and industry-specific websites. It identifies conversations and posts that indicate a need for your products or services, allowing you to engage with potential customers at the right moment.",
    },
    {
      question: "Can the Web Listener Agent integrate with my existing CRM?",
      answer:
        "Yes, our Web Listener Agent is designed to seamlessly integrate with most popular CRM systems. This integration allows for automatic lead creation and updating, ensuring your sales team has the most up-to-date information at their fingertips.",
    },
    {
      question: "How does this tool comply with privacy regulations?",
      answer:
        "Our Web Listener Agent only accesses publicly available information and adheres to all relevant privacy laws and platform-specific terms of service. We do not collect or store personal data beyond what is necessary for lead generation and always prioritize data protection and compliance.",
    },
    {
      question: "What kind of ROI can I expect from using the Web Listener Agent?",
      answer:
        "While results can vary depending on your industry and specific use case, our clients typically see a 3-5x increase in qualified leads and a 20-30% reduction in customer acquisition costs within the first three months of implementation.",
    },
  ]

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold">{faq.question}</span>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

