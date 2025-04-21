import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import styles from "@/styles/projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Doctor's Appointment App",
      description: "A web application that allows users to book appointments with doctors. The app features a user-friendly interface for searching and selecting doctors, viewing available time slots, and managing appointments. It streamlines the process of scheduling medical consultations, making healthcare more accessible.",
      image: "/doctors.png?height=200&width=400",
      technologies: ["Next.js", "PostgreSQL", "Express.js", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/Sanju1801/MedCare-FullStack",
    },
    {
      title: "Dictionay app",
      description: "A user-friendly web application that provides quick access to word definitions, synonyms, antonyms, and pronunciations. Key features include voice pronunciation. This app enhances vocabulary and supports effective communication, making it a valuable resource for students and professionals alike.",
      image: "/dictionary.png?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://sanju1801.github.io/Dictionary-app/",
      githubLink: "https://github.com/Sanju1801/Dictionary-app",
    },
    {
      title: "Calculator",
      description: "A multifunctional digital tool that performs standard arithmetic calculations and includes features for BMI calculation and currency conversion. The app utilizes an API for real-time currency exchange rates, making it easy to convert between currencies. With its user-friendly interface, the app is perfect for anyone looking to simplify both health and financial calculations.",
      image: "/calculator.png?height=200&width=400",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://sanju1801.github.io/Calculator/",
      githubLink: "https://github.com/Sanju1801/Calculator",
    },
    
  ]

  return (
    <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.liveLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} className={styles.link} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}
