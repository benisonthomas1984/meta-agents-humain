"use client"

import { motion } from "framer-motion"

const testimonials = [
  { type: "embed", src: "https://videos.cdn.spotlightr.com/watch/MTcyMDE4Nw==?fallback=true" },
  { type: "embed", src: "https://videos.cdn.spotlightr.com/watch/MTcyMDE4Ng==?fallback=true" },
  { type: "embed", src: "https://videos.cdn.spotlightr.com/watch/MTcyMDE4OA==?fallback=true" },
]

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
                <iframe
                  allow="autoplay"
                  className="spotlightr"
                  allowtransparency="true"
                  style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                  allowFullScreen={true}
                  src={testimonial.src}
                  frameBorder="0"
                  scrolling="no"
                  name="videoPlayer"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

