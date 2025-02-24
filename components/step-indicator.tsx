"use client"

import { motion } from "framer-motion"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex justify-center items-center space-x-4 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <motion.div
          key={i}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            i < currentStep ? "bg-blue-500" : "bg-gray-300"
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          {i < currentStep ? (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <span className="text-white font-medium">{i + 1}</span>
          )}
        </motion.div>
      ))}
    </div>
  )
}

