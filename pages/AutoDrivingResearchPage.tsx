import React from 'react';
import PageSection from '../components/PageSection';
import Card from '../components/Card';
import { TruckIcon, ExclamationTriangleIcon, UsersIcon, WrenchScrewdriverIcon, LightBulbIcon, ChatBubbleBottomCenterTextIcon, DocumentChartBarIcon, CheckCircleIcon, TableCellsIcon, ChartBarIcon, DocumentMagnifyingGlassIcon, BeakerIcon, InformationCircleIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

const SubSectionTitle: React.FC<{ children: React.ReactNode, icon?: React.ReactNode }> = ({ children, icon }) => (
  <h4 className="text-2xl font-semibold text-orange-400 mb-4 mt-8 flex items-center">
    {icon && <span className="mr-3">{icon}</span>}
    {children}
  </h4>
);

const AutoDrivingResearchPage: React.FC = () => {
  const stakeholderCard = (title: string, items: string[], icon: React.ReactNode) => (
    <Card title={title} icon={icon} className="bg-sky-700/70 text-sky-100">
      <ul className="list-disc list-inside space-y-1 text-sm">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </Card>
  );

  return (
    <PageSection title="研究紹介：自動運転の安全性保証">
      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<TruckIcon className="w-8 h-8 text-orange-400" />}>自動運転の安全性研究</SubSectionTitle>
        <p className="mb-3">自動運転技術の社会実装には「安全性」と「ディペンダビリティ保証」が不可欠です。特にSAEレベル4 (L4) 自動運転システムは、以下の理由から安全性の確保が極めて重要です。</p>
        <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
          <li><strong>オープンシステムとしての課題:</strong> 環境や状況が常に変化し、リスクも多様化するため、従来の静的な安全性評価手法では不十分</li>
          <li><strong>多様なステークホルダーの存在:</strong> 技術者、経営層、現場スタッフ、利用者など、異なる立場の人々が納得できる「安全性の説明」と「合意形成」が必要</li>
          <li><strong>継続的な安全性保証の必要性:</strong> 一度の評価だけでなく、運用中も含めた継続的な安全性の確保と証明が求められる</li>
        </ul>
        
        <SubSectionTitle icon={<BeakerIcon className="w-8 h-8 text-orange-400" />}>実証研究: TIER IV L4自動運転</SubSectionTitle>
        <div className="text-center my-4">
            <img src="https://picsum.photos/seed/auto1/600/350" alt="TIER IV SAE L4 Automated Driving Demonstration" className="rounded-lg shadow-lg mx-auto" />
            <p className="text-xs mt-2 text-sky-300">Fig. 1. A Picture of TIER IV SAE L4 Automated Driving Demonstration (Placeholder)</p>
            <p className="text-sm mt-1 text-sky-200">TIER IV社主導のL4自動運転ミニバス実証実験</p>
        </div>
        <p className="bg-orange-500/20 p-3 rounded-md text-orange-300"><InformationCircleIcon className="w-5 h-5 inline mr-1" />TIER IVとの共同研究では多様なステークホルダー間での安全性合意形成プロセスの確立を目指しています</p>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<DocumentMagnifyingGlassIcon className="w-8 h-8 text-orange-400" />}>研究の背景: 自動運転技術の課題</SubSectionTitle>
        <p><strong>SAEレベル4 (L4) 自動運転とは:</strong> 特定の条件下で、人間の介入なしに自律的に運転できる高度な自動運転技術</p>
        <p className="mt-3 mb-1 font-semibold">「オープンシステム」としての課題:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>環境と状況の常時変化: 道路状況、天候、他の車両など、予測困難な要素が多数</li>
          <li>リスクの多様化: 環境変化に伴い、リスクも多様化・複雑化する</li>
        </ul>
        <p className="mt-3 mb-1 font-semibold">従来手法の限界:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>静的な安全性議論の不十分さ: 事前設計の安全議論だけでは変化する環境に対応できない</li>
          <li>ステークホルダー間の合意形成の難しさ: 技術者、経営層、現場スタッフなど多様な立場の合意が必要</li>
        </ul>
        <div className="text-center my-4">
            <img src="https://picsum.photos/seed/auto2/600/350" alt="TIER IV SAE L4 Automated Driving Demonstration" className="rounded-lg shadow-lg mx-auto" />
            <p className="text-xs mt-2 text-sky-300">Fig. 1. A Picture of TIER IV SAE L4 Automated Driving Demonstration (Placeholder)</p>
             <p className="text-sm mt-1 text-sky-200">TIER IV社によるSAEレベル4自動運転実証実験</p>
        </div>
        <p className="mt-4 p-3 bg-red-500/30 text-red-200 rounded-md font-semibold"><ExclamationTriangleIcon className="w-5 h-5 inline mr-1" /> 新たなアプローチが必要: 継続的な保証と多様なステークホルダー間の合意形成の方法論の確立</p>
      </Card>
      
      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<UsersIcon className="w-8 h-8 text-orange-400" />}>問題定義: 多様なステークホルダーの合意形成</SubSectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stakeholderCard("技術者", ["技術的妥当性", "テスト網羅性", "フェイルセーフ設計"], <WrenchScrewdriverIcon className="w-8 h-8" />)}
          {stakeholderCard("経営層", ["リスク管理", "コスト効率", "社会的受容性"], <BriefcaseIcon className="w-8 h-8" />)}
          {stakeholderCard("現場スタッフ", ["運用の実現性", "異常時対応", "実務的安全性"], <UsersIcon className="w-8 h-8" />)}
          {stakeholderCard("一般市民", ["分かりやすさ", "透明性", "信頼感"], <ChatBubbleLeftRightIcon className="w-8 h-8" />)}
        </div>
        <p className="font-semibold mb-2">合意形成の課題:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
          <li>GSN(後述)などの技術者向けAssurance Caseは非専門家には理解しづらい</li>
          <li>既存の安全性主張の妥当性評価(CAMs)は専門家中心で、合意形成には不十分</li>
          <li>ステークホルダーごとに安全性への期待や重視点が異なる</li>
          <li>一方的な安全報告(例:VSSA)は透明性や双方向性に欠ける</li>
        </ul>
        <p className="mt-4 p-3 bg-green-500/30 text-green-200 rounded-md font-semibold"><LightBulbIcon className="w-5 h-5 inline mr-1" /> 多様なステークホルダーが納得できる「安全性の説明」と「合意形成」の方法論が必要</p>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<ExclamationTriangleIcon className="w-8 h-8 text-orange-400" />}>現状の課題: 既存手法の限界</SubSectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-lg text-orange-300 mb-2">既存手法の技術的限界</h5>
            <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
              <li><strong>GSN (Goal Structuring Notation):</strong> 技術者向けの表記法で、非専門家には複雑で理解しづらい。安全性の主張が伝わりにくい。</li>
              <li><strong>CAMs (Confidence Assessment Methods):</strong> 妥当性評価は専門家中心のアプローチで、多様なステークホルダー間の合意形成には不十分。</li>
              <li><strong>標準・ガイドライン:</strong> UL 4600やSAFADなども、非専門家への説明や合意形成の仕組みが弱い。</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg text-orange-300 mb-2">実社会での課題</h5>
            <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
              <li><strong>多様な期待と優先事項:</strong> ステークホルダーごとに安全性への期待や重視点が異なり、一律の説明では納得が得られない。</li>
              <li><strong>双方向性の欠如:</strong> 一方的な安全報告(例:VSSA)は透明性や双方向性に欠け、真の合意形成には至らない。</li>
              <li><strong>合意形成プロセスの不在:</strong> 技術的妥当性と非専門家への説明を両立し、継続的に合意を形成するプロセスが未確立。</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-sky-700/70 rounded-lg text-center">
          <span className="font-semibold">技術者</span>
          <span className="mx-2 text-orange-400">&rlarr; コミュニケーションギャップ &rlarr;</span>
          <span className="font-semibold">非専門家ステークホルダー</span>
        </div>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<BeakerIcon className="w-8 h-8 text-orange-400" />}>実証実験: L4自動運転ミニバス</SubSectionTitle>
        <h5 className="font-semibold text-lg text-orange-300 mb-2">実験概要</h5>
        <ul className="list-disc list-inside space-y-1 pl-4 mb-4 text-sm">
          <li><strong>実施時期:</strong> 2025年1月 (予定)</li>
          <li><strong>場所:</strong> 長野県塩尻市 (予定)</li>
          <li><strong>主導:</strong> TIER IV社</li>
          <li><strong>実験目的:</strong> 内部ステークホルダー間での安全性合意形成プロセスの検証</li>
          <li><strong>対象:</strong> SAEレベル4 (L4) 自動運転ミニバス</li>
        </ul>
        <h5 className="font-semibold text-lg text-orange-300 mb-2">合意形成プロセス</h5>
        <ol className="list-decimal list-inside space-y-1 pl-4 mb-4 text-sm">
          <li>GSNモデルによるAssurance Case作成</li>
          <li>Safety Status Report作成 (平易な説明+現場データ+リスク分析)</li>
          <li>ステークホルダーへの説明・意見収集</li>
          <li>運用計画の修正・改善</li>
          <li>匿名アンケートによる合意度測定</li>
          <li>最終的な合意形成・実証実験実施</li>
        </ol>
        <div className="text-center my-4 p-3 bg-sky-700/70 rounded-lg">
          <p className="font-semibold text-orange-300">リスク軽減のための反復プロセス</p>
          <p className="text-xs mt-1">1. 初期GSN作成 &rarr; 2. 安全性ステータスレポートドラフト作成 &rarr; 3. 実世界フリート評価からのデータ収集 &rarr; 4. リスク軽減措置の追加 &rarr; 5. レポート改訂 &rarr; 6. 調査およびレベル4フィールド実証</p>
        </div>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<DocumentChartBarIcon className="w-8 h-8 text-orange-400" />}>GSNモデルとは？</SubSectionTitle>
        <p><strong>Goal Structuring Notation (GSN):</strong> 安全性主張を論理的に構築・可視化するための表記法</p>
        <p className="mt-3 mb-1 font-semibold">GSNの主要要素:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li><strong>ゴール (Goal):</strong> 達成すべき安全性目標</li>
          <li><strong>戦略 (Strategy):</strong> ゴール達成のための方法</li>
          <li><strong>証拠 (Evidence):</strong> ゴール達成を示す根拠</li>
        </ul>
        <p className="mt-3 mb-1 font-semibold">GSNの活用方法:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>トップゴール(例:「システムは安全」)から下位ゴールへ分解</li>
          <li>各ゴール間の論理的な繋がりを明示</li>
          <li>安全性主張の完全性・一貫性を確認</li>
          <li>ステークホルダー間での安全性議論の共通理解に活用</li>
        </ul>
        <div className="text-center my-4 p-3 bg-sky-700/70 rounded-lg">
           <p className="font-semibold text-orange-300">GSNの例</p>
           <p className="text-xs mt-1">トップゴール「システムは安全」 &rarr; 戦略「正常時と異常時で場合わけ」 &rarr; [サブゴール「正常時で安全」 &rarr; 証拠「テスト結果」] AND [サブゴール「異常時も安全」 &rarr; 証拠「検証記録」]</p>
           <img src="https://picsum.photos/seed/gsn-example/500/300" alt="GSNの例" className="rounded-lg shadow-md mx-auto mt-2" />
            <p className="text-xs mt-1 text-sky-300">(GSN構造の概念図 - Placeholder)</p>
        </div>
      </Card>
      
      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle>GSNモデルの例 (Fig. 5)</SubSectionTitle>
        <p className="mb-2 text-sm">以下はL4自動運転デモンストレーションのためのGSNモデルの例です。(出典：スライド資料)</p>
        <img src="https://picsum.photos/seed/gsn-fig5/700/500" alt="Fig. 5. GSN Model for L4 Automated Driving Demonstration" className="rounded-lg shadow-lg mx-auto" />
        <p className="text-xs mt-2 text-center text-sky-300">Fig. 5. GSN Model for L4 Automated Driving Demonstration (Placeholder)</p>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<ChatBubbleBottomCenterTextIcon className="w-8 h-8 text-orange-400" />}>Safety Status Reportの役割</SubSectionTitle>
        <p className="mt-3 mb-1 font-semibold">目的と特徴:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>非専門家にも分かりやすく安全性を説明するためのレポート</li>
          <li>現状の安全性・残留リスク・対策を平易に説明</li>
          <li>実際の運行データやリスク分析を反映し、継続的にアップデート</li>
        </ul>
        <p className="mt-3 mb-1 font-semibold">GSNモデルとの補完関係:</p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-sky-700/70 rounded-lg">
                <strong>GSNモデル:</strong>
                <ul className="list-disc list-inside pl-4">
                    <li>技術者向けの構造化された安全性主張</li>
                    <li>論理的な安全性証明に焦点</li>
                    <li>専門家には詳細だが非専門家には難解</li>
                </ul>
            </div>
            <div className="p-3 bg-sky-700/70 rounded-lg">
                <strong>Safety Status Report:</strong>
                <ul className="list-disc list-inside pl-4">
                    <li>GSNモデルを補完する平易な説明</li>
                    <li>現場データや運用記録を視覚的に提示</li>
                    <li>多様なステークホルダーの合意形成を促進</li>
                </ul>
            </div>
        </div>
        <p className="mt-3 mb-1 font-semibold">具体例: 危険事象の可視化:</p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>T字路(死角あり)での危険事象頻度の明示</li>
          <li>運転者介入の記録を具体的に図示</li>
          <li>これらの事象を「defeater(反証)」として組み込み</li>
          <li>運用計画や対策の改善に直結</li>
        </ul>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<TableCellsIcon className="w-8 h-8 text-orange-400" />}>実験効果: 合意度の可視化</SubSectionTitle>
        <h5 className="font-semibold text-lg text-orange-300 mb-2">ステークホルダーアンケート</h5>
        <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
            <li><strong>調査方法:</strong> GSNモデルの各ノードを4段階評価</li>
            <li><strong>回答者:</strong> 内部ステークホルダー21名 (回答率75%)</li>
            <li><strong>属性:</strong> 経営層、技術フェロー、アーキテクト、事業部、プロダクト部、R&D部</li>
        </ul>
        <p className="mt-3 mb-1 font-semibold">主な発見:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
            <li>戦略ノード (S1~S3) は高評価 (&gt;2.0) だが、ゴールノード (G1~G7) は低評価 (&lt;1.7)</li>
            <li>技術フェロー・プロダクト部はシステム安全性に懐疑的</li>
            <li>事業部は運用リスク管理 (G3) や全体ゴール (G1) に前向き</li>
            <li>技術者層は「テストカバレッジ不足」「第三者レビュー不足」を指摘</li>
        </ul>

        <h5 className="font-semibold text-lg text-orange-300 mt-6 mb-2">役割別の評価差異 (Table 1. Average stakeholder ratings (0-3) - grayscale heatmap)</h5>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-sky-100 bg-sky-700/70">
            <thead className="text-xs text-orange-300 uppercase bg-sky-800/50">
              <tr>
                <th scope="col" className="px-3 py-2">Organization</th>
                {['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'S1', 'S2', 'S3'].map(h => <th key={h} scope="col" className="px-2 py-2 text-center">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                { org: 'CxO (n=1)', scores: [2.0, 2.0, 2.0, 1.0, 1.0, 1.0, 2.0, 1.0, 2.0, 2.0] },
                { org: 'Fellow (n=2)', scores: [0.5, 2.0, 1.0, 0.0, 0.5, 0.5, 1.5, 1.0, 1.5, 1.0] },
                { org: 'Architect (n=1)', scores: [2.0, 0.0, 2.0, 1.0, 0.0, 2.0, 1.0, 3.0, 3.0, 3.0] },
                { org: 'Business Div. (n=5)', scores: [2.4, 1.4, 2.4, 0.8, 1.8, 2.0, 1.4, 3.0, 3.0, 2.4] },
                { org: 'Product Div. (n=10)', scores: [1.2, 0.9, 1.5, 1.1, 0.9, 1.5, 1.3, 2.8, 2.8, 2.4] },
                { org: 'R&D Div. (n=2)', scores: [2.0, 1.0, 1.5, 0.5, 1.0, 2.0, 2.0, 2.5, 3.0, 3.0] },
                { org: 'Overall (n=21)', scores: [1.6, 1.1, 1.7, 0.9, 1.0, 1.6, 1.4, 2.6, 2.7, 2.3], isBold: true },
              ].map(row => (
                <tr key={row.org} className={`border-b border-sky-800/80 ${row.isBold ? 'font-bold bg-sky-600/50' : ''}`}>
                  <td className="px-3 py-2 whitespace-nowrap">{row.org}</td>
                  {row.scores.map((score, i) => <td key={i} className="px-2 py-2 text-center">{score.toFixed(1)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-xs">
            <div className="p-2 bg-sky-700/50 rounded"><strong>経営層:</strong> 全体実現性を評価するが、ゴール達成の証拠強化を要望</div>
            <div className="p-2 bg-sky-700/50 rounded"><strong>技術フェロー:</strong> フェイルセーフ設計やテストカバレッジの不足を強く指摘</div>
            <div className="p-2 bg-sky-700/50 rounded"><strong>事業部:</strong> 評価期間やカバレッジの不足を懸念しつつ、早期デモには前向き</div>
            <div className="p-2 bg-sky-700/50 rounded"><strong>プロダクト部:</strong> 人間介入への依存や残留リスク管理に慎重な姿勢</div>
        </div>
      </Card>

      <Card className="mb-8 bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<ChartBarIcon className="w-8 h-8 text-orange-400" />}>Consensus Score: 合意形成の定量化</SubSectionTitle>
        <p className="font-semibold">Consensus Scoreとは:</p>
        <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
            <li><strong>定義:</strong> 各ゴールの評価値(0~3)を1/3で正規化(0~1)し、合意度を定量化</li>
            <li><strong>計算方法:</strong> トップダウン(直接評価)とボトムアップ(戦略・サブゴールの評価)の加重平均</li>
        </ul>
        <p className="mt-2 font-semibold">GSNモデルのConsensus Score分布 (Placeholder Image):</p>
        <img src="https://picsum.photos/seed/consensus-chart/600/200" alt="GSNモデルのConsensus Score分布" className="rounded-lg shadow-md mx-auto my-2" />
        
        <p className="mt-4 font-semibold">Table 2. Consensus Scores for the GSN model (Fig. 5).</p>
        <div className="overflow-x-auto shadow-md rounded-lg mt-1">
          <table className="w-full text-sm text-left text-sky-100 bg-sky-700/70">
            <thead className="text-xs text-orange-300 uppercase bg-sky-800/50">
              <tr>
                <th scope="col" className="px-3 py-2">Node</th>
                {['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7'].map(h => <th key={h} scope="col" className="px-2 py-2 text-center">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-sky-800/80">
                <td className="px-3 py-2 whitespace-nowrap font-semibold">Consensus Score</td>
                {[0.44, 0.33, 0.48, 0.30, 0.33, 0.53, 0.47].map((score, i) => <td key={i} className="px-2 py-2 text-center">{score.toFixed(2)}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-disc list-inside space-y-1 pl-4 mt-3 text-sm">
            <li>トップゴール(G1)の合意度は44%と限定的</li>
            <li>サブゴール(G4, G5)は30%台と低い。システムの安全性の基本性能に対する懸念</li>
        </ul>
      </Card>

      <Card className="bg-sky-800/50 text-sky-100">
        <SubSectionTitle icon={<CheckCircleIcon className="w-8 h-8 text-orange-400" />}>研究の成果と意義</SubSectionTitle>
        <p className="font-semibold mb-2">合意形成フレームワークの実証:</p>
        <div className="flex flex-col md:flex-row items-center justify-around text-center p-3 bg-sky-700/70 rounded-lg">
            <span>GSNモデル (技術的安全性構造化)</span> <span className="text-orange-400 font-bold mx-2">+</span>
            <span>Safety Status Report (平易な説明と現場データ)</span> <span className="text-orange-400 font-bold mx-2">+</span>
            <span>アンケート評価 (多様な視点の反映)</span>
        </div>
        <p className="mt-4 font-semibold">研究の意義と成果:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm">
            <div className="p-3 bg-sky-700/50 rounded-lg"><strong>合意形成の可視化:</strong> Consensus Scoreにより、合意形成の現状や課題を定量的に可視化することに成功</div>
            <div className="p-3 bg-sky-700/50 rounded-lg"><strong>ボトルネックの特定:</strong> 合意形成の「ボトルネック」を明確化し、今後の証拠収集や説明強化の指針を提示</div>
            <div className="p-3 bg-sky-700/50 rounded-lg"><strong>多様な視点の統合:</strong> ステークホルダーの多様な視点を反映し、運用計画や安全対策の改善に直結</div>
            <div className="p-3 bg-sky-700/50 rounded-lg"><strong>実用的な合意形成手法:</strong> 技術的な妥当性評価と受容度の可視化を両立した実践的なフレームワークを確立</div>
        </div>
      </Card>
    </PageSection>
  );
};

export default AutoDrivingResearchPage;