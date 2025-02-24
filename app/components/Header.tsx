import Image from "next/image"
import Link from "next/link"
import { Pacifico } from "next/font/google"
import { Button } from "@/components/ui/button"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md" style={{ backgroundColor: "#030609" }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White-GIu1weElBb17VodPvgBaZBqIKf6zgt.webp"
                alt="MetaHumain Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-4">
              <h1
                style={{
                  color: "#FCF9F6",
                  fontSize: "calc(1.25rem * 1.3)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
                className="font-bold tracking-tight"
              >
                MetaHumain
              </h1>
              <p
                className={`${pacifico.className} mt-1 sm:mt-0`}
                style={{
                  color: "#FCF9F6",
                  fontSize: "calc(0.875rem * 1.15)",
                  opacity: 0.9,
                }}
              >
                See it, Say it, Seize it
              </p>
            </div>
          </Link>
          <Button
            className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900"
            onClick={() => window.open("https://metahumain.vercel.app/", "_blank")}
          >
            About Us
          </Button>
        </div>
      </div>
    </header>
  )
}

