
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

function addItemFunction() {
  var  items = document.getElementById('itemTable');
  var row = items.insertRow(1);
  var nameCell = row.insertCell(0);
  var weigthCell = row.insertCell(1);
  var quantityCell = row.insertCell(2);
  nameCell.innerHTML = "<input type=\"text\" name=\"item name\" placeholder=\"Name\">";
  weigthCell.innerHTML = "<input type=\"text\" name=\"Weigth\" placeholder=\"0\" class=\"stat\">";
  quantityCell.innerHTML = "<input type=\"text\" name=\"Quantity\" placeholder=\"1\" class=\"stat\">";
}

function addMelee(){
  var  items = document.getElementById('weaponTable');
  var row = items.insertRow(1);
  var nameCell = row.insertCell(0);
  var bonusCell = row.insertCell(1);
  var damageCell = row.insertCell(2)
  var weigthCell = row.insertCell(3);
  nameCell.innerHTML = "<input type=\"text\" name=\"item name\" placeholder=\"Weapon\">";
  bonusCell.innerHTML = "<input type=\"text\" name=\"Bonus\" placeholder=\"0\" class=\"stat\">";
  damageCell.innerHTML = "<input type=\"text\" name=\"Damage\" placeholder=\"0\" class=\"stat\">";
  weigthCell.innerHTML = "<input type=\"text\" name=\"Weigth\" placeholder=\"0\" class=\"stat\">";
}

function addRanged(){
  var  items = document.getElementById('weaponTable');
  var row = items.insertRow(1);
  var nameCell = row.insertCell(0);
  var bonusCell = row.insertCell(1);
  var damageCell = row.insertCell(2)
  var weigthCell = row.insertCell(3);
  var ammoCell = row.insertCell(4);
  nameCell.innerHTML = "<input type=\"text\" name=\"item name\" placeholder=\"Weapon\">";
  bonusCell.innerHTML = "<input type=\"text\" name=\"Bonus\" placeholder=\"0\" class=\"stat\">";
  damageCell.innerHTML = "<input type=\"text\" name=\"Damage\" placeholder=\"0\" class=\"stat\">";
  weigthCell.innerHTML = "<input type=\"text\" name=\"Weigth\" placeholder=\"0\" class=\"stat\">";
  ammoCell.innerHTML = "<input type=\"text\" name=\"Ammo\" placeholder=\"0\" class=\"stat\">";
}

