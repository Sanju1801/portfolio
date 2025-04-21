import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import styles from '@/styles/contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoValue}>sanju.mca23.du@gmail.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <div>
                <h3 className={styles.infoTitle}>Phone</h3>
                <p className={styles.infoValue}>+91 9518845823</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <div>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoValue}>Sector 44, Noida, Uttar Pradesh</p>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/sanju-kumari18" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Sanju1801" className={styles.socialLink}>
                <Github size={20} />
              </a>
            </div>
          </div>
    </section>
  )
}
