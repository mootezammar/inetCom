import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Student } from '../types';

interface StudentCardProps {
  student: Student;
  programId: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, programId }) => {
  return (
    <Link 
      to={`/programs/${programId}/students/${student.id}`}
      className="block"
    >
      <div className="card h-full flex flex-col overflow-hidden group">
        {/* Student Image */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={student.photo || 'https://via.placeholder.com/300'} 
            alt={student.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300?text=Photo+Indisponible';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {/* Student Info */}
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold font-serif text-gray-900">{student.name}</h3>
          <div className="mt-2 text-sm text-gray-600 space-y-1">
            <p className="flex items-center justify-between">
              <span>Année:</span>
              <span className="font-medium">{student.year}ème</span>
            </p>
            <p className="flex items-center justify-between">
              <span>Moyenne:</span>
              <span className="font-medium">{student.average.toFixed(1)}/20</span>
            </p>
          </div>
        </div>
        
        {/* View Details */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 group-hover:bg-primary-50 transition-colors">
          <span className="flex items-center text-sm font-medium text-primary-600">
            <User size={16} className="mr-1" />
            Voir le profil
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;