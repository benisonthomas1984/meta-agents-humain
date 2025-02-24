'use client'

import dynamic from "next/dynamic"
import Header from "../components/Header"

const ResearchAgentPage = dynamic(() => import("./research-agent-page"), { ssr: false })

export default function ResearchAgent() {
  return (
    <>
      <Header />
      <ResearchAgentPage />
    </>
  )
}

