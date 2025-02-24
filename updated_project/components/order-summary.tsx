"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle } from "lucide-react"

const agents = {
  lead: "Lead Generation",
  web: "Web Listening",
  research: "Research",
  email: "Email",
  call: "Call",
  chat: "Chat",
  presentation: "Presentation",
  blog: "Blog",
  marketing: "Marketing",
  direct: "Direct",
}

export function OrderSummary({ selectedAgents }: { selectedAgents: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
      <AnimatePresence>
        {selectedAgents.length > 0 ? (
          <ul className="space-y-2 mb-4">
            {selectedAgents.map((agentId) => (
              <motion.li
                key={agentId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex justify-between items-center text-gray-700"
              >
                <span>{agents[agentId as keyof typeof agents]}</span>
                <CheckCircle className="text-green-500" size={20} />
              </motion.li>
            ))}
          </ul>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 mb-4">
            No agents selected yet.
          </motion.p>
        )}
      </AnimatePresence>
      <div className="text-xl font-semibold text-gray-800 flex justify-between items-center">
        <span>Total Agents:</span>
        <motion.span
          key={selectedAgents.length}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          {selectedAgents.length}
        </motion.span>
      </div>
    </div>
  )
}

