import { Award, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certified Data Scientist",
      provider: "Guvi",
      status: "completed",
      year: "2025",
      description: "Covered Python, Pandas, SQL, Statistics, Machine Learning, Deep Learning, Tableau, Power BI, NLP, and End-to-End Project Deployment.",
      skills: ["Python", "Machine Learning", "Deep Learning", "Tableau", "Power BI", "NLP"]
    },
    {
      title: "Certified Data Scientist Certification Training",
      provider: "DATAMITES",
      status: "completed",
      year: "2025",
      duration: "120 Hours",
      period: "25th Jan – 12th Jul, 2025",
      certificateNo: "23250745531945",
      description: "Accredited by reputed Certification Bodies across the globe",
      skills: ["Data Science", "Analytics", "ML Algorithms", "Statistical Analysis"]
    },
    {
      title: "AI Engineer",
      provider: "Specialization Program",
      status: "ongoing",
      year: "2025",
      description: "Specialization in Generative AI, LLMs, and AI Strategy",
      skills: ["Generative AI", "LLMs", "AI Strategy", "Neural Networks"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in data science and AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Award className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <Badge 
                      variant={cert.status === 'completed' ? 'default' : 'secondary'}
                      className={cert.status === 'completed' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {cert.status === 'completed' ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <Clock className="h-3 w-3 mr-1" />
                      )}
                      {cert.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold line-clamp-2">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.provider}</p>
                    
                    {cert.duration && (
                      <p className="text-sm text-muted-foreground">Duration: {cert.duration}</p>
                    )}
                    
                    {cert.period && (
                      <p className="text-sm text-muted-foreground">Period: {cert.period}</p>
                    )}
                    
                    {cert.certificateNo && (
                      <p className="text-sm text-muted-foreground">Certificate No: {cert.certificateNo}</p>
                    )}

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
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

export default CertificationsSection;