import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl">Daniel Diaz</h1>
            <h2 className="text-3xl md:text-4xl text-gray-600">Junior Data Scientist</h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Passionate about transforming data into actionable insights. Specializing in machine learning, 
            statistical analysis, and data visualization to solve real-world problems.
          </p>
          
          <div className="flex gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              View Resume
            </Button>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODA1NDYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}