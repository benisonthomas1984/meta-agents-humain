"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

const CoverPage: React.FC = () => {
  const router = useRouter()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        let angle = 0
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          drawFlowerOfLife(ctx, canvas.width / 2, canvas.height / 2, 300, angle)
          angle += 0.0005
          requestAnimationFrame(animate)
        }
        animate()
      }
    }
  }, [])

  const drawFlowerOfLife = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(rotation)
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
      ctx.moveTo(0, 0)
      ctx.lineTo(size, 0)
      ctx.arc(size / 2, 0, size / 2, 0, Math.PI * 2)
      ctx.rotate(Math.PI / 3)
    }
    ctx.strokeStyle = "rgba(255, 165, 0, 0.1)"
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.restore()
  }

  const navigateToIntro = () => {
    window.scrollTo(0, 0)
    router.push("/intro")
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 flex flex-col items-center"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White-zFC8q2Ci3M6U693PT7GcNtHsXicfpW.webp"
            alt="Geometric flower of life logo"
            width={120}
            height={120}
            className="w-24 h-24 sm:w-32 sm:h-32 mb-4"
          />
          <h2 className="text-2xl sm:text-3xl font-light tracking-wider text-yellow-300">
            Meta <span className="font-semibold">HumAIn</span>
          </h2>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 max-w-4xl leading-tight text-white"
        >
          Revolutionize Your Sales Team with AI-Powered Automation
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 max-w-2xl text-yellow-100"
        >
          Join 369+ Business Owners Who've Transformed Their Sales Process
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 w-full max-w-4xl"
        >
          <Statistic label="Sales Tasks Automated" value="95%" />
          <Statistic label="Revenue Growth" value="3X" />
          <Statistic label="Cost Reduction" value="69%" />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-center mb-2 sm:mb-4 text-yellow-100"
        >
          Perfect for businesses with 10-50 employees
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 text-yellow-100"
        >
          Reduce hiring costs by 60% while tripling sales output
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="relative group"
          onClick={navigateToIntro}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 rounded-full leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <span className="pr-6 text-sm sm:text-base text-yellow-300">Explore AI-Powered Solutions</span>
            </span>
            <span className="pl-6 text-orange-400 group-hover:text-yellow-300 transition duration-200 text-sm sm:text-base">
              Learn More &rarr;
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

const Statistic: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-50 p-4 sm:p-6 rounded-lg text-center backdrop-blur-sm border border-orange-500/30"
  >
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
      {value}
    </div>
    <div className="text-xs sm:text-sm text-yellow-100">{label}</div>
  </motion.div>
)

export default CoverPage

