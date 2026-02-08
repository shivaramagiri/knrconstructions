import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const p = properties.find(x => x.id === id);
  if (!p) return null;

  return (
    <div className="p-10">
      <img src={p.image} className="rounded-xl mb-6" />
      <h2 className="text-3xl font-bold">{p.title}</h2>
      <p>{p.location}</p>
      <p>{p.price}</p>
      <a href={p.brochure} className="inline-block mt-4 bg-yellow-400 px-6 py-3 rounded">
        Download Brochure
      </a>
    </div>
  );
}