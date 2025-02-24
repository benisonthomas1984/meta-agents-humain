import dynamic from "next/dynamic"

const CoverPage = dynamic(() => import("./cover-page"), { ssr: false })

export default function Home() {
  return <CoverPage />
}

