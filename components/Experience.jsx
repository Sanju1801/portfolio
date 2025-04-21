import styles from "@/styles/experience.module.css"

export default function Experience() {
  // Sample work experience data
  const experiences = [
    {
      title: "JS Full Stack Developer Intern",
      company: "To The New Private Limited",
      period: "2025 - Present",
      description:
        "Worked on various projects using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["HTML", "CSS", "JavaScript",  "React", "Next.js", "PostgreSQL", "NodeJs", "Express.js"],
    }
  ]

  return (
    <section id="experience" className={styles.section}>
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.title}>{exp.title}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.period}>{exp.period}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.technologies}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
