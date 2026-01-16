import { useState } from "react";
import { Search, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CenterSearchProps {
  onSearch: (query: string, filters: string[]) => void;
}

const filterOptions = [
  { id: "all", label: "All Centers" },
  { id: "biometric", label: "Biometric Update" },
  { id: "mobile", label: "Mobile Link" },
  { id: "accessible", label: "Accessible", icon: Accessibility },
  { id: "open", label: "Open Today" },
];

const CenterSearch = ({ onSearch }: CenterSearchProps) => {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);

  const toggleFilter = (filterId: string) => {
    let newFilters: string[];
    if (filterId === "all") {
      newFilters = ["all"];
      setActiveFilters(newFilters);
      onSearch(query, newFilters);
    } else {
      newFilters = activeFilters.includes(filterId)
        ? activeFilters.filter((f) => f !== filterId)
        : [...activeFilters.filter((f) => f !== "all"), filterId];
      newFilters = newFilters.length === 0 ? ["all"] : newFilters;
      setActiveFilters(newFilters);
      onSearch(query, newFilters);
    }
  };

  const handleSearch = () => {
    onSearch(query, activeFilters);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Find Aadhaar Centers Near You
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Search by pincode, city, or district to locate the nearest service center
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Enter Pincode, City or District..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-3.5 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="rounded-full px-8 py-3.5 h-auto"
              size="lg"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((filter) => {
              const isActive = activeFilters.includes(filter.id);
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterSearch;
