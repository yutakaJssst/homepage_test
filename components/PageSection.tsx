
import React from 'react';

interface PageSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ title, children, className = '', titleClassName = '' }) => {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      {title && (
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 ${titleClassName}`}>
          {title}
        </h2>
      )}
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
};

export default PageSection;
