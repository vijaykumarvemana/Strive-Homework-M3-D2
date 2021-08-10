window.onload = () =>{
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=ed%sheeran", {
        method:"GET",
        headers:{
            'x-rapidapi-key': '86fa2fbd34msha5a519b0e329832p175565jsn3118dd3e795a',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }).then((response) => {
        return response.json()
    }).then((albums) => {
        console.log(albums)
        addingAlbum(albums)
        
    })
}



function addingAlbum(albums){
    const sec = document.querySelector("#popular")
    for(let song of albums.data){
           console.log(song.album.title, song.album.md5_image)
           const section = document.querySelectorAll("#popular div.row")[0]  
           section.innerHTML += `<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
           <div class="card h-100">
           <div class="card-image">
           <a href="#">
           <span class="badge hidden-icons"><i class="bi bi-play-circle-fill"></i></span>
          <img
            class="card-img-top"
            src="${song.album.md5_image}"
            alt="Card image cap"
          />
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">${song.album.title}</h5>
        
      </div>
    </div>
  </div>`   
        }
        sec.appendChild(section)   
}