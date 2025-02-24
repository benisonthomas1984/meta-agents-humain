"use client"

import { useState } from "react"
import CoverPage from "./cover-page"
import IntroPage from "./intro-page"

const Presentation = () => {
  const [currentPage, setCurrentPage] = useState("cover")

  const navigateToIntro = () => {
    setCurrentPage("intro")
  }

  const navigateToCover = () => {
    setCurrentPage("cover")
  }

  return (
    <div>
      {currentPage === "cover" && <CoverPage onLearnMore={navigateToIntro} />}
      {currentPage === "intro" && <IntroPage onBack={navigateToCover} />}
    </div>
  )
}

export default Presentation

