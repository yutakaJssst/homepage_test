
import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { AcademicCapIcon, CodeBracketIcon, LightBulbIcon, UsersIcon, DocumentTextIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

const LabPage: React.FC = () => {
  return (
    <PageSection title="研究室・ゼミ活動紹介">
      <p className="text-center text-orange-400 mb-8 text-lg">(<a href="#/contact" className="hover:underline">研究室ホームページへのリンクは仮置き</a>)</p>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card title="学年ゼミ" icon={<AcademicCapIcon className="w-10 h-10" />} className="bg-sky-800/50 text-sky-100">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>学年ごとにゼミを実施</li>
            <li>学年に合わせた課題設定</li>
            <li>段階的な専門知識の習得</li>
          </ul>
          <p className="mt-4 text-center text-sm text-orange-300 p-2 bg-sky-700/70 rounded">グループ学習</p>
        </Card>
        <Card title="開発ゼミ" icon={<CodeBracketIcon className="w-10 h-10" />} className="bg-sky-800/50 text-sky-100">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>研究室HPの開発・運用</li>
            <li>学習支援アプリの開発</li>
            <li>実践的な開発スキルの習得</li>
          </ul>
          <p className="mt-4 text-center text-sm text-orange-300 p-2 bg-sky-700/70 rounded">実践プロジェクト</p>
        </Card>
        <Card title="学生主体の活動" icon={<LightBulbIcon className="w-10 h-10" />} className="bg-sky-800/50 text-sky-100">
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>学生発案のゼミテーマ</li>
            <li>自主的な研究活動</li>
            <li>多様なゼミ活動の展開</li>
          </ul>
          <p className="mt-4 text-center text-sm text-orange-300 p-2 bg-sky-700/70 rounded">自主性重視</p>
        </Card>
      </div>
      <div className="text-center p-4 bg-orange-500/20 rounded-lg">
        <p className="text-lg font-semibold text-orange-300">「学生の興味や能力を活かした研究活動を推進しています」</p>
      </div>

      <PageSection title="研究室の方針と育成したい人材" titleClassName="text-3xl !mt-16 !mb-6 text-sky-100">
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="基礎から応用まで重視" icon={<DocumentTextIcon className="w-10 h-10" />} className="h-full">
            <p>ソフトウェア工学・コンピュータサイエンスの基礎知識を大切にしながら、実際の応用まで幅広く学べる環境を提供します。理論と実践のバランスを重視した教育を行います。</p>
          </Card>
          <Card title="社会で役立つ知識・スキル" icon={<BriefcaseIcon className="w-10 h-10" />} className="h-full">
            <p>卒業後に実社会で活躍できるよう、産業界で求められる実践的な知識やスキルを身につけられるカリキュラムを組んでいます。技術だけでなく、コミュニケーション能力も重視します。</p>
          </Card>
          <Card title="学生の興味・能力を活かす" icon={<SparklesIcon className="w-10 h-10" />} className="h-full">
            <p>一人ひとりの学生の興味や得意分野を尊重し、それを最大限に活かせるテーマ設定を推奨します。個性を大切にした研究指導を心がけています。</p>
          </Card>
          <Card title="自主的な研究をサポート" icon={<UsersIcon className="w-10 h-10" />} className="h-full">
            <p>学生が自ら考え提案する研究テーマも積極的にサポートします。主体性を持って研究に取り組む姿勢を育み、創造性と問題解決能力を高められる環境づくりを目指しています。</p>
          </Card>
        </div>
      </PageSection>
    </PageSection>
  );
};

export default LabPage;
