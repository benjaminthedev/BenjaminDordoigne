import { Skill, Experience } from '@/app/types/index'

export const skills: Skill[] = [
  { name: 'Reactjs', category: 'frontend' },
  { name: 'Nextjs', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Jenkins', category: 'tools' },
  { name: 'Webpack', category: 'tools' },
  { name: 'NPM/Yarn', category: 'tools' }
]

export const experiences: Experience[] = [
  {
    company: 'New Company',
    role: 'Role',
    period: 'Date',
    projects: [
      {
        name: 'name',
        details: [
          'info',
          'info',
          'info',
          'info',
        ]
      }
    ]
  }
]