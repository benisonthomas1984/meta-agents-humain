"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
  Clock,
  Rocket,
  Ban,
  CheckCircle2,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  DollarSign,
  Globe,
  Package,
  Briefcase,
  ArrowLeft,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function PptAgentPage() {
  const router = useRouter()

  const navigateToChatAgent = () => {
    window.scrollTo(0, 0)
    router.push("/chat-agent")
  }

  const navigateToBlogAgent = () => {
    window.scrollTo(0, 0)
    router.push("/blog-agent")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Floating back arrow */}
      <div
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToChatAgent}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </div>

      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <USPSection />
        <FOMOSection />
      </main>
      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToBlogAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>
    </div>
  )
}

function HeroSection() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [template, setTemplate] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const handleGenerate = () => {
    setShowPreview(true)
  }

  return (
    <section className="py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Create Professional Presentations in Minutes
          </h1>
          <p className="text-lg text-gray-600 max-w-[600px]">
            Our AI-powered presentation creator transforms your ideas into stunning, customer-centric presentations.
            Save time and impress your audience with just a few clicks.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Inc." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="template">Presentation Type</Label>
            <Select value={template} onValueChange={setTemplate}>
              <SelectTrigger id="template">
                <SelectValue placeholder="Select a template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qbr">Quarterly Business Review</SelectItem>
                <SelectItem value="investor">Investor Pitch Deck</SelectItem>
                <SelectItem value="product">Product Presentation</SelectItem>
                <SelectItem value="service">Service Presentation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full" onClick={handleGenerate}>
            Generate Presentation
          </Button>
        </div>
      </div>
      {showPreview && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Your AI-Generated Presentation</h2>
          <PresentationPreview name={name} company={company} template={template} />
        </div>
      )}
    </section>
  )
}

function USPSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Our AI Presentation Creator?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Join over 2,000 top-performing sales professionals who are revolutionizing their client onboarding process.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-8 h-8 text-red-500" />
              <h3 className="text-xl font-semibold">Without AI Presentation Creator</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-600">3-4 days spent creating custom presentations, losing valuable time</p>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-600">Potential clients lose interest due to slow response times</p>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-600">Miss out on hot sales opportunities while preparing materials</p>
              </li>
              <li className="flex items-start gap-3">
                <Ban className="w-5 h-5 text-red-500 mt-1" />
                <p className="text-gray-600">Inconsistent presentation quality across team members</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-8 h-8 text-[#30C000]" />
              <h3 className="text-xl font-semibold">With AI Presentation Creator</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#30C000] mt-1" />
                <p className="text-gray-600">Generate professional presentations in minutes, not days</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#30C000] mt-1" />
                <p className="text-gray-600">Strike while the iron is hot - respond to client requests instantly</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#30C000] mt-1" />
                <p className="text-gray-600">Higher conversion rates with quick, professional follow-ups</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#30C000] mt-1" />
                <p className="text-gray-600">Consistent, brand-aligned presentations every time</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-center mb-4">Time is Money in Sales</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex-1">
              <p className="text-4xl font-bold text-red-500 mb-2">72 Hours</p>
              <p className="text-gray-600">Traditional Presentation Creation</p>
            </div>
            <div className="text-2xl font-bold text-gray-400">vs</div>
            <div className="flex-1">
              <p className="text-4xl font-bold text-[#30C000] mb-2">5 Minutes</p>
              <p className="text-gray-600">AI-Powered Creation</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Unlock Your Sales Potential</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-purple-500" />
                <h4 className="text-xl font-semibold">Success Momentum</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Our users report an average 40% increase in their sales pipeline within the first month. Every
                presentation you create builds your momentum towards success.
              </p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold">
                <Zap className="w-5 h-5" />
                <span>Start your success streak today!</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-pink-500" />
                <h4 className="text-xl font-semibold">Join the Elite</h4>
              </div>
              <p className="text-gray-600 mb-4">
                2,000+ top sales professionals are already leveraging AI to outperform their peers. Every day you wait
                is a day you're falling behind the competition.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold">
                <Zap className="w-5 h-5" />
                <span>Don't let others get ahead!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FOMOSection() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Don't Miss Out on the Future of Presentations!</h2>
        <p className="text-xl mb-8">
          Join thousands of professionals who are already saving time and impressing clients with AI-powered
          presentations.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=18605404520"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 justify-center px-8 py-3 text-lg font-semibold rounded-md bg-[#30C000] hover:bg-[#28A000] text-white transition-colors"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-white-icon-crwF7tXqsE7qGE9tj28IHz1AX0MIcy.png"
            alt="WhatsApp"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          Contact Us
        </Link>
      </div>
    </section>
  )
}

