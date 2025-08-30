import { Mail, Phone, MapPin, Clock, Award } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={companyLogo} alt="Indu Raghukul Logo" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-bold">Indu Raghukul</h3>
                <p className="text-sm opacity-90">Chemical Industries</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
              Leading manufacturer of premium chemicals including Sodium Dichromate and 
              Chrome Oxide Green. Based in Kharsia, Chhattisgarh, we serve industries 
              across India with quality products and reliable service.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="h-4 w-4" />
              <span className="opacity-90">ISO Certified | Quality Assured</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="opacity-80">
                  <p>Industrial Area, Kharsia</p>
                  <p>Chhattisgarh - 496661, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <div className="opacity-80">
                  <p>+91 9876543210</p>
                  <p>+91 9876543211</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <div className="opacity-80">
                  <p>sales@induraghukul.com</p>
                  <p>info@induraghukul.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block opacity-80 hover:opacity-100 transition-opacity">
                Home
              </a>
              <a href="#products" className="block opacity-80 hover:opacity-100 transition-opacity">
                Our Products
              </a>
              <a href="#about" className="block opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="#certifications" className="block opacity-80 hover:opacity-100 transition-opacity">
                Certifications
              </a>
              <a href="#contact" className="block opacity-80 hover:opacity-100 transition-opacity">
                Contact Us
              </a>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-2">Business Hours</h5>
              <div className="flex items-center space-x-2 text-sm opacity-80">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div>
                  <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              <p>&copy; 2024 Indu Raghukul Food and Chemicals. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm opacity-80">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Safety Data Sheets</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;