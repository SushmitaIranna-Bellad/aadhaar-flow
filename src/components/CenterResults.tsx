import { MapPin, Clock, Phone, CheckCircle, XCircle, Accessibility, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aadhaarCenters, Center } from "@/data/aadhaarCenters";

interface CenterResultsProps {
  query: string;
  filters: string[];
}

const CenterResults = ({ query, filters }: CenterResultsProps) => {
  // Filter centers based on query and filters
  const filteredCenters = aadhaarCenters.filter((center) => {
    // Query matching - if query is empty, show all
    const queryLower = query.toLowerCase().trim();
    const matchesQuery =
      queryLower === "" ||
      center.name.toLowerCase().includes(queryLower) ||
      center.city.toLowerCase().includes(queryLower) ||
      center.district.toLowerCase().includes(queryLower) ||
      center.taluk.toLowerCase().includes(queryLower) ||
      center.state.toLowerCase().includes(queryLower) ||
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

  // Group by state and district for display
  const groupedByState = filteredCenters.reduce((acc, center) => {
    if (!acc[center.state]) {
      acc[center.state] = {};
    }
    if (!acc[center.state][center.district]) {
      acc[center.state][center.district] = [];
    }
    acc[center.state][center.district].push(center);
    return acc;
  }, {} as Record<string, Record<string, Center[]>>);

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
              Try searching by city, district, taluk, state, or pincode to find Aadhaar centers.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">
              Found {filteredCenters.length} Aadhaar Center{filteredCenters.length !== 1 ? "s" : ""}
            </h3>
            <span className="text-sm text-muted-foreground">
              {query.trim() ? `Showing results for "${query}"` : "Showing all locations"}
            </span>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{Object.keys(groupedByState).length}</p>
              <p className="text-sm text-muted-foreground">States</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">
                {Object.values(groupedByState).reduce((acc, districts) => acc + Object.keys(districts).length, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Districts</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{filteredCenters.length}</p>
              <p className="text-sm text-muted-foreground">Centers</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">
                {filteredCenters.filter(c => c.isOpen).length}
              </p>
              <p className="text-sm text-muted-foreground">Open Now</p>
            </div>
          </div>

          {/* Grouped Results */}
          <div className="space-y-8">
            {Object.entries(groupedByState).sort().map(([state, districts]) => (
              <div key={state} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border pb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold">{state}</h4>
                  <Badge variant="secondary" className="ml-auto">
                    {Object.values(districts).flat().length} centers
                  </Badge>
                </div>

                {Object.entries(districts).sort().map(([district, centers]) => (
                  <div key={district} className="ml-4">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <h5 className="font-medium text-muted-foreground">{district} District</h5>
                      <span className="text-xs text-muted-foreground">({centers.length} centers)</span>
                    </div>

                    <div className="space-y-3 ml-4">
                      {centers.map((center) => (
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
                                  <p className="text-xs text-muted-foreground mt-1">
                                    <span className="font-medium">Taluk:</span> {center.taluk}
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
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterResults;