interface PresentationPreviewProps {
  name: string
  company: string
  template: string
}

function PresentationPreview({ name, company, template }: PresentationPreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case "qbr":
        return (
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-blue-600 mb-2">Q2 2025 Business Review</h2>
                <h3 className="text-xl text-gray-600 mb-4">{company}</h3>
              </div>
              <img src="/placeholder.svg?height=60&width=120" alt="Company Logo" className="h-12" />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                <h4 className="font-semibold mb-1">Revenue</h4>
                <p className="text-2xl font-bold text-blue-600">$24.5M</p>
                <p className="text-sm text-green-600">↑ 15% YoY</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-green-500" />
                <h4 className="font-semibold mb-1">New Customers</h4>
                <p className="text-2xl font-bold text-green-600">1,234</p>
                <p className="text-sm text-green-600">↑ 8% QoQ</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                <h4 className="font-semibold mb-1">Market Share</h4>
                <p className="text-2xl font-bold text-purple-600">18.5%</p>
                <p className="text-sm text-green-600">↑ 2.5% YoY</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">Prepared by: {name} | Confidential</p>
          </div>
        )
      case "investor":
        return (
          <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold mb-2">{company}</h2>
                <h3 className="text-xl mb-4">Investor Pitch Deck</h3>
              </div>
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Company Logo"
                className="h-12 bg-white rounded p-1"
              />
            </div>
            <div className="mt-12 flex justify-between items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6" />
                  <span className="text-lg">Revolutionizing [Industry]</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6" />
                  <span className="text-lg">$10M ARR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6" />
                  <span className="text-lg">1M+ Active Users</span>
                </div>
              </div>
              <div className="w-1/2 h-48 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-semibold">Product Demo</span>
              </div>
            </div>
            <p className="mt-8 text-sm opacity-80">Presented by: {name} | Confidential - For Investor Use Only</p>
          </div>
        )
      case "product":
        return (
          <div className="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-5xl font-bold mb-2">ProductX</h2>
                <h3 className="text-2xl mb-4">The Future of [Category]</h3>
              </div>
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Product Logo"
                className="h-12 bg-white rounded p-1"
              />
            </div>
            <div className="mt-8 flex space-x-8">
              <div className="w-1/2 bg-white bg-opacity-20 rounded-lg p-6">
                <Package className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Revolutionary AI Integration</li>
                  <li>Seamless Cloud Sync</li>
                  <li>Advanced Analytics Dashboard</li>
                  <li>24/7 Customer Support</li>
                </ul>
              </div>
              <div className="w-1/2 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-semibold">Product Image</span>
              </div>
            </div>
            <p className="mt-8 text-sm opacity-80">
              {company} | Presented by: {name}
            </p>
          </div>
        )
      case "service":
        return (
          <div className="bg-gradient-to-br from-teal-400 to-blue-500 text-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-4xl font-bold mb-2">{company}</h2>
                <h3 className="text-2xl mb-4">Premium [Service Type] Services</h3>
              </div>
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Company Logo"
                className="h-12 bg-white rounded p-1"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Briefcase className="w-10 h-10 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Our Expertise</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Industry-leading professionals</li>
                  <li>Cutting-edge methodologies</li>
                  <li>Tailored solutions for your business</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Users className="w-10 h-10 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Client Success</h4>
                <p className="mb-2">We've helped 500+ businesses achieve:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>30% increase in efficiency</li>
                  <li>25% cost reduction</li>
                  <li>95% client satisfaction rate</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-sm opacity-80">Elevating Your Business to New Heights | Presented by: {name}</p>
          </div>
        )
      default:
        return (
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Please select a presentation type</h2>
            <p className="text-gray-600">
              Choose from Quarterly Business Review, Investor Pitch Deck, Product Presentation, or Service Presentation
            </p>
          </div>
        )
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="aspect-video relative">{renderTemplate()}</div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          First slide of {template ? template.split("-").join(" ") : "your presentation"}
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Edit Presentation
        </button>
      </div>
    </div>
  )
}

