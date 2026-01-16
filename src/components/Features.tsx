import { BarChart3, MapPin, Clock, TrendingUp, Bell, Database } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Service Gap Mapping",
    description: "Visualize underserved areas and identify locations where citizens face the longest wait times for Aadhaar services."
  },
  {
    icon: BarChart3,
    title: "Load Analytics",
    description: "Real-time analysis of center workloads helps redistribute demand and balance service capacity across regions."
  },
  {
    icon: Clock,
    title: "Wait Time Prediction",
    description: "AI-powered predictions help citizens choose optimal times and locations for their Aadhaar updates."
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Track key metrics like processing speed, center efficiency, and service quality scores in real-time."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Citizens receive alerts for optimal visit times, appointment reminders, and status updates."
  },
  {
    icon: Database,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics help authorities make informed decisions about resource allocation."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Optimize Service Delivery
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful tools to identify bottlenecks, predict demand, and ensure every citizen gets timely service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group card-gradient rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
