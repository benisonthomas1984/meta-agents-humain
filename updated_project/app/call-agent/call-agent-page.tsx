"use client"

import { useState, useEffect } from "react"
import {
  PhoneCall,
  Bot,
  BarChart,
  Clock,
  Target,
  MessageSquare,
  DollarSign,
  Users,
  Play,
  Pause,
  Calendar,
  Trophy,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

// UI Components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Success Metric Component
function SuccessMetric() {
  const [callCount, setCallCount] = useState(0)
  const [meetingsBooked, setMeetingsBooked] = useState(0)

  useEffect(() => {
    // Simulate real-time call activity
    const interval = setInterval(() => {
      setCallCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 4000)

    // Simulate meetings being booked
    const meetingInterval = setInterval(() => {
      setMeetingsBooked((prev) => prev + 1)
    }, 12000)

    return () => {
      clearInterval(interval)
      clearInterval(meetingInterval)
    }
  }, [])

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-[600px] mx-auto mt-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center relative overflow-hidden group">
        <div className="relative z-10">
          <PhoneCall className="w-6 h-6 mx-auto mb-2 text-white/90" />
          <div className="text-3xl font-bold text-white mb-1">{callCount}</div>
          <div className="text-sm text-white/90">Calls Made Today</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center relative overflow-hidden group">
        <div className="relative z-10">
          <Calendar className="w-6 h-6 mx-auto mb-2 text-white/90" />
          <div className="text-3xl font-bold text-white mb-1">{meetingsBooked}</div>
          <div className="text-sm text-white/90">Meetings Booked Today</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  )
}

// Activity Feed Component
function ActivityFeed() {
  const names = [
    "Michael Thompson",
    "Sarah Johnson",
    "David Williams",
    "Emily Rodriguez",
    "James Chen",
    "Lisa Anderson",
    "Robert Kim",
    "Jennifer Martinez",
    "William Parker",
    "Maria Garcia",
    "Alexander Lee",
    "Rachel Foster",
    "Daniel Brown",
    "Sofia Patel",
    "Christopher Wright",
    "Emma Wilson",
    "Nathan Taylor",
    "Isabella Lopez",
  ]

  const actions = ["just booked a demo", "scheduled a meeting", "started a conversation"]

  const [activities, setActivities] = useState<Activity[]>([])
  const [lastId, setLastId] = useState(0)
  const [lastUsedNames, setLastUsedNames] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const availableNames = names.filter((name) => !lastUsedNames.includes(name))
      const name = availableNames[Math.floor(Math.random() * availableNames.length)]
      const action = actions[Math.floor(Math.random() * actions.length)]

      setLastId((prev) => prev + 1)
      setLastUsedNames((prev) => {
        const updated = [name, ...prev]
        return updated.slice(0, 5)
      })

      setActivities((prev) => [
        {
          id: lastId,
          name,
          action,
          timeAgo: "just now",
        },
        ...prev.slice(0, 2),
      ])
    }, 8000)

    return () => clearInterval(interval)
  }, [lastId, lastUsedNames])

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <AnimatePresence>
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-2 max-w-xs"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm">
                <span className="font-semibold">{activity.name}</span> {activity.action}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Achievement Unlock Component
