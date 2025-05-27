
import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { PaperAirplaneIcon, CogIcon, BeakerIcon, CodeBracketIcon, ShieldCheckIcon, CheckBadgeIcon, UsersIcon, InformationCircleIcon, CubeTransparentIcon, MegaphoneIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

const ResearchPage: React.FC = () => {
  return (
    <PageSection title="研究分野">
      <Card className="mb-12 bg-sky-800/50 text-sky-100">
        <h3 className="text-2xl font-semibold text-orange-400 mb-4 text-center">趣味: 紙飛行機と工学の出会い</h3>
        <div className="flex flex-col md:flex-row items-center justify-around mb-6 text-center">
          <div className="flex flex-col items-center p-4">
            <PaperAirplaneIcon className="w-12 h-12 text-orange-400 mb-2" />
            <p className="font-semibold">紙飛行機</p>
          </div>
          <div className="text-orange-400 text-3xl font-bold mx-4 hidden md:block">&rarr;</div>
          <div className="text-orange-400 text-3xl font-bold my-2 md:hidden">&darr;</div>
          <div className="flex flex-col items-center p-4">
            <CogIcon className="w-12 h-12 text-orange-400 mb-2" />
            <p className="font-semibold">工学的思考</p>
          </div>
          <div className="text-orange-400 text-3xl font-bold mx-4 hidden md:block">&rarr;</div>
           <div className="text-orange-400 text-3xl font-bold my-2 md:hidden">&darr;</div>
          <div className="flex flex-col items-center p-4">
            <BeakerIcon className="w-12 h-12 text-orange-400 mb-2" />
            <p className="font-semibold">研究活動</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Card title="子どもの頃からの趣味" className="bg-sky-700/70">
            <p>紙飛行機作りは子どもの頃からの趣味です。様々な形や折り方を試すことで、創造力を育みました。</p>
          </Card>
          <Card title="工学的発想の源泉" className="bg-sky-700/70">
            <p>紙飛行機の設計・飛行には、航空力学や材料特性など物理や工学の知識が活かされています。試行錯誤の過程で工学的思考が養われました。</p>
          </Card>
          <Card title="研究へのつながり" className="bg-sky-700/70">
            <p>紙飛行機から学んだ「設計と検証」のプロセスは、システムの安全性・信頼性研究にも通じる部分があります。小さな変更が大きな結果をもたらす複雑さの理解にも役立っています。</p>
          </Card>
        </div>
      </Card>

      <PageSection title="研究分野の全体像" titleClassName="text-3xl !mb-6 text-sky-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="ソフトウェア工学" icon={<CodeBracketIcon className="w-10 h-10" />}>
            <p>システム開発の方法論と技術的基盤</p>
          </Card>
          <Card title="プログラミング言語" icon={<AcademicCapIcon className="w-10 h-10" />}>
            <p>ソフトウェアの表現と実装基盤</p>
          </Card>
          <Card title="システムの安全性" icon={<ShieldCheckIcon className="w-10 h-10" />}>
            <p>事故・損害を防ぐための技術と方法論</p>
          </Card>
          <Card title="ディペンダビリティ" icon={<CheckBadgeIcon className="w-10 h-10" />}>
            <p>安全・安心に直結する概念</p>
            <p className="text-xs text-orange-500 mt-1">※詳細は次のセクションで</p>
          </Card>
          <Card title="システム保証" icon={<MegaphoneIcon className="w-10 h-10" />}>
            <p>ステークホルダーへの納得の提供</p>
             <p className="text-xs text-orange-500 mt-1">※詳細は続くセクションで</p>
          </Card>
        </div>
      </PageSection>

      <PageSection title="ディペンダビリティとは？" titleClassName="text-3xl !mb-6 text-sky-100">
        <Card className="bg-sky-800/50 text-sky-100">
          <div className="flex items-center mb-4">
            <ShieldCheckIcon className="w-10 h-10 mr-3 text-orange-400" />
            <h4 className="text-2xl font-semibold text-orange-400">ディペンダビリティの概念</h4>
          </div>
          <p className="mb-4">「安全・安心」に直結する重要な概念です。システムが信頼でき、依存できる性質を表します。</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-2">現代社会では、私たちの生活を支える様々な「システム」が対象となります:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>自動車</li>
                <li>飛行機</li>
                <li>スマートフォン</li>
                <li>医療機器</li>
                <li>社会インフラ</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center p-3 bg-sky-700/70 rounded-lg"><CubeTransparentIcon className="w-8 h-8 text-orange-400 mb-1"/>自動車</div>
                <div className="flex flex-col items-center p-3 bg-sky-700/70 rounded-lg"><PaperAirplaneIcon className="w-8 h-8 text-orange-400 mb-1 -rotate-45"/>飛行機</div>
                <div className="flex flex-col items-center p-3 bg-sky-700/70 rounded-lg"><CubeTransparentIcon className="w-8 h-8 text-orange-400 mb-1"/>スマートフォン</div>
                <div className="flex flex-col items-center p-3 bg-sky-700/70 rounded-lg"><CubeTransparentIcon className="w-8 h-8 text-orange-400 mb-1"/>医療機器</div>
            </div>
          </div>
           <p className="mt-6 bg-orange-500/20 p-3 rounded-md text-orange-300">
            <InformationCircleIcon className="w-6 h-6 inline mr-2" />
            システムの複雑化に伴い、ディペンダビリティの重要性は増大しています。
          </p>
          <p className="mt-4"><strong>研究テーマ:</strong> 「システムがどのようにあれば安全・安心になるか」を追求することで、社会全体の安全性向上に貢献します。</p>
        </Card>
      </PageSection>

      <PageSection title="システム保証とは？" titleClassName="text-3xl !mb-6 text-sky-100">
        <Card className="bg-sky-800/50 text-sky-100">
          <div className="flex items-center mb-4">
            <MegaphoneIcon className="w-10 h-10 mr-3 text-orange-400" />
            <h4 className="text-2xl font-semibold text-orange-400">システム保証の定義</h4>
          </div>
          <p className="mb-6">システムの関係者 (ステークホルダー) に「このシステムは安全・安心です」と納得してもらうための活動</p>
          <div className="flex flex-col md:flex-row items-center justify-around text-center mb-8 p-4 bg-sky-700/70 rounded-lg">
            <div className="flex flex-col items-center m-2"><UsersIcon className="w-10 h-10 text-orange-400 mb-1"/>ステークホルダー</div>
            <div className="text-orange-400 text-2xl font-bold mx-4 hidden md:block">&rarr;</div>
            <div className="text-orange-400 text-2xl font-bold my-2 md:hidden">&darr;</div>
            <div className="border-2 border-orange-400 p-3 rounded flex flex-col items-center m-2"><ShieldCheckIcon className="w-10 h-10 text-orange-400 mb-1"/>システム保証</div>
            <div className="text-orange-400 text-2xl font-bold mx-4 hidden md:block">&rarr;</div>
            <div className="text-orange-400 text-2xl font-bold my-2 md:hidden">&darr;</div>
            <div className="flex flex-col items-center m-2"><CubeTransparentIcon className="w-10 h-10 text-orange-400 mb-1"/>システム</div>
          </div>
          <Card title="D-Case プロジェクト" className="bg-sky-700/70">
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>システムの安全性・信頼性を論理的に説明するための手法</li>
              <li>安全性主張の構造化と可視化を実現</li>
              <li>多様なステークホルダー間の合意形成を支援</li>
              <li><InformationCircleIcon className="w-5 h-5 inline mr-1" /> 詳細は研究室HPを参照</li>
            </ul>
          </Card>
        </Card>
      </PageSection>
    </PageSection>
  );
};

export default ResearchPage;
