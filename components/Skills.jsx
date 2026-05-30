import styles from "@/styles/skill.module.css"
import data from "@/app/data.json";

export default function Skills() {

  return (
    <section id="skills" className={styles.section}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        {data.skills.map((category, index) => (
          <div key={index} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.category}</h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, i) => (
                <div key={i} className={styles.skillItem}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
