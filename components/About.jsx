import styles from "@/styles/about.module.css";
import data from "@/app/data.json";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <h2>About Me</h2>
      <div className={styles.content}>
        {data.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
