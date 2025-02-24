"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Sparkles,
  Zap,
  Rocket,
  BarChart,
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  TrendingUp,
  Users,
  Shuffle,
  FileText,
  Send,
  MessageSquare,
  ArrowLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const agencyTypes = [
  { id: "retail", name: "Retail Product" },
  { id: "b2b", name: "B2B Product" },
  { id: "saas", name: "SaaS Startup" },
  { id: "tech", name: "Tech Startup" },
]

const trendingContent = {
  retail: {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shoes-xJDc1oRYSIGVmKwRsxdYosjwYL1rP4.webp",
    content: "Trending: Premium sportswear and athletic footwear marketing",
  },
  b2b: {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B2B%20ima.jpg-FyDNb5hqTHoGxWibDYzBfVAHvh6oPA.jpeg",
    content: "Trending: Artisanal food products and wholesale distribution",
  },
  saas: {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saas%20ima.jpg-3aGxKgjrTyJ1S7rSQdd07ya15zioTU.jpeg",
    content: "Trending: Remote work and virtual meeting solutions",
  },
  tech: {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tech%20ima.jpg-lEy5QHNBUbjaQR5Ibo0nfqz3U2NNY3.jpeg",
    content: "Trending: AI and machine learning innovations",
  },
}

const EngagementCounter = ({ initialValue, increment }) => {
  const [count, setCount] = useState(initialValue)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + increment)
    }, 1000)

    return () => clearInterval(interval)
  }, [increment])

  return <span>{count.toLocaleString()}</span>
}

const steps = [
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Identifies trending content across Facebook, Instagram, and TikTok.",
  },
  {
    icon: Users,
    title: "Competitor Insights",
    description: "Analyzes your competitors' strategies and successful content.",
  },
  {
    icon: Shuffle,
    title: "Content Synthesis",
    description: "Creates a common factor between trends and competitor successes.",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description: "Generates posts based on the synthesized insights.",
  },
  {
    icon: Send,
    title: "Auto-Posting",
    description: "Automatically posts content to your social media networks.",
  },
  {
    icon: MessageSquare,
    title: "Audience Engagement",
    description: "Communicates with your audience by responding to comments.",
  },
]

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function MarketingAgentPage() {
  const [selectedType, setSelectedType] = useState("retail")
  const router = useRouter()

  const navigateToOrderPage = () => {
    window.scrollTo(0, 0)
    router.push("/order")
  }

  const navigateToBlogAgent = () => {
    window.scrollTo(0, 0)
    router.push("/blog-agent")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      {/* Floating back arrow */}
      <div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToBlogAgent}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </div>

      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToOrderPage}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Section - Sales Pitch */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">AI-Powered</span>
              <span className="block text-indigo-600">Marketing Agent</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Revolutionize your marketing strategy with our AI agent. Analyze trends, outperform competitors, and
              create engaging content effortlessly.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-start">
              <div className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Agency Type Selection */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Select Your Agency Type</h2>
            <div className="grid grid-cols-2 gap-4">
              {agencyTypes.map((type) => (
                <Button
                  key={type.id}
                  className={`p-4 rounded-md transition-all duration-200 ${
                    selectedType === type.id
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.name}
                </Button>
              ))}
            </div>

            {/* Visual Representation */}
            {selectedType && (
              <div className="mt-8 space-y-4">
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <Image
                      src={trendingContent[selectedType].image || "/placeholder.svg"}
                      alt={`Trending content for ${selectedType}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm">{trendingContent[selectedType].content}</p>
                  </div>
                </div>
                {/* Instagram-style Engagement Counter */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6 text-red-500" />
                      <EngagementCounter initialValue={1000} increment={5} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6 text-blue-500" />
                      <EngagementCounter initialValue={50} increment={1} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Share className="w-6 h-6 text-green-500" />
                      <EngagementCounter initialValue={20} increment={1} />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bookmark className="w-6 h-6 text-yellow-500" />
                      <EngagementCounter initialValue={5} increment={1} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">How Our AI Marketing Agent Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <step.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* USPs Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our AI Marketing Agent?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Sparkles className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trend Identification</h3>
              <p className="text-gray-600">Stay ahead of the curve with AI-powered trend analysis</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitor Analysis</h3>
              <p className="text-gray-600">Gain insights from your competitors' best-performing content</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <Rocket className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Content Creation</h3>
              <p className="text-gray-600">Generate engaging images and videos without a marketing team</p>
            </div>
          </div>
        </div>

        {/* Dopamine Effect */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Thrill of Effortless Marketing</h2>
          <div className="inline-block">
            <BarChart className="w-16 h-16 text-indigo-600 animate-pulse" />
          </div>
          <p className="mt-4 text-xl text-gray-700">
            Watch your engagement soar as our AI agent takes your marketing to new heights!
          </p>
        </div>
      </section>
    </main>
  )
}

