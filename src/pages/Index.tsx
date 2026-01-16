import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CenterSearch from "@/components/CenterSearch";
import CitizenServices from "@/components/CitizenServices";
import CenterResults from "@/components/CenterResults";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilters, setSearchFilters] = useState<string[]>(["all"]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query: string, filters: string[]) => {
    setSearchQuery(query);
    setSearchFilters(filters);
    setHasSearched(query.trim().length > 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CenterSearch onSearch={handleSearch} />
        <CitizenServices />
        {hasSearched && (
          <CenterResults query={searchQuery} filters={searchFilters} />
        )}
        <Features />
        <Stats />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
