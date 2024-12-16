import { Skill, Experience } from '@/types'

export const skills: Skill[] = [
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
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
    company: 'CORPORATE ACTION COMPANY',
    role: 'Senior React Developer (Contract)',
    period: 'November 2021 - Present',
    projects: [
      {
        name: 'Deutsche Bank - Financial Messaging System',
        details: [
          'Engineered SWIFT message processing system (MT56/MT57, MT57/MT58)',
          'Developed SSI management for DB accounts, AGL, Fixed Income',
          'Built white-label reporting application',
          'Tech stack: React, Next.js, TypeScript, Tailwind CSS'
        ]
      },
      {
        name: 'HSBC Risk Management Application',
        details: [
          'Architected greenfield risk management platform',
          'Implemented CI/CD pipeline using Jenkins',
          'Led UI/UX development for risk assessment interfaces'
        ]
      }
    ]
  }
]