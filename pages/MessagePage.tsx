
import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { LightBulbIcon, MagnifyingGlassIcon, UsersIcon, BeakerIcon, ArrowPathIcon, UserGroupIcon, AcademicCapIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';

const MessagePage: React.FC = () => {
  return (
    <PageSection title="今後の課題と展望・1年生へのメッセージ">
      <Card className="mb-12 bg-sky-800/50 text-sky-100">
        <h3 className="text-2xl font-semibold text-orange-400 mb-6 text-center">今後の課題と展望</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="合意形成の阻害要因分析" icon={<MagnifyingGlassIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>合意形成を妨げる要因の詳細分析</li>
              <li>追加対策の導入と検証</li>
              <li>証拠のさらなる収集と強化</li>
              <li>Safety Status Reportの構造改善</li>
            </ul>
          </Card>
          <Card title="外部ステークホルダーへの拡張" icon={<UserGroupIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>行政機関との合意形成プロセス構築</li>
              <li>市民・地域コミュニティへの説明方法</li>
              <li>多様なステークホルダー間の利害調整</li>
              <li>合意形成のスケーラビリティ向上</li>
            </ul>
          </Card>
          <Card title="他分野への応用可能性" icon={<BeakerIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
              <li>医療システムへの適用</li>
              <li>金融インフラへの応用</li>
              <li>スマートシティ開発への展開</li>
              <li>L4自動運転以外の複雑システム開発</li>
            </ul>
          </Card>
        </div>
      </Card>

      <Card className="bg-sky-800/50 text-sky-100">
        <h3 className="text-2xl font-semibold text-orange-400 mb-6 text-center">1年生へのメッセージ</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="「安全・安心」は技術だけでなく人々の合意形成が不可欠" icon={<UsersIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <p className="text-sm">システムの「安全・安心」を保証するには、技術的な側面だけでなく、多様な人々の意見を取り入れ、合意形成を図ることが重要です。技術と人間の関わりを常に意識しましょう。</p>
          </Card>
          <Card title="自由な発想と工学的探究心を大切に" icon={<LightBulbIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <p className="text-sm">紙飛行機のように、自由な発想と工学的探究心を持って挑戦してください。失敗を恐れず、好奇心を持ち続けることが、新しい価値を創造する原動力になります。</p>
          </Card>
          <Card title="基礎から応用、社会実装まで幅広く学ぶ" icon={<AcademicCapIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <p className="text-sm">研究室では、基礎理論から応用、社会実装まで幅広く学べる環境を用意しています。様々な知識を横断的に学び、実社会の課題解決に活かしていきましょう。</p>
          </Card>
          <Card title="興味とアイデアを大切に共に新しい価値を" icon={<PresentationChartLineIcon className="w-8 h-8" />} className="bg-sky-700/70">
            <p className="text-sm">あなたの興味やアイデアを大切にし、共に新しい価値を創造していきましょう。一人ひとりの視点が、これからの「安全・安心」なシステム構築に不可欠です。</p>
          </Card>
        </div>
      </Card>
    </PageSection>
  );
};

export default MessagePage;
