import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Real-time monitoring of service center loads",
  "Predictive analytics for demand forecasting",
  "Citizen-friendly appointment recommendations",
  "Data-driven resource allocation insights",
  "Seamless integration with existing systems"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About the Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Bridging the Gap in Public Service
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Aadhaar is the backbone of India's digital identity infrastructure. However, uneven 
              distribution of service centers and fluctuating demand create bottlenecks that affect 
              millions of citizens daily.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our platform uses advanced analytics and machine learning to identify these service 
              gaps, predict demand patterns, and provide actionable insights for both citizens and 
              administrators.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="card-gradient rounded-3xl p-8 shadow-elevated">
              <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative">
                  {/* Simulated dashboard preview */}
                  <div className="absolute inset-4 bg-background rounded-xl shadow-card p-4">
                    <div className="h-4 w-32 bg-primary/20 rounded mb-4" />
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-primary/10 rounded-lg flex items-end p-2">
                          <div 
                            className="w-full gradient-bg rounded" 
                            style={{ height: `${30 + i * 20}%` }} 
                          />
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex gap-2">
                          <div className="h-3 w-3 bg-primary/30 rounded-full" />
                          <div className="h-3 flex-1 bg-muted rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
