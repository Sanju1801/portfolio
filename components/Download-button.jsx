"use client"

import { useState } from "react"
import { Download } from "lucide-react"
// import { generatePDF } from "@/lib/pdf-generator"
import styles from '@/styles/download-button.module.css';

export default function DownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    // setIsGenerating(true)
    // try {
    //   await generatePDF()
    // } catch (error) {
    //   console.error("Error generating PDF:", error)
    // } finally {
    //   setIsGenerating(false)
    // }
  }

  return (
    <button className={styles.button} onClick={handleDownload} disabled={isGenerating}>
      {isGenerating ? (
        "Generating..."
      ) : (
        <>
          <Download size={16} />
          <span>Resume</span>
        </>
      )}
    </button>
  )
}
