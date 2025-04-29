// /diamondlink/js/search-teams-result.js

document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);

  const prefecture = urlParams.get('search-prefecture') || '';
  const competition = urlParams.get('search-competition') || '';
  const division = urlParams.get('search-division') || '';
  const teamType = urlParams.get('search-team') || '';
  const keyword = urlParams.get('search-keyword') || '';

  // ダミーチームから条件に一致するものだけ絞り込み
  const filteredTeams = dummyTeams.filter(teamData => {
    if (prefecture && teamData.prefecture !== prefecture) return false;
    if (competition && teamData.competition !== competition) return false;
    if (division && teamData.division !== division) return false;
    if (teamType && teamData.teamType !== teamType) return false;
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      if (
        !teamData.name.toLowerCase().includes(lowerKeyword) &&
        !teamData.description.toLowerCase().includes(lowerKeyword)
      ) {
        return false;
      }
    }
    return true;
  });

  const teamList = document.getElementById('team-list');
  teamList.innerHTML = '';

  if (filteredTeams.length === 0) {
    teamList.innerHTML = '<p>条件に一致するチームがありませんでした。</p>';
  } else {
    filteredTeams.forEach(team => {
      const a = document.createElement('a');
      a.href = `/diamondlink/teams/${team.id}.html`; // ← チームIDでリンク！
      a.className = 'team-card';
      a.innerHTML = `
        <div class="team-card-inner">
          <div class="team-thumbnail">
            <img src="${team.thumbnail}" alt="サムネイル">
          </div>
          <div class="team-info">
            <h3 class="team-name">${team.name}</h3>
            <p class="team-meta">
              ${team.prefecture} ${team.competition}・${team.division} ${team.teamType}
            </p>
            <p class="team-practice">
              練習日：毎週 土曜日
            </p>
            <div class="team-sns">
              ${team.xUrl ? `<a href="${team.xUrl}" target="_blank"><img src="/diamondlink/images/icon-x.svg" alt="X"></a>` : ''}
              ${team.instagramUrl ? `<a href="${team.instagramUrl}" target="_blank"><img src="/diamondlink/images/icon-instagram.svg" alt="Instagram"></a>` : ''}
              ${team.youtubeUrl ? `<a href="${team.youtubeUrl}" target="_blank"><img src="/diamondlink/images/icon-youtube.svg" alt="YouTube"></a>` : ''}
            </div>
            <p class="team-description">
              ${team.description}
            </p>
          </div>
        </div>
      `;
      teamList.appendChild(a);
    });
  }
});
