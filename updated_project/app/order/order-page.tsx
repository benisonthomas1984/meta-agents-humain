"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hero } from "@/components/hero"
import { AgentGrid } from "@/components/agent-grid"
import { OrderSummary } from "@/components/order-summary"
import { ContactForm } from "@/components/contact-form"
import { StepIndicator } from "@/components/step-indicator"
import { Testimonials } from "@/components/testimonials"

export default function OrderPage() {
  const [selectedAgents, setSelectedAgents] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(1)

  const handleAgentToggle = (agentId: string) => {
    setSelectedAgents((prev) => (prev.includes(agentId) ? prev.filter((id) => id !== agentId) : [...prev, agentId]))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <StepIndicator currentStep={currentStep} totalSteps={3} />
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Select Your AI Agents</h2>
              <AgentGrid selectedAgents={selectedAgents} onToggle={handleAgentToggle} />
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
                >
                  Next: Review Order
                </button>
              </div>
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Review Your Order</h2>
              <OrderSummary selectedAgents={selectedAgents} />
              <div className="mt-8 flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
                >
                  Back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
                >
                  Next: Your Details
                </button>
              </div>
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Details</h2>
              <ContactForm selectedAgents={selectedAgents} />
              <div className="mt-8 flex justify-start">
                <button
                  onClick={handlePrevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Testimonials />
      </main>
    </div>
  )
}

