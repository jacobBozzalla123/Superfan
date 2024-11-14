i1 = document.getElementById("eye1");
i2 = document.getElementById("ice1");
i3 = document.getElementById("plant1");
p1 = document.getElementById("player");
b1 = document.getElementById("phase2");
b2 = document.getElementById("damage");
function eyesound() {
  document.getElementById("boss1").play();
  document.getElementById("boss2").pause();
  document.getElementById("boss3").pause();
  document.getElementById("boss1").currentTime = 0;
}
function icesound() {
  document.getElementById("boss2").play();
  document.getElementById("boss1").pause();
  document.getElementById("boss3").pause();
  document.getElementById("boss2").currentTime = 0;
}
function plantsound() {
  document.getElementById("boss3").play();
  document.getElementById("boss2").pause();
  document.getElementById("boss1").pause();
  document.getElementById("boss3").currentTime = 0;
}
function damage() {
  i1.src = "images/eye2.png";
  i2.src = "images/ice2.png";
  i3.src = "images/plant2.png";
  b1.classList.remove("none");
}

function damage2() {
  i1.src = "images/eyebag.png";
  i2.src = "images/icebag.png";
  i3.src = "images/plantbag.png";
}

function reset() {
  i1.src = "images/eye1.png";
  i2.src = "images/ice1.png";
  i3.src = "images/plant1.png";
  b1.src = "images/phase2.png";
  b1.classList.add("none");
  document.getElementById("boss1").pause();
  document.getElementById("boss2").pause();
  document.getElementById("boss3").pause();
}
function playerMelee() {
  p1.src = "images/melee.png";
}
function playerRange() {
  p1.src = "images/range.png";
}
function playerMage() {
  p1.src = "images/mage.png";
}
function player() {
  p1.src = "images/player.png";
}
