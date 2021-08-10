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
    doNotHoldTopBar();
  } else {
    holdTopBar();
  }
  prevScrollpos = currentScrollPos;
};
