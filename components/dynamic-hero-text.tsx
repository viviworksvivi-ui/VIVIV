"use client"

import { useEffect, useState } from "react"

const rotatingWords = [
  "booste votre croissance",
  "transforme votre vision",
  "propulse votre business",
  "accélère votre succès",
  "développe votre audience",
  "maximise vos résultats"
]

const rotatingWordsEn = [
  "boosts your growth",
  "transforms your vision",
  "propels your business",
  "accelerates your success",
  "develops your audience",
  "maximizes your results"
]

interface DynamicHeroTextProps {
  language?: "fr" | "en"
}

export function DynamicHeroText({ language = "fr" }: DynamicHeroTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const words = language === "fr" ? rotatingWords : rotatingWordsEn

  useEffect(() => {
    const currentWord = words[currentIndex]
    
    if (isTyping) {
      if (displayText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        setIsTyping(true)
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [displayText, isTyping, currentIndex, words])

  return (
    <div className="relative w-full" style={{ contain: 'layout' }}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
        <span className="block mb-2 sm:mb-3">Viviworks :</span>
        <span className="block">
          <span className="block sm:inline-block mb-2 sm:mb-0">
            {language === "fr" ? "Une agence digitale qui " : "A digital agency that "}
          </span>
          <span className="relative block sm:inline-block align-bottom min-h-[1.2em] sm:min-w-[200px] md:min-w-[300px] lg:min-w-[450px]">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_10px_rgba(96,165,250,0.8)]">
              {displayText}
              <span className="inline-block w-0.5 h-[0.9em] bg-cyan-400 animate-pulse ml-1 align-middle shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            </span>
          </span>
        </span>
      </h1>
    </div>
  )
}

