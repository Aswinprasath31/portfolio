import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aswinprasath1590@gmail.com",
      href: "mailto:aswinprasath1590@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 74483 26548",
      href: "tel:+917448326548"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-primary"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "#",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss data science opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-card border rounded-lg text-muted-foreground ${social.color} transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1`}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2">Ready to collaborate?</h4>
                  <p className="text-white/80 mb-4">
                    I'm actively seeking data science opportunities and would love to discuss how I can contribute to your team.
                  </p>
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      rows={5} 
                      placeholder="Tell me about your project or opportunity..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-primary border-0 hover:opacity-90">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;