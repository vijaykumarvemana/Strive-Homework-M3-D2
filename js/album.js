//SCROLL EVENT
const albumListTitle = document.querySelector("#albums h5");
const albumListNav = document.querySelector("#albums div.list-nav");

function HoldStickyTitle() {
  albumListTitle.style.backgroundColor = "#2B2B2B";
  albumListTitle.style.padding = "10px";
  albumListNav.classList.add("sticky-top");
}

function doNotHoldStickyTitle() {
  albumListTitle.style.backgroundColor = "";
  albumListTitle.style.padding = "10px";
  albumListNav.classList.remove("sticky-top");
}

const topBar = document.getElementById("top-bar");

function holdTopBar() {
  topBar.classList.add("top-bar-bg");
}

function doNotHoldTopBar() {
  topBar.classList.remove("top-bar-bg");
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    doNotHoldStickyTitle();
    doNotHoldTopBar();
  } else {
    HoldStickyTitle();
    holdTopBar();
  }
  prevScrollpos = currentScrollPos;
};
