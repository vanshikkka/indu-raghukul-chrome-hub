import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Beaker, Palette, Droplets, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Sodium Dichromate",
      formula: "Na₂Cr₂O₇",
      icon: Beaker,
      color: "sodium-orange",
      description: "High-purity sodium dichromate for various industrial applications including leather tanning, metal treatment, and chemical synthesis.",
      applications: ["Leather Tanning", "Metal Treatment", "Pigment Manufacturing", "Chemical Synthesis"],
      specifications: [
        { property: "Purity", value: "≥99.5%" },
        { property: "Moisture", value: "≤0.5%" },
        { property: "Water Insoluble", value: "≤0.1%" },
        { property: "pH (10% solution)", value: "3.5-4.5" }
      ],
      grade: "Technical & Analytical Grade"
    },
    {
      id: 2,
      name: "Chrome Oxide Green",
      formula: "Cr₂O₃",
      icon: Palette,
      color: "chrome-green",
      description: "Premium quality chrome oxide green pigment known for its excellent color stability, weather resistance, and chemical inertness.",
      applications: ["Paint & Coatings", "Ceramics", "Glass Manufacturing", "Plastic Coloring"],
      specifications: [
        { property: "Cr₂O₃ Content", value: "≥98%" },
        { property: "Oil Absorption", value: "15-25g/100g" },
        { property: "Particle Size", value: "0.1-0.3μm" },
        { property: "Tinting Strength", value: "95-105%" }
      ],
      grade: "Pigment Grade"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Premium Chemical Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manufactured with precision and quality control, our products meet the highest industry standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-card via-card to-muted/20 border-2 hover:border-primary/30">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-${product.color}/20 to-${product.color}/10 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <product.icon className={`h-10 w-10 text-${product.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <Badge variant="secondary" className="px-3 py-1 text-sm font-medium shadow-sm">
                    {product.grade}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-xl font-mono text-muted-foreground/90 mt-2">
                  {product.formula}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base">{product.description}</p>
                
                <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg p-4 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center text-lg">
                    <Droplets className="h-5 w-5 mr-2 text-accent" />
                    Applications
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {product.applications.map((app, index) => (
                      <Badge key={index} variant="outline" className="justify-center py-2 hover:bg-accent/10 hover:border-accent/50 transition-colors duration-200">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4 flex items-center text-lg">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Key Specifications
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 px-3 bg-background/50 rounded-md border border-border/30">
                        <span className="text-muted-foreground font-medium">{spec.property}</span>
                        <span className="font-bold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6">
                  <Button 
                    variant="default" 
                    className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Quote & Sample
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;