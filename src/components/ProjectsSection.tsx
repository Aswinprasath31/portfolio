import { Github, ExternalLink, Code, Database, Brain, Shield, Bus, Video, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureCheck – Python-SQL Digital Ledger for Police Logs",
      description: "Built a centralized Streamlit dashboard for recording, analyzing, and exporting police check post logs with SQLite backend and real-time search and filtering capabilities.",
      icon: Shield,
      technologies: ["Python", "Streamlit", "SQLite", "SQL", "Dashboard"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "AI Echo – ChatGPT User Review Sentiment Analyzer",
      description: "Performed NLP on user reviews to classify sentiments. Trained multiple ML models and deployed via Streamlit for real-time sentiment analysis.",
      icon: Brain,
      technologies: ["NLP", "Machine Learning", "Streamlit", "Sentiment Analysis", "Python"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Employee Attrition Prediction",
      description: "Logistic Regression-based prediction with explanation features. Streamlit dashboard showing probability and key insights for HR decision making.",
      icon: Activity,
      technologies: ["Logistic Regression", "Streamlit", "Python", "HR Analytics", "Predictive Modeling"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "RedBus Web Scraper + Filter App",
      description: "Used Selenium to scrape RedBus listings and stored them in SQL database. Developed a filtering dashboard using Streamlit for enhanced user experience.",
      icon: Bus,
      technologies: ["Selenium", "Web Scraping", "SQL", "Streamlit", "Data Processing"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "AutoVlogAI – AI-Powered Motovlog Editor",
      description: "Whisper transcription → Emotion detection → Auto BGM → Final video. Uses HuggingFace Transformers, MoviePy, and Streamlit for automated video editing.",
      icon: Video,
      technologies: ["HuggingFace", "Whisper", "MoviePy", "Streamlit", "AI", "Video Processing"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Multiple Disease Prediction",
      description: "Built multi-page Streamlit app to predict kidney, liver, and Parkinson's disease using Random Forest, Logistic Regression, and XGBoost algorithms.",
      icon: Code,
      technologies: ["Random Forest", "XGBoost", "Logistic Regression", "Healthcare AI", "Streamlit"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world data science projects showcasing end-to-end ML workflows and deployment
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/20">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 line-clamp-2">{project.title}</h4>
                        <Badge variant="default" className="bg-primary text-primary-foreground">Featured</Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-gradient-accent rounded-lg">
                        <project.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold line-clamp-2 flex-1">{project.title}</h4>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button variant="default" size="sm" className="flex-1 text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;