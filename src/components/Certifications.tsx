import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award, FileText, Leaf, Users } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      status: "Certified",
      color: "primary"
    },
    {
      icon: Shield,
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      status: "Certified",
      color: "chrome-green"
    },
    {
      icon: FileText,
      title: "GST Registration",
      description: "Government Compliance",
      status: "Active",
      color: "accent"
    },
    {
      icon: Leaf,
      title: "Pollution Control Board",
      description: "Environmental Clearance",
      status: "Approved",
      color: "chrome-green"
    },
    {
      icon: CheckCircle,
      title: "Factory License",
      description: "Manufacturing Authorization",
      status: "Valid",
      color: "primary"
    }
  ];

  const qualityFeatures = [
    "In-house Quality Control Laboratory",
    "Third-party Testing and Verification",
    "Batch-wise Quality Certificates",
    "Raw Material Inspection",
    "Process Parameter Monitoring",
    "Customer Complaint Resolution System"
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Certifications & Quality Assurance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is backed by international certifications and rigorous quality control processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className={`p-3 rounded-full bg-${cert.color}/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-${cert.color}/20 transition-colors`}>
                  <cert.icon className={`h-8 w-8 text-${cert.color}`} />
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="text-xs">
                  {cert.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quality Control Measures</h3>
              <div className="space-y-3">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Quality Promise</h4>
              <p className="text-muted-foreground mb-4">
                Every batch of our products undergoes rigorous testing to ensure consistency, 
                purity, and adherence to specifications. We provide comprehensive certificates 
                of analysis with each shipment.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Testing:</span>
                  <p className="text-muted-foreground">Before shipment</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Certificates:</span>
                  <p className="text-muted-foreground">With every order</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Traceability:</span>
                  <p className="text-muted-foreground">Complete batch records</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Support:</span>
                  <p className="text-muted-foreground">Technical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;