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
  // Delhi NCR
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
    name: "Post Office Aadhaar Kendra - Civil Lines",
    address: "GPO Building, Civil Lines",
    city: "Delhi",
    pincode: "110054",
    phone: "+91 9988776655",
    hours: "9:00 AM - 5:30 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update", "Name Correction"],
    isAccessible: true,
  },
  // Mumbai
  {
    id: "5",
    name: "Aadhaar Seva Kendra - Andheri",
    address: "Andheri East, Near Metro Station",
    city: "Mumbai",
    pincode: "400069",
    phone: "+91 2233445566",
    hours: "9:00 AM - 6:00 PM",
    isOpen: true,
    services: ["New Enrollment", "Biometric Update", "Mobile Link"],
    isAccessible: true,
  },
  {
    id: "6",
    name: "CSC Aadhaar Center - Dadar",
    address: "Dadar West, Shivaji Park",
    city: "Mumbai",
    pincode: "400028",
    phone: "+91 9988112233",
    hours: "10:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Address Update", "Biometric Update"],
    isAccessible: false,
  },
  {
    id: "7",
    name: "SBI Aadhaar Center - Bandra",
    address: "Linking Road, Bandra West",
    city: "Mumbai",
    pincode: "400050",
    phone: "+91 8877665544",
    hours: "9:30 AM - 4:30 PM",
    isOpen: true,
    services: ["Mobile Link", "Email Update", "New Enrollment"],
    isAccessible: true,
  },
  // Bangalore
  {
    id: "8",
    name: "Aadhaar Seva Kendra - Koramangala",
    address: "5th Block, Koramangala",
    city: "Bangalore",
    pincode: "560095",
    phone: "+91 8044556677",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "9",
    name: "CSC Aadhaar Center - Whitefield",
    address: "ITPL Main Road, Whitefield",
    city: "Bangalore",
    pincode: "560066",
    phone: "+91 8033221144",
    hours: "10:00 AM - 6:00 PM",
    isOpen: true,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
  {
    id: "10",
    name: "Post Office Aadhaar Kendra - Indiranagar",
    address: "100 Feet Road, Indiranagar",
    city: "Bangalore",
    pincode: "560038",
    phone: "+91 8055667788",
    hours: "9:00 AM - 4:00 PM",
    isOpen: false,
    services: ["Mobile Link", "Address Update", "Name Correction"],
    isAccessible: true,
  },
  // Chennai
  {
    id: "11",
    name: "Aadhaar Seva Kendra - T Nagar",
    address: "Pondy Bazaar, T Nagar",
    city: "Chennai",
    pincode: "600017",
    phone: "+91 4422334455",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "New Enrollment"],
    isAccessible: true,
  },
  {
    id: "12",
    name: "CSC Aadhaar Center - Anna Nagar",
    address: "2nd Avenue, Anna Nagar",
    city: "Chennai",
    pincode: "600040",
    phone: "+91 4433445566",
    hours: "10:00 AM - 6:00 PM",
    isOpen: true,
    services: ["Address Update", "Biometric Update"],
    isAccessible: false,
  },
  {
    id: "13",
    name: "Bank Aadhaar Center - Velachery",
    address: "100 Feet Road, Velachery",
    city: "Chennai",
    pincode: "600042",
    phone: "+91 4455667788",
    hours: "9:30 AM - 4:30 PM",
    isOpen: true,
    services: ["Mobile Link", "Email Update"],
    isAccessible: true,
  },
  // Kolkata
  {
    id: "14",
    name: "Aadhaar Seva Kendra - Salt Lake",
    address: "Sector V, Salt Lake City",
    city: "Kolkata",
    pincode: "700091",
    phone: "+91 3322334455",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "15",
    name: "CSC Aadhaar Center - Park Street",
    address: "Park Street, Near Metro",
    city: "Kolkata",
    pincode: "700016",
    phone: "+91 3344556677",
    hours: "10:00 AM - 6:00 PM",
    isOpen: false,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
  {
    id: "16",
    name: "Post Office Aadhaar Kendra - Howrah",
    address: "Howrah Station Road",
    city: "Howrah",
    pincode: "711101",
    phone: "+91 3355667788",
    hours: "9:00 AM - 4:30 PM",
    isOpen: true,
    services: ["Mobile Link", "Address Update", "Name Correction"],
    isAccessible: true,
  },
  // Hyderabad
  {
    id: "17",
    name: "Aadhaar Seva Kendra - Hitech City",
    address: "Cyber Towers, Hitech City",
    city: "Hyderabad",
    pincode: "500081",
    phone: "+91 4022334455",
    hours: "9:00 AM - 6:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "New Enrollment"],
    isAccessible: true,
  },
  {
    id: "18",
    name: "CSC Aadhaar Center - Banjara Hills",
    address: "Road No. 12, Banjara Hills",
    city: "Hyderabad",
    pincode: "500034",
    phone: "+91 4033445566",
    hours: "10:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Address Update", "Biometric Update"],
    isAccessible: false,
  },
  {
    id: "19",
    name: "Bank Aadhaar Center - Secunderabad",
    address: "MG Road, Secunderabad",
    city: "Secunderabad",
    pincode: "500003",
    phone: "+91 4044556677",
    hours: "9:30 AM - 4:00 PM",
    isOpen: true,
    services: ["Mobile Link", "Email Update"],
    isAccessible: true,
  },
  // Pune
  {
    id: "20",
    name: "Aadhaar Seva Kendra - Koregaon Park",
    address: "Lane 6, Koregaon Park",
    city: "Pune",
    pincode: "411001",
    phone: "+91 2022334455",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "21",
    name: "CSC Aadhaar Center - Hinjewadi",
    address: "Phase 1, Hinjewadi IT Park",
    city: "Pune",
    pincode: "411057",
    phone: "+91 2033445566",
    hours: "10:00 AM - 6:00 PM",
    isOpen: true,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
  // Ahmedabad
  {
    id: "22",
    name: "Aadhaar Seva Kendra - CG Road",
    address: "CG Road, Navrangpura",
    city: "Ahmedabad",
    pincode: "380009",
    phone: "+91 7922334455",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "New Enrollment"],
    isAccessible: true,
  },
  {
    id: "23",
    name: "CSC Aadhaar Center - SG Highway",
    address: "Bodakdev, SG Highway",
    city: "Ahmedabad",
    pincode: "380054",
    phone: "+91 7933445566",
    hours: "10:00 AM - 6:00 PM",
    isOpen: false,
    services: ["Address Update", "Biometric Update"],
    isAccessible: true,
  },
  // Jaipur
  {
    id: "24",
    name: "Aadhaar Seva Kendra - MI Road",
    address: "MI Road, Near Panch Batti",
    city: "Jaipur",
    pincode: "302001",
    phone: "+91 1412233445",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "25",
    name: "CSC Aadhaar Center - Vaishali Nagar",
    address: "Main Road, Vaishali Nagar",
    city: "Jaipur",
    pincode: "302021",
    phone: "+91 1413344556",
    hours: "10:00 AM - 5:30 PM",
    isOpen: true,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
  // Lucknow
  {
    id: "26",
    name: "Aadhaar Seva Kendra - Hazratganj",
    address: "MG Road, Hazratganj",
    city: "Lucknow",
    pincode: "226001",
    phone: "+91 5222233445",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "New Enrollment"],
    isAccessible: true,
  },
  {
    id: "27",
    name: "Post Office Aadhaar Kendra - Gomti Nagar",
    address: "Vibhuti Khand, Gomti Nagar",
    city: "Lucknow",
    pincode: "226010",
    phone: "+91 5223344556",
    hours: "9:00 AM - 4:30 PM",
    isOpen: true,
    services: ["Address Update", "Mobile Link", "Name Correction"],
    isAccessible: true,
  },
  // Chandigarh
  {
    id: "28",
    name: "Aadhaar Seva Kendra - Sector 17",
    address: "Sector 17, Near ISBT",
    city: "Chandigarh",
    pincode: "160017",
    phone: "+91 1722233445",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "Address Update"],
    isAccessible: true,
  },
  {
    id: "29",
    name: "CSC Aadhaar Center - Sector 35",
    address: "Sector 35-C, Market",
    city: "Chandigarh",
    pincode: "160035",
    phone: "+91 1723344556",
    hours: "10:00 AM - 6:00 PM",
    isOpen: false,
    services: ["New Enrollment", "Biometric Update"],
    isAccessible: false,
  },
  // Kochi
  {
    id: "30",
    name: "Aadhaar Seva Kendra - Kakkanad",
    address: "Infopark Road, Kakkanad",
    city: "Kochi",
    pincode: "682030",
    phone: "+91 4842233445",
    hours: "9:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Biometric Update", "Mobile Link", "New Enrollment"],
    isAccessible: true,
  },
  {
    id: "31",
    name: "CSC Aadhaar Center - Ernakulam",
    address: "MG Road, Ernakulam",
    city: "Kochi",
    pincode: "682011",
    phone: "+91 4843344556",
    hours: "10:00 AM - 5:00 PM",
    isOpen: true,
    services: ["Address Update", "Biometric Update"],
    isAccessible: true,
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
              {query.trim() ? `Showing results for "${query}"` : "Showing all locations"}
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
