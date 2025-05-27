
import React from 'react';
import { PROFESSOR_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900/50 border-t border-sky-700 text-center py-8">
      <div className="container mx-auto px-4">
        <p className="text-sm text-sky-300">
          {PROFESSOR_INFO.department}
        </p>
        <p className="text-sm text-sky-300 mt-1">
          {PROFESSOR_INFO.name} ({PROFESSOR_INFO.nameReading}) - {PROFESSOR_INFO.email}
        </p>
        <p className="text-xs text-sky-400 mt-2">
          &copy; {new Date().getFullYear()} {PROFESSOR_INFO.name}. All rights reserved.
        </p>
        <p className="text-xs text-sky-500 mt-1">
          日本大学理工学部応用情報工学科1年生向け自己紹介・研究紹介 (スライド内容に基づく)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
