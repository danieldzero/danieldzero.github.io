import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Daniel Diaz</h3>
            <p className="text-gray-400">
              Junior Data Scientist passionate about turning data into insights
            </p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-pink-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-pink-500 fill-current" /> by Daniel Diaz © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}