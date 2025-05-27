
export interface NavLinkItem {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { name: "ホーム", path: "/" },
  { name: "自己紹介", path: "/about" },
  { name: "研究分野", path: "/research" },
  { name: "研究室紹介", path: "/lab" },
  { name: "研究紹介：自動運転の安全性保証", path: "/research/auto-driving" },
  { name: "メッセージ", path: "/message" },
  { name: "課題・連絡先", path: "/contact" },
];

export const PROFESSOR_INFO = {
  name: "松野 裕",
  nameReading: "まつの ゆたか",
  title: "教授",
  department: "日本大学理工学部応用情報工学科",
  email: "matsuno.yutaka@nihon-u.ac.jp",
};
