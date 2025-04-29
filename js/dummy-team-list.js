// dummy-team-list.js

const dummyTeams = [];

const prefectures = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

const competitions = ["野球", "ソフトボール"];
const divisions = {
  "野球": ["軟式", "準硬式", "硬式"],
  "ソフトボール": ["ゴム", "革"]
};
const teamTypes = ["男子", "女子", "混合"];

for (let i = 1; i <= 100; i++) {
  const prefecture = prefectures[Math.floor(Math.random() * prefectures.length)];
  const competition = competitions[Math.floor(Math.random() * competitions.length)];
  const divisionList = divisions[competition];
  const division = divisionList[Math.floor(Math.random() * divisionList.length)];
  const teamType = teamTypes[Math.floor(Math.random() * teamTypes.length)];
  
  dummyTeams.push({
    name: `ダミーチーム${i}`,
    prefecture: prefecture,
    competition: competition,
    division: division,
    teamType: teamType,
    description: `${prefecture}で活動する${competition}チーム（${teamType}）です！`
  });
}
