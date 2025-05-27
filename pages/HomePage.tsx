
import React from 'react';
import { PaperAirplaneIcon, ArrowRightIcon, TruckIcon } from '@heroicons/react/24/solid';
import { PROFESSOR_INFO } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 mb-6">
          システム安全性とディペンダビリティ
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-sky-200 mb-10">
          紙飛行機から自動運転まで
        </p>
        <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-12">
          <PaperAirplaneIcon className="h-12 w-12 md:h-16 md:w-16 text-orange-400 transform -rotate-45" />
          <ArrowRightIcon className="h-8 w-8 md:h-10 md:w-10 text-sky-300" />
          <TruckIcon className="h-12 w-12 md:h-16 md:w-16 text-orange-400" />
        </div>
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-xl">
          <p className="text-2xl md:text-3xl font-semibold text-sky-100">{PROFESSOR_INFO.name} {PROFESSOR_INFO.title}</p>
          <p className="text-lg md:text-xl text-sky-200 mt-2">{PROFESSOR_INFO.department}</p>
          <a href={`mailto:${PROFESSOR_INFO.email}`} className="text-lg md:text-xl text-orange-400 hover:text-orange-300 transition-colors mt-2 inline-block">
            {PROFESSOR_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
