function onChangeHP() {
  let barWidth;
  let barColor;
  let maxHP = document.getElementById('max-hp').value;
  let currentHP = document.getElementById('hp').value;
  console.log(currentHP, maxHP);

  let percentHP = currentHP / maxHP;
  console.log(percentHP);

  barWidth = (percentHP * 100) + '%';
  console.log(barWidth);

  if (percentHP <= .25) {
    barColor = 'red';
  } else if ( percentHP >= .5) {
    barColor = 'green';
  } else {
    barColor = 'yellow';
  }
  console.log(barColor);
  let hpBar = document.getElementById('hp-bar');

  hpBar.style.backgroundColor = barColor;
  hpBar.style.width = barWidth;
}

// $('.hp-bar').css('background-color', function(){
//     var percentage = parseInt($(this).data('size'), 10);
//     if (percentage > 0 && percentage < 25){
//         return '#a41818'
//     }
//     else if (percentage > 24 && percentage < 50) {
//         return '#87581c';
//     }
//     else if (percentage > 49 && percentage < 75) {
//         return '#997815';
//     }
//     else if (percentage > 74 && percentage < 90) {
//         return '#7ba01c';
//     }
//     else if (percentage > 89 && percentage <= 100) {
//         return '#3a8d24';
//     }
// });
