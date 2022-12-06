console.log("Hello from thr console!");

let homeScore = document.querySelector("#home-score");
let guestScore = document.querySelector("#guest-score");
let guest1 = document.querySelector("#guest-1");
let guest2 = document.querySelector("#guest-2");
let guest3 = document.querySelector("#guest-3");
let home1 = document.querySelector("#home-1");
let home2 = document.querySelector("#home-2");
let home3 = document.querySelector("#home-3");

let homeScoreValue = 0;
let guestScoreValue = 0;

function highlight() {
  if (homeScoreValue > guestScoreValue) {
    homeScore.classList.add("highlight");
    guestScore.classList.remove("highlight");
  }
  if (homeScoreValue < guestScoreValue) {
    guestScore.classList.add("highlight");
    homeScore.classList.remove("highlight");
  }
  if (homeScoreValue == guestScoreValue) {
    homeScore.classList.remove("highlight");
    guestScore.classList.remove("highlight");
  }
}

function addHome1() {
  homeScoreValue += 1;
  homeScore.textContent = homeScoreValue;
  highlight();
}

function addHome2() {
  homeScoreValue += 2;
  homeScore.textContent = homeScoreValue;
  highlight();
}

function addHome3() {
  homeScoreValue += 3;
  homeScore.textContent = homeScoreValue;
  highlight();
}

function addGuest1() {
  guestScoreValue += 1;
  guestScore.textContent = guestScoreValue;
  highlight();
}

function addGuest2() {
  guestScoreValue += 2;
  guestScore.textContent = guestScoreValue;
  highlight();
}

function addGuest3() {
  guestScoreValue += 3;
  guestScore.textContent = guestScoreValue;
  highlight();
}
