import { experiences } from '@/app/data/cv-data'

export function Experience() {
  return (
    <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Experience
      </h2>
      {experiences.map((exp) => (
        <div key={exp.company} className="mb-8 last:mb-0">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {exp.company}
            </h3>
            <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
          </div>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
            {exp.role}
          </p>
          
          {exp.projects.map((project) => (
            <div key={project.name} className="mb-6 last:mb-0">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
                {project.name}
              </h4>
              <ul className="space-y-2">
                {project.details.map((detail, index) => (
                  <li 
                    key={index}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}