import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import styles from "@/styles/projects.module.css";
import data from "@/app/data.json";

export default function Projects() {

  return (
    <section id="projects" className={styles.section}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {data.projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {project.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className={styles.projectImage}
                />
              </div>
            )}
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.company && <h4 className={styles.projectCompany}>{project.company}</h4>}
              {project.period && <p className={styles.projectPeriod}>{project.period}</p>}
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.liveLink && (
                  <a href={project.liveLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
