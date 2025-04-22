import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Portfolio",
  description: "A showcase of my professional work, skills, and experience",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
