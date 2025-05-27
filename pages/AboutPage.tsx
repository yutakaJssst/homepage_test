
import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { UserIcon, BuildingOffice2Icon, PuzzlePieceIcon, CodeBracketIcon, AcademicCapIcon, ShieldCheckIcon, HeartIcon, FilmIcon } from '@heroicons/react/24/solid';
import { PROFESSOR_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <PageSection title="自己紹介">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card title="基本情報" icon={<UserIcon className="w-10 h-10" />}>
          <p className="flex items-center"><UserIcon className="w-5 h-5 mr-2 text-orange-500" /> <strong>名前:</strong> {PROFESSOR_INFO.name} ({PROFESSOR_INFO.nameReading})</p>
          <p className="flex items-center"><BuildingOffice2Icon className="w-5 h-5 mr-2 text-orange-500" /> <strong>所属:</strong> {PROFESSOR_INFO.department} {PROFESSOR_INFO.title}</p>
          <p className="flex items-center"><PuzzlePieceIcon className="w-5 h-5 mr-2 text-orange-500" /> <strong>趣味:</strong> 模型飛行機、将棋</p>
        </Card>
        <Card title="専門分野" icon={<AcademicCapIcon className="w-10 h-10" />}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center p-3 bg-sky-50 rounded-lg">
              <CodeBracketIcon className="w-8 h-8 mb-1 text-orange-500" />
              <p className="text-sm text-center">ソフトウェア工学</p>
            </div>
            <div className="flex flex-col items-center p-3 bg-sky-50 rounded-lg">
              <AcademicCapIcon className="w-8 h-8 mb-1 text-orange-500" />
              <p className="text-sm text-center">プログラミング言語</p>
            </div>
            <div className="flex flex-col items-center p-3 bg-sky-50 rounded-lg">
              <ShieldCheckIcon className="w-8 h-8 mb-1 text-orange-500" />
              <p className="text-sm text-center">システムの安全性</p>
            </div>
            <div className="flex flex-col items-center p-3 bg-sky-50 rounded-lg">
              <HeartIcon className="w-8 h-8 mb-1 text-orange-500" />
              <p className="text-sm text-center">ディペンダビリティ</p>
            </div>
          </div>
        </Card>
      </div>

      <PageSection title="家族、趣味" titleClassName="text-3xl !mb-6 text-sky-100">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <img src="https://picsum.photos/seed/hobby1/400/300" alt="模型飛行機" className="rounded-md mb-2" />
            <p className="text-center">休日に武蔵野中央公園で模型飛行機を飛ばしています</p>
          </Card>
          <Card>
            <img src="https://picsum.photos/seed/hobby2/400/300" alt="紙飛行機大会" className="rounded-md mb-2" />
            <p className="text-center">紙飛行機大会で優勝</p>
          </Card>
          <Card>
            <img src="https://picsum.photos/seed/family1/400/300" alt="家族" className="rounded-md mb-2" />
            <p className="text-center">妻、娘(小学4年生)の3人家族</p>
          </Card>
        </div>
      </PageSection>
    </PageSection>
  );
};

export default AboutPage;
