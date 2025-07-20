import { Code, Database, BarChart3, Wrench, GitBranch, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "HTML/CSS"],
      color: "bg-gradient-primary"
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Plotly"],
      color: "bg-gradient-accent"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Streamlit", "Tableau", "Power BI", "Jupyter", "VS Code"],
      color: "bg-gradient-primary"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Logistic Regression", "Random Forest", "XGBoost", "NLP", "Sentiment Analysis"],
      color: "bg-gradient-accent"
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Matplotlib", "Plotly", "Data Storytelling"],
      color: "bg-gradient-primary"
    },
    {
      title: "Development & Others",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Selenium", "SQLite", "MoviePy"],
      color: "bg-gradient-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive toolkit for data science, machine learning, and analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card-hover hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 ${category.color} rounded-lg`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-background/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill Level Indicators */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { skill: "Python", level: 85 },
                { skill: "Machine Learning", level: 80 },
                { skill: "SQL", level: 75 },
                { skill: "Data Visualization", level: 85 }
              ].map((item, index) => (
                <Card key={index} className="shadow-card-hover">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-medium mb-4">{item.skill}</h4>
                    <div className="relative w-20 h-20 mx-auto">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-muted/20"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-primary"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray={`${item.level}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-semibold">{item.level}%</span>
                      </div>
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

export default SkillsSection;