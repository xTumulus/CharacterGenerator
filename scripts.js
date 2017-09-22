const defStr;
const defDex;
const defCon;
const defIntl;
const defWis;
const defCha;

var str = document.getElementById('str');
var dex = document.getElementById('dex');
var con = document.getElementById('con');
var intl = document.getElementById('intl');
var wis = document.getElementById('wis');
var cha = document.getElementById('cha');

function abilityGen() {
  baseStr = Math.floor(Math.random() * 14) + 5;
  baseDex = Math.floor(Math.random() * 14) + 5;
  baseCon = Math.floor(Math.random() * 14) + 5;
  baseIntl = Math.floor(Math.random() * 14) + 5;
  baseWis = Math.floor(Math.random() * 14) + 5;
  baseCha = Math.floor(Math.random() * 14) + 5;
  
  str.value = baseStr;
  dex.value = baseDex;
  con.value = baseCon;
  intl.value = baseIntl;
  wis.value = baseWis;
  cha.value = baseCha;
}

function onSelectRace() {
  let race = document.getElementById('race').value;

  setToDefault();
  if(race === 'Dwarf') {
    con += 2;
    cha -= 2;
  }
  if(race === 'Elf') {
    dex += 2;
    con -= 2;
  }
  if(race === 'Gnome') {
    con += 2;
    str -= 2;
  }
  if(race === 'Half-Elf') {
    //no modifier change
  }
  if(race === 'Half-Orc') {
    str += 2;
    cha -= 2;
    intl -= 2;
  }
  if(race === 'Halfling') {
    dex += 2;
    str -= 2;
  }
  if(race === 'Human') {
    //no modifier change
  }
}

function getModifiers(value)
{
  if(value === 1)
  {
    return -5;
  }
  else if(value <= 3)
  {
    return -4;
  }
  else if(value <= 5)
  {
    return -3;
  }
  else if(value <= 7)
  {
    return -2;
  }
  else if(value <= 9)
  {
    return -1;
  }
  else if(value <= 11)
  {
    return 0;
  }
  else if(value <= 13)
  {
    return 1;
  }
  else if(value <= 15)
  {
    return 2;
  }
  else if(value <= 17)
  {
    return 3;
  }
  else if(value <= 19)
  {
    return 4;
  }
  else if(value === 20)
  {
    return 5;
  }
}

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
