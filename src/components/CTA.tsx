import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center card-gradient rounded-3xl p-12 md:p-16 shadow-elevated border border-border/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Optimize Service Delivery?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join the mission to ensure every citizen receives timely Aadhaar services. 
              Explore our analytics dashboard and discover service improvement opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Access Dashboard
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
