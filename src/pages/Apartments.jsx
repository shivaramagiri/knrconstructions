import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Apartments() {
  return (
    <div className="p-10 grid md:grid-cols-2 gap-8">
      {properties.filter(p => p.type === "apartment").map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </div>
  );
}