
import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  titleColor?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', icon, titleColor = 'text-sky-700' }) => {
  return (
    <div className={`bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-6 text-slate-700 hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      {icon && <div className="mb-4 text-orange-500">{icon}</div>}
      {title && <h3 className={`text-xl font-semibold mb-3 ${titleColor}`}>{title}</h3>}
      <div className="space-y-2 text-sm md:text-base">{children}</div>
    </div>
  );
};

export default Card;
