"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactForm({
  selectedAgents,
}: {
  selectedAgents: string[]
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp">("whatsapp")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const business = formData.get("business") as string
    const region = formData.get("region") as string
    const problem = formData.get("problem") as string

    const message = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Business: ${business}
Region: ${region}
Problem: ${problem}

Selected Agents:
${selectedAgents.join(", ")}
    `.trim()

    if (contactMethod === "whatsapp") {
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://api.whatsapp.com/send?phone=18605404520&text=${encodedMessage}`, "_blank")
    } else {
      const subject = encodeURIComponent("AI Agents Inquiry")
      const body = encodeURIComponent(message)
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ben@aiagentx.ai&su=${subject}&body=${body}`
      window.open(gmailComposeUrl, "_blank")
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-gray-900">Contact us via</Label>
          <RadioGroup
            defaultValue="whatsapp"
            className="flex gap-4"
            onValueChange={(value) => setContactMethod(value as "email" | "whatsapp")}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="whatsapp" id="whatsapp" />
              <Label htmlFor="whatsapp" className="text-gray-700">
                WhatsApp
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email" />
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="name" className="text-gray-700">
            Name
          </Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700">
            Email
          </Label>
          <Input id="email" name="email" type="email" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-700">
            Phone Number
          </Label>
          <Input id="phone" name="phone" type="tel" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="business" className="text-gray-700">
            Business Name
          </Label>
          <Input id="business" name="business" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="region" className="text-gray-700">
            Region
          </Label>
          <Input id="region" name="region" required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="problem" className="text-gray-700">
            Describe Your Business Needs
          </Label>
          <Textarea id="problem" name="problem" required className="mt-1" rows={4} />
        </div>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-300"
      >
        {isSubmitting ? "Processing..." : `Send via ${contactMethod === "whatsapp" ? "WhatsApp" : "Email"}`}
      </Button>
    </form>
  )
}

