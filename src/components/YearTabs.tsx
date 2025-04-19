import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface YearTabsProps {
  programId: string;
  currentYear?: number;
  totalYears: number;
}

const YearTabs: React.FC<YearTabsProps> = ({ programId, currentYear, totalYears }) => {
  const navigate = useNavigate();
  const { year } = useParams<{ year?: string }>();
  
  const selectedYear = currentYear || parseInt(year || '1');
  
  const handleYearChange = (year: number) => {
    navigate(`/programs/${programId}/year/${year}`);
  };
  
  return (
    <div className="flex border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
      {[...Array(totalYears)].map((_, index) => {
        const yearNumber = index + 1;
        const isActive = selectedYear === yearNumber;
        
        return (
          <button
            key={`year-${yearNumber}`}
            onClick={() => handleYearChange(yearNumber)}
            className={`py-3 px-6 font-medium transition-colors border-b-2 -mb-px relative whitespace-nowrap ${
              isActive
                ? 'text-primary-700 border-primary-600'
                : 'text-gray-500 border-transparent hover:text-primary-600 hover:border-primary-300'
            }`}
          >
            {`${yearNumber}ère Année`}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default YearTabs;