import { skills } from '@/app/data/cv-data'

export function Skills() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

  return (
    <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 transition-colors">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skillsByCategory).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3 capitalize">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li 
                  key={skill}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}