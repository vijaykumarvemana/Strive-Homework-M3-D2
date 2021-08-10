// FAVORITE PAGE FUNCTIONS

//seclecting heart icon and change the color on clicking
const buttons = document.querySelectorAll("td i.bi");
const array = [];
const tbody = document.querySelector("tbody.table-body");
const newArr = [];

console.log(tbody);
let idCount = 0;
let count = 0;

function displayArray(array) {
  for (let arr of array) {
    if (!newArr.includes(arr.id)) {
      newArr.push(arr);
      let count = 0;
      for (let arr of newArr) {
        count++;
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <th scope="row">${count}</th>
      <td>${arr.songName}</td>
      <td>+Deluxe</td>
      <td>1 hour ago</td>
      <td><i class="bi bi-heart mr-4"></i><span>${arr.songDuration}</span></td>
    `;
        tbody.appendChild(tr);
      }
    }
  }
}

function addAndRemoveForArray(btn) {
  let song = btn.parentElement.parentElement;
  if (!btn.classList.contains("bi-heart-fill")) {
    idCount++;
    btn.classList.remove("bi-heart");
    btn.classList.add("bi-heart-fill");
    btn.style.color = "red";

    const songName = song.querySelector("td.song-name").textContent;
    const songDuration = song.querySelector(
      "td.song-duration span"
    ).textContent;
    song.id = `song${idCount}`;
    const songID = song.id;
    const songDetails = {
      songID,
      songName,
      songDuration,
    };

    array.push(songDetails);
  } else {
    btn.classList.remove("bi-heart-fill");
    btn.classList.add("bi-heart");
    btn.style.color = "";
    let index = array.indexOf(song.id);
    array.splice(index, 1);
  }
  saveToDisk(array);
}

for (let button of buttons) {
  button.addEventListener("click", function () {
    addAndRemoveForArray(button);
  });
}

const saveToDisk = function (array) {
  let json = JSON.stringify(array);
  localStorage.setItem("songs", json);
};

const readFromTheDisk = function () {
  let json = localStorage.getItem("songs");

  if (json === null) {
    songs = [];
  } else {
    songs = JSON.parse(json);
    displayArray(songs);
  }
};

window.onload = function () {
  readFromTheDisk();
};
