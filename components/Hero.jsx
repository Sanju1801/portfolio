import Image from "next/image"
import styles from "@/styles/hero.module.css"

export default function Hero() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sanju Kumari</h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <p className={styles.description}>Building beautiful, functional, and user-friendly web applications</p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/photo.jpeg?height=200&width=300"
          alt="Profile"
          width={300}
          height={300}
          className={styles.image}
          priority
        />
      </div>
    </div>
  )
}
