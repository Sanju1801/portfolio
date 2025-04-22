import { Download } from "lucide-react"
import styles from '@/styles/download-button.module.css';

export default function DownloadButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className={styles.button}
    >
      <Download size={16} />
      <span>Resume</span>
    </a>
  );
}
