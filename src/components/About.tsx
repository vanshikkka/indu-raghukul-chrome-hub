import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, Target, Zap, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Factory, label: "Years of Experience", value: "8+" },
    { icon: Users, label: "Skilled Employees", value: "50+" },
    { icon: Globe, label: "Pan India Supply", value: "100%" },
    { icon: Award, label: "Quality Certifications", value: "5+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We maintain the highest standards in chemical manufacturing with rigorous quality control processes."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuous improvement in our processes to deliver superior products efficiently."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships by understanding and meeting our customers' unique needs."
    },
    {
      icon: Factory,
      title: "Sustainability",
      description: "Environmentally responsible manufacturing practices that ensure a sustainable future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Indu Raghukul Food and Chemicals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established as a leading manufacturer in Kharsia, Chhattisgarh, we specialize in premium chemical production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Indu Raghukul Food and Chemicals was founded with a vision to become a trusted 
                supplier of high-quality chemicals to industries across India. Located in the 
                industrial hub of Kharsia, Chhattisgarh, our strategic location provides us with 
                excellent connectivity and access to raw materials.
              </p>
              <p>
                With a dedicated team of 30-60 skilled professionals, we have built a reputation 
                for delivering consistent quality and reliable supply. Our state-of-the-art 
                manufacturing facility is equipped with modern technology and follows stringent 
                safety and environmental protocols.
              </p>
              <p>
                We take pride in our certifications and quality standards that ensure our products 
                meet international specifications. Our commitment to excellence has made us a 
                preferred partner for industries requiring premium chemicals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;