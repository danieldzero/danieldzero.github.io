import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    /*{
      title: 'Customer Churn Prediction',
      description: 'Built a machine learning model to predict customer churn with 87% accuracy using Random Forest and XGBoost. Analyzed 10,000+ customer records to identify key retention factors.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgwNjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Developed an interactive Tableau dashboard visualizing sales trends across regions. Enabled stakeholders to identify growth opportunities and optimize inventory management.',
      image: 'https://images.unsplash.com/photo-1763568258458-ef825ca23fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MDc5MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Tableau', 'SQL', 'Data Visualization'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sentiment Analysis on Social Media',
      description: 'Created an NLP pipeline to analyze sentiment from 50,000+ tweets. Implemented LSTM neural networks achieving 82% accuracy in classifying positive, negative, and neutral sentiments.',
      image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2Nzk2MjYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'TensorFlow', 'NLP', 'LSTM'],
      github: '#',
      demo: '#'
    }*/
    {
      title: "Project_1",
      description: "to fill soon",
      image:
        "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgwNjYxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["to fill soon"],
      github: "#",
    },
    {
      title: "Project_2",
      description: "to fill soon",
      image:
        "https://images.unsplash.com/photo-1763568258458-ef825ca23fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4MDc5MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["to fill soon"],
      github: "#",
    },
    {
      title: "Project_3",
      description: "to fill soon",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2Nzk2MjYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["to fill soon"],
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of data science projects demonstrating
            my analytical and technical capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-0"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-purple-300 text-purple-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  {/*
                  <Button variant="outline" size="sm" className="flex-1 border-pink-600 text-pink-600 hover:bg-pink-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>*/}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}