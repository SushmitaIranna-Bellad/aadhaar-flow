import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-fade-up">
            <Shield className="w-4 h-4" />
            Government Service Optimization Platform
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-tight animate-fade-up stagger-1">
            Smarter Aadhaar
            <span className="gradient-text block">Service Delivery</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up stagger-2">
            Many citizens face delays in Aadhaar updates due to uneven load distribution. 
            Our platform identifies service gaps and helps optimize delivery across centers.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up stagger-3">
            <Button variant="hero" size="xl">
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Learn More
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up stagger-4">
            <div className="card-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">1.4B+</div>
              <div className="text-muted-foreground text-sm">Citizens Served</div>
            </div>
            
            <div className="card-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">40%</div>
              <div className="text-muted-foreground text-sm">Faster Processing</div>
            </div>
            
            <div className="card-gradient rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">50K+</div>
              <div className="text-muted-foreground text-sm">Centers Mapped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
