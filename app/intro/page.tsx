import dynamic from "next/dynamic"
import Header from "../components/Header"

const IntroPage = dynamic(() => import("./intro-page"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export const dynamicParams = true

export async function generateStaticParams() {
  // Generate a limited number of static pages at build time
  return [{ slug: "default" }]
}

export default function Intro({ params }) {
  return (
    <>
      <Header />
      <IntroPage params={params} />
    </>
  )
}

