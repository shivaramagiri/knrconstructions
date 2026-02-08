import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow">
      <img src={property.image} className="h-52 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{property.title}</h3>
        <p>📍 {property.location}</p>
        <p>{property.price}</p>
        <Link to={`/property/${property.id}`} className="block mt-3 bg-yellow-400 py-2 text-center rounded">
          View Details
        </Link>
      </div>
    </div>
  );
}