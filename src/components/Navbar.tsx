// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-end space-x-3">
          <img src="/public/SDA Logo.png" alt="Logo" className="h-14 w-14 object-contain" />
          <h1 className="text-l leading-tight">
            <span className="block">Seventh-day Kangemi</span>
            <span className="block">Adventist Church</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
