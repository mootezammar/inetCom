import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={24} className="text-secondary-400" />
              <span className="text-xl font-bold font-serif">InetCom</span>
            </div>
            <p className="mb-4 text-gray-300">
              Faculté spécialisée dans les technologies de l'information et de la communication, formant les ingénieurs de demain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Filières
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Filières */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Nos Filières</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/idsd" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Ingénierie des Données et Systèmes Décisionnels
                </Link>
              </li>
              <li>
                <Link to="/programs/telecom" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Télécommunications
                </Link>
              </li>
              <li>
                <Link to="/programs/info" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Informatique et Systèmes
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-serif">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-400 mt-1" />
                <span className="text-gray-300">Pôle Technologique, Sfax, Tunisie</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-secondary-400" />
                <span className="text-gray-300">+216 74 274 088</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-secondary-400" />
                <span className="text-gray-300">contact@enetcom.tn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="py-4 bg-gray-950">
        <div className="container-custom">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} InetCom. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;