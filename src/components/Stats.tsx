const stats = [
  { value: "28", label: "States Covered", suffix: "" },
  { value: "95", label: "Data Accuracy", suffix: "%" },
  { value: "3.2M", label: "Daily Transactions", suffix: "" },
  { value: "15", label: "Avg Wait Reduction", suffix: " min" }
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 gradient-bg relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Transforming Public Service
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our platform is making a measurable impact on Aadhaar service efficiency across India.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-2">
                {stat.value}<span className="text-primary-foreground/70">{stat.suffix}</span>
              </div>
              <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
