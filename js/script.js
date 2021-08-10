const listItems = document.querySelectorAll(".list-item");
const cards = document.querySelectorAll(".card");
const offers = document.querySelectorAll("div.offer");
const trs = document.querySelectorAll("tr");

function mouseOver(item, lis) {
  // ADDING backgroundColor
  item.style.backgroundColor = "#2B2B2B";

  //   Removing opacity of icons

  for (let i of lis) {
    i.classList.remove("hidden-icons");
  }

  //Changing number to icon
}

function mouseOut(item, lis) {
  item.style.backgroundColor = "";
  for (let i of lis) {
    i.classList.add("hidden-icons");
  }
}

for (let item of listItems) {
  const listNumber = item.querySelector("div.song-number");
  let realNum = listNumber.textContent;
  const lis = item.querySelectorAll("li.icons i");
  item.addEventListener("mouseover", function () {
    listNumber.innerHTML = `<i class="bi bi-play-fill">`;
    mouseOver(item, lis);
  });
  item.addEventListener("mouseout", function () {
    listNumber.innerHTML = realNum;
    mouseOut(item, lis);
  });
}

for (let card of cards) {
  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = "#2B2B2B";
    const badge = card.querySelector(".card-image a span");
    if (badge !== null) {
      badge.classList.remove("hidden-icons");
    }
  });
  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
    const badge = card.querySelector(".card-image a span");
    if (badge !== null) {
      badge.classList.add("hidden-icons");
    }
  });
}

for (let offer of offers) {
  offer.addEventListener("mouseover", function () {
    offer.style.backgroundColor = "#2B2B2B";
  });
  offer.addEventListener("mouseout", function () {
    offer.style.backgroundColor = "";
  });
}

for (let tr of trs) {
  const listNumber = tr.querySelector("th.table-num");
  let realNum = listNumber.textContent;
  const tds = tr.querySelectorAll("td i");
  tr.addEventListener("mouseover", function () {
    listNumber.innerHTML = `<i class="bi bi-play-fill">`;
    mouseOver(tr, tds);
  });
  tr.addEventListener("mouseout", function () {
    listNumber.innerHTML = realNum;
    mouseOut(tr, tds);
  });
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
    doNotHoldTopBar();
  } else {
    holdTopBar();
  }
  prevScrollpos = currentScrollPos;
};
let currentPlaylistNum = 0;

const playlistCreator = function () {
  currentPlaylistNum++;
  const playlistContainer = document.getElementById("playlist-holder");
  let addNewPlaylist = document.createElement("li");
  addNewPlaylist.classList.add("nav-item", "px-2");
  let addAnhorToPlaylist = document.createElement("a");
  addAnhorToPlaylist.classList.add("nav-link", "d-inline-block");
  addAnhorToPlaylist.href = "playlist" + currentPlaylistNum;
  addAnhorToPlaylist.innerText = `My playlist #${currentPlaylistNum}`;
  addNewPlaylist.appendChild(addAnhorToPlaylist);
  playlistContainer.appendChild(addNewPlaylist);
};
