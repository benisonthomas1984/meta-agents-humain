import dynamic from "next/dynamic"
import Header from "../components/Header"

const LeadGenerationPage = dynamic(() => import("./lead-gen-page"), { ssr: false })

export default function LeadGen() {
  return (
    <>
      <Header />
      <LeadGenerationPage />
    </>
  )
}

