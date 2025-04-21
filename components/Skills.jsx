import styles from "@/styles/skill.module.css" 

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "C++", "Java"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST API"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Express"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ]

  return (
    <section id="skills" className={styles.section}>
        <h2>Skills</h2>
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
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
