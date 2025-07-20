import { Target, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate data enthusiast with practical experience in machine learning and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Career Objective */}
            <Card className="shadow-card-hover hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">Career Objective</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Aspiring Data Scientist with hands-on experience in Python, SQL, Machine Learning, 
                  Streamlit, and NLP. Completed a certified course from DataMites, and successfully 
                  delivered multiple real-world projects and internships. Actively seeking a full-time 
                  data role to apply analytical thinking and drive business impact.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-card-hover hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium">B.Sc. Computer Science</h4>
                    <p className="text-muted-foreground">SRM Institute of Science and Technology</p>
                    <p className="text-muted-foreground">Kattankulathur</p>
                    <p className="text-sm text-primary font-medium mt-2">Graduation Year: 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;