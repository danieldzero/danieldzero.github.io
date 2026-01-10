import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-lg">diaz.gon.daniel.95@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-lg">+58 (424) 254-4683</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg">Caracas, VE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}