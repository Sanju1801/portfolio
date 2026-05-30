import styles from '@/styles/education.module.css'
import data from '@/app/data.json';

export default function Education() {

  return (
    <section id="education" className={styles.section}>
      <h2>Education</h2>
      <div className={styles.educationList}>
        {data.education.map((edu, index) => (
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
