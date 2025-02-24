'use client'

import dynamic from "next/dynamic"
import Header from "../components/Header"

const WebListenerPage = dynamic(() => import("./web-listener-page"), { ssr: false })

export default function WebListener() {
  return (
    <>
      <Header />
      <WebListenerPage />
    </>
  )
}

