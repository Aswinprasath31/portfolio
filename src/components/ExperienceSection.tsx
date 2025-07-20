import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "CodTech",
      location: "Remote",
      period: "Mar 2025 – Apr 2025",
      type: "Internship",
      achievements: [
        "Performed Big Data analysis using PySpark on large-scale CSV datasets",
        "Built ML models for classification and regression",
        "Designed an interactive dashboard using Plotly & Dash in Google Colab",
        "Conducted sentiment analysis using NLP techniques"
      ],
      skills: ["PySpark", "Machine Learning", "Plotly", "Dash", "NLP", "Sentiment Analysis"]
    },
    {
      title: "Data Science Intern",
      company: "Internshala",
      location: "Virtual",
      period: "Jan 2025 – Feb 2025",
      type: "Virtual Internship",
      achievements: [
        "Cleaned and visualized real-world datasets",
        "Implemented classification models and built a Streamlit app",
        "Final project focused on EDA and model deployment"
      ],
      skills: ["Data Cleaning", "Data Visualization", "Classification", "Streamlit", "EDA", "Model Deployment"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on internship experience in data analysis and machine learning
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Header Info */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                        
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        
                        <Badge variant="outline" className="mt-3">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-medium mb-4">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-lg font-medium mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;