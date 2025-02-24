"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AgentCardProps {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  onToggle: (id: string) => void
  isSelected: boolean
}

export function AgentCard({ id, name, description, icon, onToggle, isSelected }: AgentCardProps) {
  return (
    <motion.div
      className={`h-full p-6 rounded-xl shadow-lg ${
        isSelected ? "bg-blue-100 border-2 border-blue-500" : "bg-white"
      } transition-all duration-300 hover:shadow-xl flex flex-col`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-blue-600 text-3xl">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <button
        onClick={() => onToggle(id)}
        className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 ${
          isSelected ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isSelected ? (
          <span className="font-semibold">Remove Agent</span>
        ) : (
          <span className="font-semibold">Add Agent</span>
        )}
      </button>
    </motion.div>
  )
}

