// dummy-team-list.js

// 仮のチームデータ
const dummyTeams = [
  {
    name: "東京スラッガーズ",
    prefecture: "東京都",
    competition: "野球",
    division: "軟式",
    gender: "男子",
    ageGroup: "一般",
    introduction: "週末中心に活動している社会人野球チームです。初心者も大歓迎！"
  },
  {
    name: "横浜フェアリーズ",
    prefecture: "神奈川県",
    competition: "ソフトボール",
    division: "ゴム",
    gender: "女子",
    ageGroup: "一般",
    introduction: "楽しく、真剣にプレーする女子ソフトボールチームです！"
  },
  {
    name: "名古屋バッファローズ",
    prefecture: "愛知県",
    competition: "野球",
    division: "硬式",
    gender: "男子",
    ageGroup: "高校生",
    introduction: "甲子園出場を目指して日々練習しています！"
  },
  {
    name: "大阪ドリームス",
    prefecture: "大阪府",
    competition: "ソフトボール",
    division: "革",
    gender: "混合",
    ageGroup: "一般",
    introduction: "男女混合の楽しいソフトボールチームです。初心者もOK！"
  }
];

// 画面に一覧を表示する処理
document.addEventListener('DOMContentLoaded', function() {
  const teamList = document.getElementById('team-list');

  if (teamList) {
    dummyTeams.forEach(team => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${team.name}</strong><br>
        【地域】${team.prefecture}｜【競技】${team.competition}（${team.division}）<br>
        【チーム構成】${team.gender}｜【年齢層】${team.ageGroup}<br>
        【紹介】${team.introduction}
      `;
      teamList.appendChild(li);
    });
  }
});
