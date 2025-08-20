import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Factory, MessageSquare } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productInterest: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          full_name: formData.fullName,
          company_name: formData.companyName || null,
          email: formData.email,
          phone: formData.phone,
          product_interest: formData.productInterest || null,
          message: formData.message
        });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        productInterest: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Factory,
      title: "Factory Address",
      details: [
        "Indu Raghukul Chemical Industries",
        "Industrial Area, Kharsia",
        "Chhattisgarh - 496661, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 9876543210",
        "+91 9876543211",
        "Landline: 07749-123456"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "sales@induraghukul.com",
        "info@induraghukul.com",
        "quality@induraghukul.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 6:00 PM",
        "Sunday: Closed",
        "Emergency: 24/7 Available"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your chemical requirements? Contact our team for quotes, technical support, or partnership opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Company Name
                        </label>
                        <Input 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter your company name" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email" 
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number *
                        </label>
                        <Input 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Product Interest
                      </label>
                      <Input 
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        placeholder="e.g., Sodium Dichromate, Chrome Oxide Green" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements, quantity needed, specifications, etc."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="industrial" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <info.icon className="h-5 w-5 mr-2 text-primary" />
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Why Choose Indu Raghukul?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Competitive Pricing</h4>
                    <p className="text-sm text-muted-foreground">Best market rates with transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Reliable Supply</h4>
                    <p className="text-sm text-muted-foreground">Consistent delivery schedules and inventory management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Technical Support</h4>
                    <p className="text-sm text-muted-foreground">Expert guidance and application support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Custom Solutions</h4>
                    <p className="text-sm text-muted-foreground">Tailored products for specific requirements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Visit Our Facility</h4>
              <p className="text-muted-foreground mb-4">
                Schedule a visit to our manufacturing facility in Kharsia, Chhattisgarh 
                to see our quality processes firsthand.
              </p>
              <Button variant="outline">
                Schedule Factory Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;