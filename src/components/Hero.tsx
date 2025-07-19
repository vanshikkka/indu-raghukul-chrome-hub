import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-factory.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-accent" />
            <span className="text-accent font-semibold">ISO Certified Chemical Manufacturer</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Leading Manufacturer of 
            <span className="text-primary block">Premium Chemicals</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Indu Raghukul Chemical Industries specializes in manufacturing high-quality 
            Sodium Dichromate and Chrome Oxide Green. Based in Kharsia, Chhattisgarh, 
            we serve industries across India with our premium chemical products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="industrial" size="lg">
              View Our Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download Catalog
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Skilled Employees</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">Kharsia</p>
                <p className="text-sm text-muted-foreground">Chhattisgarh, India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">Certified</p>
                <p className="text-sm text-muted-foreground">Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;