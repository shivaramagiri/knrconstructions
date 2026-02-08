import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold">KNR Constructions</h1>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/apartments">Apartments</Link>
        <Link to="/villas">Villas</Link>
        <Link to="/commercial">Commercial</Link>
      </div>
    </nav>
  );
}