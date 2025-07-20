import { MapPin, Phone, Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Data Science Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80" />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Name and Title */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aswin Prasath V
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-foreground/80">
              Aspiring Data Scientist
            </div>
            <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience in Python, SQL, Machine Learning, and NLP. 
              Actively seeking full-time data roles to drive business impact.
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base animate-fade-in delay-300">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="h-4 w-4" />
              Chennai, Tamil Nadu, India
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +91 74483 26548
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              aswinprasath1590@gmail.com
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-500">
            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 shadow-card-hover">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="border-accent/20 hover:bg-accent/10 shadow-card-hover">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;