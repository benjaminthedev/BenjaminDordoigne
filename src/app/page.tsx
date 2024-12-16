import { Header } from '@/components/Header'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
// import { Education } from '@/components/Education'
// import { Contact } from '@/components/Contact'
// import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* <ThemeToggle /> */}
      <div className="max-w-5xl mx-auto p-4 sm:p-8">
        <Header />
        <Skills />
        <Experience />
        {/* <Education />
        <Contact /> */}
      </div>
    </main>
  )
}