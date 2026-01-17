import { Flame, Clock, AlertTriangle, Signal, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const statsCards = [
  {
    title: "High Load Districts",
    icon: Flame,
    iconColor: "text-red-500",
    value: "3 Regions",
    subValue: "42.8 Lakh",
    subLabel: "pending updates",
    actionLabel: "Need Expansion",
    actionColor: "text-red-500",
  },
  {
    title: "Avg Wait Time",
    icon: Clock,
    iconColor: "text-orange-500",
    value: "45 Mins",
    subValue: "+12 mins from",
    subLabel: "avg",
    actionLabel: "Review Capacity",
    actionColor: "text-blue-500",
  },
  {
    title: "Over-Capacity",
    icon: AlertTriangle,
    iconColor: "text-orange-500",
    value: "12 Centers",
    subValue: "Operating @",
    subLabel: "120% load",
    actionLabel: "Rebalance Load",
    actionColor: "text-orange-500",
  },
  {
    title: "Low Coverage",
    icon: Signal,
    iconColor: "text-blue-500",
    value: "5 Districts",
    subValue: ">10km to",
    subLabel: "nearest center",
    actionLabel: "Deploy Mobile Units",
    actionColor: "text-red-500",
  },
];

const lowAccessRegions = [
  {
    state: "Nagaland",
    growth: "0.2%",
    growthColor: "text-red-500",
    centers: 45,
    gap: "High",
    status: "Critical",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    state: "Manipur",
    growth: "0.5%",
    growthColor: "text-red-500",
    centers: 82,
    gap: "High",
    status: "Critical",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    state: "Meghalaya",
    growth: "0.8%",
    growthColor: "text-red-500",
    centers: 120,
    gap: "Medium",
    status: "Warning",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    state: "Bihar (Rural)",
    growth: "1.1%",
    growthColor: "text-foreground",
    centers: 2400,
    gap: "Medium",
    status: "Warning",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    state: "Assam (Remote)",
    growth: "1.2%",
    growthColor: "text-foreground",
    centers: 560,
    gap: "Low",
    status: "Monitoring",
    statusColor: "bg-gray-100 text-gray-700",
  },
];

const highUpdateAreas = [
  { region: "Delhi NCR", percentage: 92, color: "bg-red-500" },
  { region: "Mumbai Metro", percentage: 88, color: "bg-orange-500" },
  { region: "Bengaluru", percentage: 85, color: "bg-blue-500" },
  { region: "Hyderabad", percentage: 78, color: "bg-blue-500" },
  { region: "Chennai", percentage: 72, color: "bg-blue-500" },
];

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Aadhaar Center Analytics</h1>
            <p className="text-muted-foreground">
              Real-time monitoring of Aadhaar enrollment centers across India
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statsCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      {card.title}
                    </span>
                    <Icon className={`h-5 w-5 ${card.iconColor}`} />
                  </div>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{card.value}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {card.subValue} {card.subLabel}
                    </span>
                    <button className={`flex items-center gap-1 font-medium ${card.actionColor} hover:underline`}>
                      {card.actionLabel}
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Low Access Regions Table */}
            <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">
                  Low-Access Regions (Growth &lt; 1%)
                </h2>
                <button className="text-sm font-medium text-blue-500 hover:underline">
                  Export Report
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        State / Region
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        Enrolment Growth
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        Service Centers
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        Gap Indicator
                      </th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lowAccessRegions.map((region, index) => (
                      <tr key={index} className="border-b border-border/50 last:border-0">
                        <td className="py-4 px-2 font-medium">{region.state}</td>
                        <td className={`py-4 px-2 ${region.growthColor}`}>
                          {region.growth}
                        </td>
                        <td className="py-4 px-2">{region.centers}</td>
                        <td className="py-4 px-2">{region.gap}</td>
                        <td className="py-4 px-2">
                          <Badge className={region.statusColor}>
                            {region.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* High Update Frequency Areas */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-2">
                High Update Frequency Areas
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Regions with high update requests vs. low completion rates.
              </p>

              <div className="space-y-5">
                {highUpdateAreas.map((area, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{area.region}</span>
                      <span className="text-sm font-semibold">{area.percentage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${area.color} rounded-full transition-all duration-500`}
                        style={{ width: `${area.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