function AchievementUnlock() {
  const achievements = [
    "AI Agent completed 100 calls",
    "50 meetings scheduled this week",
    "New efficiency record: 95% engagement rate",
    "Revenue milestone achieved",
  ]

  const [currentAchievement, setCurrentAchievement] = useState("")
  const [showAchievement, setShowAchievement] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const achievement = achievements[Math.floor(Math.random() * achievements.length)]
      setCurrentAchievement(achievement)
      setShowAchievement(true)

      setTimeout(() => {
        setShowAchievement(false)
      }, 5000)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div className="bg-gradient-to-r from-yellow-500/90 to-amber-500/90 text-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-yellow-100" />
              <div>
                <div className="text-xs font-semibold text-yellow-100">Achievement Unlocked!</div>
                <div className="text-sm">{currentAchievement}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Add Activity interface
interface Activity {
  id: number
  name: string
  action: string
  timeAgo: string
}

export default function CallAgentPage() {
  const [customerData, setCustomerData] = useState({
    name: "John Smith",
    company: "Tech Innovations Inc.",
    industry: "Software Development",
    painPoint: "Struggling with long development cycles",
  })
  const [generatedScript, setGeneratedScript] = useState("")
  const [isCallActive, setIsCallActive] = useState(false)
  const [callTranscript, setCallTranscript] = useState("")
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const generateScript = () => {
    // Simulating AI script generation
    const script = `Hello ${customerData.name}, this is AI Sales Agent calling from AI Sales Caller. 
    I understand that ${customerData.company} is in the ${customerData.industry} industry and you're currently ${customerData.painPoint}. 
    Our AI-powered development tools have helped similar companies reduce their development cycles by up to 50%. 
    Would you be interested in learning how we could help ${customerData.company} achieve similar results?`
    setGeneratedScript(script)
  }

  const initiateCall = () => {
    setIsCallActive(true)
    // Simulating call progress
    let transcript = ""
    const conversation = [
      "AI: " + generatedScript,
      "John: That sounds interesting. Can you tell me more about how it works?",
      "AI: Our AI-powered tools analyze your current development processes and suggest optimizations. It can automate repetitive tasks, predict potential bottlenecks, and provide real-time suggestions to developers. This typically results in faster development cycles and fewer errors.",
      "John: That does sound helpful. What kind of investment would this require?",
      "AI: The investment varies based on your team size and specific needs. However, most of our clients see a return on investment within the first 3-6 months due to increased productivity. Would you like me to schedule a detailed demo with one of our solution architects to discuss your specific requirements?",
      "John: Yes, that would be helpful. Please go ahead and schedule that.",
      "AI: Excellent! I'll have our team reach out to you with available time slots for the demo. Thank you for your time today, John. We look forward to showing you how we can help Tech Innovations Inc. optimize your development processes.",
    ]

    conversation.forEach((line, index) => {
      setTimeout(() => {
        transcript += line + "\n"
        setCallTranscript(transcript)
        if (index === conversation.length - 1) {
          setIsCallActive(false)
        }
      }, index * 2000) // Delay each line by 2 seconds
    })
  }

  const navigateToEmailAgent = () => {
    window.scrollTo(0, 0)
    router.push("/email-agent")
  }

  const navigateToChatAgent = () => {
    window.scrollTo(0, 0)
    router.push("/chat-agent")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToEmailAgent}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>
      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToChatAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2 animate-fade-in-up">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[600px]">
                    Revolutionize Your Sales Outreach with AI
                  </h1>
                  <p className="max-w-[600px] text-xl text-primary-foreground/90 md:text-2xl">
                    Our AI-powered cold calling agent makes more calls, books more meetings, and generates more leads
                    than human agents - 24/7.
                  </p>
                </div>
                <SuccessMetric />
              </div>
              <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="relative w-full max-w-[600px] aspect-video rounded-lg shadow-xl overflow-hidden">
                  <div style={{ position: "relative", width: "1px", minWidth: "100%", paddingBottom: "56.180%" }}>
                    <iframe
                      allow="autoplay"
                      className="spotlightr"
                      allowtransparency="true"
                      style={{ width: "1px", minWidth: "100%", height: "100%", position: "absolute" }}
                      allowFullScreen={true}
                      src="https://videos.cdn.spotlightr.com/watch/MTc0MzgxMQ==?fallback=true"
                      frameBorder="0"
                      scrolling="no"
                      name="videoPlayer"
                    ></iframe>
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/75 text-white text-sm px-4 py-2">
                      <span>AI Sales Caller Demo</span>
                      <span>3:45</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: Bot,
                  title: "AI-Powered Conversations",
                  description: "Natural language processing for human-like sales interactions",
                },
                { icon: Clock, title: "24/7 Outreach", description: "Non-stop cold calling without breaks or burnout" },
                {
                  icon: BarChart,
                  title: "Performance Analytics",
                  description: "Detailed insights into call performance and conversion rates",
                },
                {
                  icon: Target,
                  title: "Intelligent Lead Scoring",
                  description: "Prioritize high-potential leads for better conversion",
                },
                {
                  icon: MessageSquare,
                  title: "Multi-Channel Integration",
                  description: "Seamless handoff to email or SMS for follow-ups",
                },
                { icon: Users, title: "CRM Integration", description: "Automatic updates to your existing CRM system" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose AI Cold Calling?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: DollarSign,
                  title: "Increased Revenue",
                  description: "Generate more leads and close more deals with non-stop outreach",
                },
                {
                  icon: BarChart,
                  title: "Higher Efficiency",
                  description: "Make more calls in less time, increasing your team's productivity",
                },
                {
                  icon: Users,
                  title: "Consistent Performance",
                  description: "Eliminate human variability and maintain peak performance",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <benefit.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 dark:text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              See AI Cold Calling in Action
            </h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Customer Data</h3>
                <div className="grid gap-4">
                  <Input
                    placeholder="Customer Name"
                    value={customerData.name}
                    onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  />
                  <Input
                    placeholder="Company"
                    value={customerData.company}
                    onChange={(e) => setCustomerData({ ...customerData, company: e.target.value })}
                  />
                  <Input
                    placeholder="Industry"
                    value={customerData.industry}
                    onChange={(e) => setCustomerData({ ...customerData, industry: e.target.value })}
                  />
                  <Input
                    placeholder="Pain Point"
                    value={customerData.painPoint}
                    onChange={(e) => setCustomerData({ ...customerData, painPoint: e.target.value })}
                  />
                </div>
                <Button onClick={generateScript} className="w-full">
                  Generate Call Script
                </Button>
              </div>
              <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">Generated Script</h3>
                <Textarea value={generatedScript} readOnly className="h-[150px] resize-none" />
                <Button onClick={initiateCall} disabled={!generatedScript || isCallActive} className="w-full">
                  {isCallActive ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
                  {isCallActive ? "Call in Progress" : "Initiate Call"}
                </Button>
                <div className="mt-6">
                  <h3 className="text-xl font-bold mb-4">Call Transcript</h3>
                  <Textarea value={callTranscript} readOnly className="h-[200px] resize-none" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Sales Outreach?
                </h2>
                <p className="mx-auto max-w-[600px] text-xl text-primary-foreground/90">
                  Experience the power of AI-driven cold calling and transform your sales process today.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <a
                  href="https://api.whatsapp.com/send?phone=18605404520"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full text-lg font-semibold text-white bg-[#30C000] hover:bg-[#28A000] transition-colors duration-300"
                  style={{ backgroundColor: "#30C000" }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-white-icon-vQR5URQtntROPVkesBdCMMlCvJc8hY.png"
                    alt=""
                    className="h-6 w-6 mr-2"
                  />
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ActivityFeed />
      <AchievementUnlock />
    </div>
  )
}

