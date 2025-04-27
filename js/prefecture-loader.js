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
