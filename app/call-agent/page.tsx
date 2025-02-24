import dynamic from "next/dynamic"
import Header from "../components/Header"

const CallAgentPage = dynamic(() => import("./call-agent-page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export const dynamicParams = true

export async function generateStaticParams() {
  // Generate a limited number of static pages at build time
  return [{ slug: "default" }]
}

export default function CallAgent({ params }) {
  return (
    <>
      <Header />
      <CallAgentPage params={params} />
    </>
  )
}

