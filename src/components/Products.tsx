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
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-${product.color}/10`}>
                    <product.icon className={`h-8 w-8 text-${product.color}`} />
                  </div>
                  <Badge variant="secondary">{product.grade}</Badge>
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-lg font-mono">{product.formula}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{product.description}</p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Droplets className="h-4 w-4 mr-2" />
                    Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <Badge key={index} variant="outline">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Shield className="h-4 w-4 mr-2" />
                    Key Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-muted-foreground">{spec.property}:</span>
                        <span className="ml-2 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="chemical" size="lg">
            Download Complete Product Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;