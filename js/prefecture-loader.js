document.addEventListener('DOMContentLoaded', function() {
  const prefectureSelect = document.getElementById('prefecture');

  if (prefectureSelect) {
    fetch('/diamondlink/json/prefecture.json')
      .then(response => response.json())
      .then(data => {
        prefectureSelect.innerHTML = '<option value="">選択してください</option>';

        for (const region in data) {
          const optgroup = document.createElement('optgroup');
          optgroup.label = region;

          data[region].forEach(pref => {
            const option = document.createElement('option');
            option.value = pref;
            option.textContent = pref;
            optgroup.appendChild(option);
          });

          prefectureSelect.appendChild(optgroup);
        }
      })
      .catch(error => {
        console.error('都道府県リストの読み込みに失敗しました:', error);
      });
  }
});
// 都道府県選択後、市区町村を更新
document.addEventListener('DOMContentLoaded', function() {
  const prefectureSelect = document.getElementById('prefecture');
  const citySelect = document.getElementById('city-select'); // 市区町村選択

  prefectureSelect.addEventListener('change', function() {
    const selectedPrefecture = this.value; // 選ばれた都道府県

    // 市区町村をリセット
    citySelect.innerHTML = '<option value="">選択してください</option>';

    if (selectedPrefecture) {
      fetch('/diamondlink/json/prefecture_city.json') // 市区町村のJSONを読み込む
        .then(response => response.json())
        .then(data => {
          const cities = data[selectedPrefecture]; // 選ばれた都道府県の市区町村

          if (cities) {
            cities.forEach(city => {
              const option = document.createElement('option');
              option.value = city;
              option.textContent = city;
              citySelect.appendChild(option); // 市区町村を追加
            });
          }
        })
        .catch(error => {
          console.error('市区町村リストの読み込みに失敗しました:', error);
        });
    }
  });
});
