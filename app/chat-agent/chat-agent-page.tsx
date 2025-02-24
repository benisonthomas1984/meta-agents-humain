"use client"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, TrendingUp, Zap, Globe, MessageSquare, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

// UI Components
import * as React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Button } from "@/components/ui/button"

// Utils function
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Card Components
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} ref={ref} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} ref={ref} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} ref={ref} />
  ),
)
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div className={cn("p-6 pt-0", className)} {...props} ref={ref} />,
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} ref={ref} />
  ),
)
CardFooter.displayName = "CardFooter"

// Progress Component
const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, value, max, ...props }, ref) => {
    return (
      <progress
        ref={ref}
        className={cn("h-2 w-full appearance-none overflow-hidden rounded-full bg-secondary", className)}
        value={value}
        max={max}
        {...props}
      />
    )
  },
)
Progress.displayName = "Progress"

// WebsiteChatDemo Component
function WebsiteChatDemo() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isChatStarted, setIsChatStarted] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  type Message = {
    role: "user" | "ai"
    content: string
  }

  const messages: Message[] = [
    { role: "user", content: "Hi, I'm looking for a new laptop. Can you help?" },
    {
      role: "ai",
      content:
        "Of course! I'd be happy to help you find a laptop. Could you tell me what you'll primarily be using it for?",
    },
    { role: "user", content: "I need it for work - mostly document editing and video calls." },
    {
      role: "ai",
      content:
        "Great! For document editing and video calls, I'd recommend a laptop with at least 8GB of RAM, an i5 processor or equivalent, and a good webcam. Do you have a preferred screen size?",
    },
    { role: "user", content: "I'd prefer something portable, maybe 13 or 14 inches?" },
    {
      role: "ai",
      content:
        "Perfect. Based on your needs, I'd suggest the Dell XPS 13 or the MacBook Air 13\". Both are lightweight, have great performance, and excellent battery life. Do you have a preference between Windows and macOS?",
    },
    { role: "user", content: "I'm more familiar with Windows. How much is the Dell XPS 13?" },
    {
      role: "ai",
      content:
        "The Dell XPS 13 starts at $999 for the base model, which should be suitable for your needs. It comes with 8GB RAM, 256GB SSD, and an 11th Gen Intel Core i5 processor. Would you like me to send you a link to the product page?",
    },
  ]

  useEffect(() => {
    if (!isChatStarted) return

    const typeMessage = async () => {
      const message = messages[currentMessageIndex]
      setIsTyping(true)

      for (let i = 0; i <= message.content.length; i++) {
        setCurrentText(message.content.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 30))
      }

      setIsTyping(false)
      setDisplayedMessages((prev) => [...prev, message])
      setCurrentText("")

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }

    typeMessage()
  }, [currentMessageIndex, isChatStarted])

  useEffect(() => {
    if (containerRef) {
      containerRef.scrollTop = containerRef.scrollHeight
    }
  }, [containerRef])

  const setRef = (element: HTMLDivElement | null) => {
    if (element) {
      setContainerRef(element)
    }
  }

  if (!isChatStarted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Website Chat</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <Button onClick={() => setIsChatStarted(true)} className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Start Demo Chat
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Website Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={setRef} className="h-[300px] overflow-y-auto space-y-4 p-4">
          {displayedMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`flex ${messages[currentMessageIndex].role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  messages[currentMessageIndex].role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {currentText}
                <span className="inline-block w-2 h-4 ml-1 bg-current animate-blink"></span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// WhatsAppChatDemo Component
function WhatsAppChatDemo() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isChatStarted, setIsChatStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  type Message = {
    role: "user" | "ai"
    content: string
  }

  const messages: Message[] = [
    { role: "user", content: "Hello, I'd like to make a reservation for dinner tonight." },
    { role: "ai", content: "Good day! I'd be happy to help you with a reservation. How many people will be dining?" },
    { role: "user", content: "It's for 4 people." },
    { role: "ai", content: "Great! For what time would you like to make the reservation?" },
    { role: "user", content: "Around 7:30 PM if possible." },
    { role: "ai", content: "We have a table for 4 available at 7:30 PM. Would you like me to book that for you?" },
    { role: "user", content: "Yes, please. That would be perfect." },
    {
      role: "ai",
      content:
        "Excellent! I've booked a table for 4 at 7:30 PM under your name. Is there anything else you'd like to know about our menu or specials for tonight?",
    },
  ]

  useEffect(() => {
    if (!isChatStarted) return

    const typeMessage = async () => {
      const message = messages[currentMessageIndex]
      setIsTyping(true)

      for (let i = 0; i <= message.content.length; i++) {
        setCurrentText(message.content.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 30))
      }

      setIsTyping(false)
      setDisplayedMessages((prev) => [...prev, message])
      setCurrentText("")

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }

    typeMessage()
  }, [currentMessageIndex, isChatStarted])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [])

  if (!isChatStarted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>WhatsApp Chat</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-green-50">
          <Button
            onClick={() => setIsChatStarted(true)}
            className="flex items-center gap-2 bg-[#30C000] hover:bg-[#28A000] text-white"
          >
            <MessageSquare className="w-4 h-4" />
            Start Demo Chat
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>WhatsApp Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="h-[300px] overflow-y-auto space-y-4 p-4 bg-green-50">
          {displayedMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  msg.role === "user" ? "bg-green-500 text-white" : "bg-white text-black"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`flex ${messages[currentMessageIndex].role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  messages[currentMessageIndex].role === "user" ? "bg-green-500 text-white" : "bg-white text-black"
                }`}
              >
                {currentText}
                <span className="inline-block w-2 h-4 ml-1 bg-current animate-blink"></span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// FacebookChatDemo Component
function FacebookChatDemo() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isChatStarted, setIsChatStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  type Message = {
    role: "user" | "ai"
    content: string
  }

  const messages: Message[] = [
    { role: "user", content: "Hi, I saw your ad for summer clothing. Do you have any discounts running?" },
    {
      role: "ai",
      content:
        "Hello! Thanks for your interest. Yes, we're currently running a summer sale with 20% off all items. Is there anything specific you're looking for?",
    },
    { role: "user", content: "I'm interested in some new t-shirts and maybe a pair of shorts." },
    {
      role: "ai",
      content:
        "Great choice for summer! We have a variety of t-shirts in different styles and colors. For shorts, we have both casual and athletic options. Would you like me to send you some links to our best-selling items?",
    },
    { role: "user", content: "Yes, please. I prefer cotton t-shirts and casual shorts." },
    {
      role: "ai",
      content:
        "Perfect! I've selected a few items for you. Here are the links:\n1. Cotton Crew Neck T-Shirt Pack\n2. Casual Chino Shorts\n3. V-Neck Slub Cotton Tee\nAll these items are included in our 20% off sale. Let me know if you need any more information!",
    },
    { role: "user", content: "Thanks! The Chino shorts look great. What colors do they come in?" },
    {
      role: "ai",
      content:
        "The Chino shorts come in five colors: Khaki, Navy, Olive, Stone, and Black. All colors are currently in stock and part of the sale. Would you like to see how they look on our models?",
    },
  ]

  useEffect(() => {
    if (!isChatStarted) return

    const typeMessage = async () => {
      const message = messages[currentMessageIndex]
      setIsTyping(true)

      for (let i = 0; i <= message.content.length; i++) {
        setCurrentText(message.content.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 30))
      }

      setIsTyping(false)
      setDisplayedMessages((prev) => [...prev, message])
      setCurrentText("")

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }

    typeMessage()
  }, [currentMessageIndex, isChatStarted])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [])

  if (!isChatStarted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Facebook Chat</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center bg-blue-50">
          <Button
            onClick={() => setIsChatStarted(true)}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600"
          >
            <MessageSquare className="w-4 h-4" />
            Start Demo Chat
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Facebook Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="h-[300px] overflow-y-auto space-y-4 p-4 bg-blue-50">
          {displayedMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  msg.role === "user" ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`flex ${messages[currentMessageIndex].role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-2 max-w-[80%] ${
                  messages[currentMessageIndex].role === "user" ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {currentText}
                <span className="inline-block w-2 h-4 ml-1 bg-current animate-blink"></span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ProgressiveSkillUnlock Component
function ProgressiveSkillUnlock() {
  const [unlockedSkills, setUnlockedSkills] = useState(1)
  const [progress, setProgress] = useState(0)

  const skills = [
    "Lead Qualification",
    "Product Knowledge",
    "Objection Handling",
    "Personalized Pitches",
    "Cross-selling",
    "Upselling",
    "Deal Closing",
    "Follow-up Automation",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          if (unlockedSkills < skills.length) {
            setUnlockedSkills((prev) => prev + 1)
          }
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [unlockedSkills])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">AI Sales Skill Progression</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={skill} className="flex items-center space-x-4">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  index < unlockedSkills ? "bg-green-500 text-white" : "bg-gray-200 text-gray-400"
                }`}
              >
                {index < unlockedSkills ? "✓" : index + 1}
              </div>
              <span className={`text-lg ${index < unlockedSkills ? "text-black font-medium" : "text-gray-400"}`}>
                {skill}
              </span>
            </div>
          ))}
          <div className="pt-4">
            <Progress value={progress} className="w-full h-2" />
            <p className="text-sm text-center mt-2 text-gray-500">
              {unlockedSkills < skills.length ? `Learning: ${skills[unlockedSkills]}` : "All sales skills mastered!"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// GlobalActivityMap Component
function GlobalActivityMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const cities = [
    { name: "New York", x: 25, y: 40 },
    { name: "London", x: 47, y: 35 },
    { name: "Tokyo", x: 88, y: 42 },
    { name: "Sydney", x: 90, y: 75 },
    { name: "Rio de Janeiro", x: 35, y: 70 },
    { name: "Cape Town", x: 52, y: 78 },
    { name: "Moscow", x: 57, y: 30 },
    { name: "Dubai", x: 62, y: 48 },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawMap = () => {
      ctx.fillStyle = "#f3f4f6"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      cities.forEach((city) => {
        ctx.beginPath()
        ctx.arc(city.x * 5, city.y * 5, 3, 0, 2 * Math.PI)
        ctx.fillStyle = "#3b82f6"
        ctx.fill()
      })
    }

    const animateActivity = () => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)]
      ctx.beginPath()
      ctx.arc(randomCity.x * 5, randomCity.y * 5, 20, 0, 2 * Math.PI)
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)"
      ctx.fill()

      setTimeout(() => {
        drawMap()
        requestAnimationFrame(animateActivity)
      }, 2000)
    }

    drawMap()
    animateActivity()
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Live Global AI Interactions</CardTitle>
      </CardHeader>
      <CardContent>
        <canvas ref={canvasRef} width="500" height="300" className="w-full h-auto" />
      </CardContent>
    </Card>
  )
}

export default function ChatAgentPage() {
  const router = useRouter()

  const navigateToCallAgent = () => {
    window.scrollTo(0, 0)
    router.push("/call-agent")
  }

  const navigateToPptAgent = () => {
    window.scrollTo(0, 0)
    router.push("/ppt-agent")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link className="flex items-center space-x-2" href="#">
            <MessageCircle className="h-6 w-6" />
            <span className="font-bold">ChatAI</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Floating back arrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
          onClick={navigateToCallAgent}
        >
          <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
        </motion.div>

        {/* Floating forward arrow */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
          onClick={navigateToPptAgent}
        >
          <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
        </motion.div>

        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your Sales with AI Chat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost conversions and close deals faster with our AI-powered chat assistant. Engage prospects 24/7
                  across website chat, WhatsApp, and social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Powerful Chat Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Conversion Optimization</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  AI-driven insights to optimize your chat funnel and boost conversion rates.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Intelligent Lead Qualification</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Automatically qualify leads and prioritize high-value prospects through chat.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">24/7 Chat Engagement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Never miss a sales opportunity with round-the-clock AI-powered chat interactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              AI That Evolves With Your Chat Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ProgressiveSkillUnlock />
              <GlobalActivityMap />
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Experience SalesAI Chat in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <WebsiteChatDemo />
              <WhatsAppChatDemo />
              <FacebookChatDemo />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Integrate SalesAI Chat with your CRM and communication channels.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Train</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize the AI with your chat playbooks and product knowledge.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Chat</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Let SalesAI Chat engage prospects, qualify leads, and accelerate your sales cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Sales with AI Chat?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Join the AI chat revolution and start closing more deals with less effort.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Link
                  href="https://api.whatsapp.com/send?phone=18605404520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-11 px-8 w-full bg-[#30C000] hover:bg-[#28A000] text-white"
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-white-icon-Zv8ITWYZ9WERlyv8WKQ9C7DsQF3yE0.png"
                    alt="WhatsApp"
                    className="w-6 h-6 mr-2"
                  />
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

