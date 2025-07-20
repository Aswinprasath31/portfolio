import { Trophy, Lightbulb, Rocket, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "DataMites Certified Data Scientist",
      description: "Completed comprehensive certification program covering all aspects of data science",
      color: "bg-gradient-primary"
    },
    {
      icon: Lightbulb,
      title: "6+ Real-World Data Projects",
      description: "Built and deployed diverse portfolio of machine learning and analytics projects",
      color: "bg-gradient-accent"
    },
    {
      icon: Rocket,
      title: "YouTube-Ready AI Video Editor",
      description: "Created innovative AutoVlogAI tool using cutting-edge open-source AI technologies",
      color: "bg-gradient-primary"
    },
    {
      icon: Zap,
      title: "End-to-End ML Expertise",
      description: "Strong understanding of complete machine learning workflow from data to deployment",
      color: "bg-gradient-accent"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Notable achievements and strengths that set me apart in the data science field
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 ${highlight.color} rounded-xl flex-shrink-0`}>
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">6+</div>
                <div className="text-white/80">Projects Deployed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-white/80">Hours Certified</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">2</div>
                <div className="text-white/80">Internships Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-white/80">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;