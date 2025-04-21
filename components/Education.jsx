import styles from '@/styles/education.module.css'
export default function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "University of Delhi",
      period: "2023 - 2025",
      description: "Specialized in Software Engineering and Web Technologies.",
    },
    {
      degree: "Bachelor of Physical Science with Computer Science",
      institution: "Miranda House, University of Delhi",
      period: "2020 - 2023",
      description:
        "Focused on programming fundamentals, data structures, and algorithms.",
    },
  ]

  return (
    <section id="education" className={styles.section}>
        <h2>Education</h2>
        <div className={styles.educationList}>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <h4 className={styles.institution}>{edu.institution}</h4>
              <p className={styles.period}>{edu.period}</p>
              <p className={styles.description}>{edu.description}</p>
            </div>
          ))}
        </div>
    </section>
  )
}
