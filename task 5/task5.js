let button = document.querySelector('.search');

let form = document.querySelector('form')

let video = document.querySelector('.video')
let previewDiv = document.querySelector('.preview');

function createVideoplayer(src){
    let div = document.createElement('div');
    let preview = document.createElement('img')
    preview.setAttribute('src',src);
    preview.className = 'img'
    div.appendChild(preview)
    previewDiv.appendChild(div)
}

form.addEventListener('submit',function(event){
    if(previewDiv.classList.contains('full')){
        previewDiv.classList.remove('full');
        div.remove(preview)
    }else{
        previewDiv.classList.add('full');
    }
    event.preventDefault();
    let input = document.querySelector('.request').value
    let link = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input}&type=video`
    fetch(link)
    .then((response) => response.json())
    
    .then((data) => {
        console.log(data)
        video.setAttribute('src', `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
        for(let i = 1;i < data.items.length;i++){
            createVideoplayer(data.items[i].snippet.thumbnails.high.url);
        }

    })
});

previewDiv.addEventListener('click', function(event){
    if(event.target.classList.contains('img')){
        let newLink = event.target.src.slice(23,34)
        console.log(event.target.src.slice(23,34))
        console.log(event.target.src);
        video.setAttribute('src', `https://www.youtube.com/embed/${newLink}`);
    }
})