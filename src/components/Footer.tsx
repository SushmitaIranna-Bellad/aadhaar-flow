import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-background">AadhaarOptimize</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-background/70 hover:text-background transition-colors text-sm">Features</a>
            <a href="#stats" className="text-background/70 hover:text-background transition-colors text-sm">Statistics</a>
            <a href="#about" className="text-background/70 hover:text-background transition-colors text-sm">About</a>
            <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Privacy</a>
          </nav>
          
          <p className="text-background/50 text-sm">
            © 2024 AadhaarOptimize. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
