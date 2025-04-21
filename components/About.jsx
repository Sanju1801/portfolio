import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
        <h2>About Me</h2>
        <div className={styles.content}>    
          <p>
            I am a passionate Full Stack Developer building web applications using
            modern technologies. My expertise includes front-end development with React and Next.js, back-end
            development with Node.js, and database management with MySQL and PostgreSQL.
          </p>
          <p>
            I enjoy solving complex problems and creating intuitive, user-friendly interfaces. My goal is to build
            applications that not only meet business requirements but also provide an exceptional user experience.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies. I'm
            always eager to learn and grow as a developer.
          </p>
        </div>
    </section>
  )
}
