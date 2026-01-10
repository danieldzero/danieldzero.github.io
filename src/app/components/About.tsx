import { Code, Database, LineChart, Brain } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'SQL, Python, Data Wrangling & ETL Pipelines'
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Scikit-learn, TensorFlow, Model Development'
    },
    {
      icon: LineChart,
      title: 'Data Visualization',
      description: 'Tableau, Matplotlib, Seaborn, Plotly'
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Python, R, SQL, Git & Version Control'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recent graduate with a degree in Data Science and a passion for extracting meaningful 
            insights from complex datasets. Eager to apply my skills in a dynamic team environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}