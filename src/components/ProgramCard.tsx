import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={program.image} 
          alt={program.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-4">
          <span className="px-2 py-1 text-xs font-medium text-white bg-primary-700 rounded-md">
            {program.shortName}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-grow p-5">
        <h3 className="mb-2 text-xl font-semibold font-serif text-gray-900">{program.name}</h3>
        <p className="mb-4 text-gray-600 flex-grow line-clamp-3">
          {program.description.substring(0, 150)}...
        </p>
        <Link 
          to={`/programs/${program.id}`}
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
        >
          Découvrir la filière
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;