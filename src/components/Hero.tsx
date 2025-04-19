import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  cta?: {
    text: string;
    link: string;
  };
  overlay?: boolean;
  height?: 'small' | 'medium' | 'large';
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image, 
  cta, 
  overlay = true,
  height = 'large'
}) => {
  const heightClass = {
    small: 'h-64',
    medium: 'h-96',
    large: 'h-[500px]'
  }[height];
  
  return (
    <div 
      className={`relative ${heightClass} bg-gray-900 overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/50"></div>
      )}
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl mb-4 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                {subtitle}
              </p>
            )}
            
            {cta && (
              <Link 
                to={cta.link}
                className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors rounded-md bg-secondary-500 hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
              >
                {cta.text}
                <ChevronRight size={20} className="ml-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;