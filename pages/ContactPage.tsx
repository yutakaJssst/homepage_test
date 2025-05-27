
import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { ChatBubbleLeftEllipsisIcon, EnvelopeIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import { PROFESSOR_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <PageSection title="課題・連絡先">
      <Card className="text-center bg-sky-800/50 text-sky-100">
        <ChatBubbleLeftEllipsisIcon className="w-16 h-16 text-orange-400 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-orange-400 mb-3">質問や感想、考えたことを書いてください</h3>
        <p className="text-lg text-sky-200 mb-6">締切は今日までです (スライドの指示)</p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-sky-700/70 rounded-lg">
                <div className="flex items-center mb-3">
                    <EnvelopeIcon className="w-8 h-8 text-orange-400 mr-3" />
                    <h4 className="text-xl font-semibold text-orange-300">メールでのお問い合わせ</h4>
                </div>
                <p className="text-sky-200">お問い合わせも歓迎します。</p>
                <a href={`mailto:${PROFESSOR_INFO.email}`} className="mt-2 inline-block text-orange-400 hover:text-orange-300 transition-colors break-all">
                    {PROFESSOR_INFO.email}
                </a>
            </div>
            <div className="p-6 bg-sky-700/70 rounded-lg">
                <div className="flex items-center mb-3">
                    <BuildingLibraryIcon className="w-8 h-8 text-orange-400 mr-3" />
                    <h4 className="text-xl font-semibold text-orange-300">研究室見学</h4>
                </div>
                <p className="text-sky-200">研究室見学も随時受け付けています。お気軽にご連絡ください。</p>
            </div>
        </div>
      </Card>
    </PageSection>
  );
};

export default ContactPage;
