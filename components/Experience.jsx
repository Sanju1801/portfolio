import styles from "@/styles/experience.module.css"
import data from "@/app/data.json";

export default function Experience() {

  return (
    <section id="experience" className={styles.section}>
      <h2>Work Experience</h2>
      <div className={styles.timeline}>
        {data.experiences.map((exp, index) => (
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
