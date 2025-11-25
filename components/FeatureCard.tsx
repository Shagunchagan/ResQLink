import React from 'react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white group h-full">
      <div className="mb-6 text-gray-800 group-hover:text-blue-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;