// EXAMPLE ALBUM OBJECT
const albumsObj = {
  1: {
    title: "Szacunek Ludzi Ulicy",
    artist: "Slums Attack",
    year: 2006,
    cover: "https://ecsmedia.pl/c/szacunek-ludzi-ulicy-b-iext52169198.jpg",
    tracklist: [
      [1, "Szacunek ludzi ulicy(produkcja: DJ Decks, Waco)", "4:50", null],
      [
        2,
        'Kłopotliwy zero piąty" (produkcja: DJ Decks, Magiera)',
        "5:07",
        null,
      ],
      [3, "Styl życia gnoja (produkcja: LA, Magiera)", "4:22", null],
      [4, "SLU 3 litery (produkcja: DJ Decks, Waco)", "4:38", null],
      [5, "Duchowo mocny (produkcja: DJ Decks, Magiera)", "4:56", null],
      [
        6,
        "Temat za tematem (produkcja: DJ Zel, scratche: DJ Zel)",
        "4:13",
        null,
      ],
    ],
  },
};

/* 

In the future collect hearts from all of the page and then apply button to them 

Button still needs some styling

*/
let favoriteBtn = document.querySelectorAll(".bi-heart", ".bi-heart-fill");

// ADDING AND REMOVING TRACKS FROM LIKED SONGS
const addToFavorite = function (i) {
  if (
    albumsObj[1].tracklist[i][3] !== true ||
    albumsObj[1].tracklist[i][3] === null
  ) {
    albumsObj[1].tracklist[i][3] = true;
    alert(`You have added ${albumsObj[1].tracklist[i][1]} to liked songs`);
  } else {
    albumsObj[1].tracklist[i][3] = false;
    alert(`You have removed ${albumsObj[1].tracklist[i][1]} from liked`);
  }
};

// DYNAMICALLY CREATING CONTENT OF ALBUM PAGE
const album = function () {
  let imgContainer = document.getElementById("album-cover-img");

  // ALBUM IMAGE
  let currentAlbumImg = document.createElement("img");
  currentAlbumImg.src = albumsObj[1].cover;
  currentAlbumImg.style = "max-width: 200px;";
  imgContainer.appendChild(currentAlbumImg);

  // ALBUM INFO
  let albumContainer = document.getElementsByClassName("cover-content");
  let currentAlbumName = albumContainer[0].children[1];
  currentAlbumName.innerText = albumsObj[1].title;

  let currentAlbumInfo = albumContainer[0].children[2];
  currentAlbumInfo.innerHTML = `<span>${albumsObj[1].artist}</span> - ${albumsObj[1].year} - ${albumsObj[1].tracklist.length} Songs `;

  // TRACK LIST
  let tracksContainer = document.getElementById("albums");
  for (let i = 0; i < albumsObj[1].tracklist.length; i++) {
    let createTrackRow = document.createElement("div");
    createTrackRow.classList.add("list-item");
    createTrackRow.innerHTML = `
            <div class="d-flex justify-content-between">
            <li class="song-name">
              <div class="d-inline-block">${albumsObj[1].tracklist[i][0]}</div>
              <div class="d-inline-block"> 
                <h5>${albumsObj[1].tracklist[i][1]}</h5>
                <p>${albumsObj[1].artist}</p>
              </div>
              <div class="d-inline-block">
              <button onclick="addToFavorite(${[i]})">
              <i class="bi bi-heart mr-4"></i>
              </button>
              ${albumsObj[1].tracklist[i][2]}
              <i class="bi bi-three-dots ml-3"></i>
              </div>
            </li>
          </div>`;
    tracksContainer.appendChild(createTrackRow);
  }
};

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

window.onload = function () {
  album();
};
