import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Send both emails in parallel
      await Promise.all([
        // 1. Send notification to Busher
        emailjs.send(
          'service_t79o223',
          'template_6xlpwrr',
          templateParams,
          'C3AFBtJnNSg4pn9xo'
        ),
        // 2. Send auto-reply to user
        emailjs.send(
          'service_t79o223',
          'template_xhrdzyp',
          templateParams,
          'C3AFBtJnNSg4pn9xo'
        ),
      ]);

      toast.success('Thank you for your message! I\'ll get back to you soon. Check your inbox for a confirmation.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try emailing me directly at besher.abodan@icloud.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'besher.abodan@icloud.com',
      link: 'mailto:besher.abodan@icloud.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+46 70 77 69 18 7',
      link: 'tel:+46707769187',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/busher-abo-dan',
      link: 'https://www.linkedin.com/in/busher-abo-dan-a344b81b0/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sweden',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-gray-900">Let's Work Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Whether you have a question, want to discuss a project, or just want to say hi, 
                feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-gray-900">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-600">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <p className="text-gray-700">
                  <span className="text-blue-600">Open to opportunities:</span> Currently seeking full stack 
                  developer positions in Sweden. Available for full-time roles and interesting projects.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
