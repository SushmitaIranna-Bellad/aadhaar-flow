import { MapPin, Clock, Phone, CheckCircle, XCircle, Accessibility } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Center {
  id: string;
  name: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  hours: string;
  isOpen: boolean;
  services: string[];
  isAccessible: boolean;
}

interface CenterResultsProps {
  query: string;
  filters: string[];
}

const mockCenters: Center[] = [
  {
    id: "1",
    name: "Aadhaar Seva Kendra - Connaught Place",
    address: "Block A, Connaught Place",
    city: "New Delhi",
    pincode: "110001",
    phone: "+91 1234567890",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "2",
    name: "CSC Aadhaar Center - Lajpat Nagar",
    address: "Shop No. 15, Central Market, Lajpat Nagar II",
    city: "New Delhi",
    pincode: "110024",
    phone: "+91 9876543210",
    hours: "10:00 AM - 6:00 PM",
    isOpen: true,
    services: ["Biometric Update", "New Enrollment"],
    isAccessible: false,
  },
  {
    id: "3",
    name: "Bank of India - Aadhaar Center",
    address: "Main Branch, Sector 18",
    city: "Noida",
    pincode: "201301",
    phone: "+91 1122334455",
    hours: "9:30 AM - 4:00 PM",
    isOpen: false,
    services: ["Mobile Link", "Email Update"],
    isAccessible: true,
  },
  {
    id: "4",
    name: "Post Office Aadhaar Kendra",
    address: "GPO Building, Civil Lines",
    city: "Delhi",
    pincode: "110054",
    phone: "+91 9988776655",
    hours: "9:00 AM - 5:30 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update", "Name Correction"],
    isAccessible: true,
  },
  {
    id: "5",
    name: "SBI Aadhaar Enrollment Center",
    address: "Janpath Road, Near India Gate",
    city: "New Delhi",
    pincode: "110001",
    phone: "+91 8877665544",
    hours: "10:00 AM - 4:00 PM",
    isOpen: true,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
];

const CenterResults = ({ query, filters }: CenterResultsProps) => {
  // Filter centers based on query and filters
  const filteredCenters = mockCenters.filter((center) => {
    // Query matching - if query is empty, show all
    const queryLower = query.toLowerCase().trim();
    const matchesQuery =
      queryLower === "" ||
      center.name.toLowerCase().includes(queryLower) ||
      center.city.toLowerCase().includes(queryLower) ||
      center.pincode.includes(query) ||
      center.address.toLowerCase().includes(queryLower);

    if (!matchesQuery) return false;

    // Filter matching
    if (filters.includes("all")) return true;

    let matchesFilters = true;

    if (filters.includes("biometric")) {
      matchesFilters = matchesFilters && center.services.some((s) => s.toLowerCase().includes("biometric"));
    }
    if (filters.includes("mobile")) {
      matchesFilters = matchesFilters && center.services.some((s) => s.toLowerCase().includes("mobile"));
    }
    if (filters.includes("accessible")) {
      matchesFilters = matchesFilters && center.isAccessible;
    }
    if (filters.includes("open")) {
      matchesFilters = matchesFilters && center.isOpen;
    }

    return matchesFilters;
  });

  if (filteredCenters.length === 0) {
    return (
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Centers Found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters to find Aadhaar centers near you.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">
              Found {filteredCenters.length} Aadhaar Center{filteredCenters.length !== 1 ? "s" : ""}
            </h3>
            <span className="text-sm text-muted-foreground">
              Showing results for "{query}"
            </span>
          </div>

          <div className="space-y-4">
            {filteredCenters.map((center) => (
              <div
                key={center.id}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          {center.name}
                          {center.isAccessible && (
                            <Accessibility className="h-4 w-4 text-blue-500" />
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {center.address}, {center.city} - {center.pincode}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {center.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {center.hours}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-4 w-4" />
                        {center.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {center.isOpen ? (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                        <CheckCircle className="h-4 w-4" />
                        Open Now
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                        <XCircle className="h-4 w-4" />
                        Closed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterResults;
