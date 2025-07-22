import { Mail, Linkedin, Calendar, Download, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-subheading text-coral">Get In Touch</p>
          <h2 className="text-heading-1 text-primary">
            Let's Build Something <span className="text-gradient-blue">Amazing</span>
          </h2>
          <p className="text-body-large text-secondary max-w-3xl mx-auto">
            Whether you're looking for a product manager who can turn your vision into reality, 
            or want to discuss product strategy, I'm always excited to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-heading-3 text-primary">Let's Connect</h3>
              <p className="text-body text-secondary">
                I'm always open to discussing new opportunities, sharing insights about product management, 
                or just having a great conversation about building products that matter.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="mailto:hello@example.com"
                className="card-elegant flex items-center gap-4 p-6 hover:border-coral/30 hover:shadow-coral/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-coral rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-coral transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-secondary">excellent@example.com</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="card-elegant flex items-center gap-4 p-6 hover:border-electric-blue/30 hover:shadow-blue/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-electric-blue transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-secondary">Connect professionally</p>
                </div>
              </a>

              <a 
                href="https://calendly.com/yourprofile"
                target="_blank"
                className="card-elegant flex items-center gap-4 p-6 hover:border-coral/30 hover:shadow-coral/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-mixed rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-coral transition-colors duration-300">
                    Schedule a Call
                  </h4>
                  <p className="text-secondary">Book a 30-minute chat</p>
                </div>
              </a>

              <a 
                href="/cv.pdf"
                target="_blank"
                className="card-elegant flex items-center gap-4 p-6 hover:border-electric-blue/30 hover:shadow-blue/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-electric-blue transition-colors duration-300">
                    Download CV
                  </h4>
                  <p className="text-secondary">Full professional background</p>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="w-5 h-5 text-coral" />
                <span>Based in Nigeria, Available Globally</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                <Clock className="w-5 h-5 text-electric-blue" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-featured p-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-heading-3 text-primary">Send a Message</h3>
                <p className="text-body text-secondary">
                  Prefer to reach out directly? Drop me a message and I'll get back to you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    First Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all duration-300">
                  <option>Product Management Opportunity</option>
                  <option>Collaboration Inquiry</option>
                  <option>Speaking Engagement</option>
                  <option>General Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-coral focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <button 
                type="submit"
                className="w-full btn-coral flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;