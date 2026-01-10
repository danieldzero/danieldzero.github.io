import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'R', 'SQL', 'JavaScript']
    },
    {
      category: 'Data Analysis & ML',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras']
    },
    {
      category: 'Data Visualization',
      skills: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite']
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'Jupyter', 'Docker', 'AWS', 'Excel']
    },
    {
      category: 'Statistical Analysis',
      skills: ['Hypothesis Testing', 'A/B Testing', 'Regression Analysis', 'Time Series']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, machine learning, and visualization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}