export interface Skill {
    name: string
    category: 'frontend' | 'backend' | 'tools'
  }
  
  export interface Project {
    name: string
    details: string[]
  }
  
  export interface Experience {
    company: string
    role: string
    period: string
    projects: Project[]
  }