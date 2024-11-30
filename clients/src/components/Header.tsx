import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Anchor size={32} />
          <span className="text-2xl font-bold">Marine Surveyor</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            <li><Link to="/login" className="hover:text-blue-300">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;