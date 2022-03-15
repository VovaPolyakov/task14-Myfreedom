

//Number 1
// let random = document.querySelector('.random');
// let button = document.querySelector('button');
// let travel = document.querySelector('.travel');
// let food = document.querySelector('.food');
// let animal = document.querySelector('.animal')

// fetch('https://emojihub.herokuapp.com/api/all',{
//     method: 'GET',
//     headers: {
//         "Content-Type":"application/json",
//         Accept: 'application/json'
//     }
// })
// .then((response) => {return response.json();})
// .then((data) => {for(let i = 0;i < data.length;i++){
//     switch(data[i].category) {
//         case 'travel and places': 
//             let travelDiv = document.createElement('div');
//             travelDiv.innerHTML = data[i].htmlCode
//             travel.appendChild(travelDiv)
//             break;
      
//         case 'food and drink':
//             let foodDiv = document.createElement('div');
//             foodDiv.innerHTML = data[i].htmlCode
//             food.appendChild(foodDiv)
//             break;
//         case 'animals and nature':
//             let animalDiv = document.createElement('div');
//             animalDiv.innerHTML = data[i].htmlCode
//             animal.appendChild(animalDiv)
//             break;
//       }
// }
// });
// button.addEventListener('click',function(event){
//     fetch('https://emojihub.herokuapp.com/api/random',{
//     method: 'GET',
//     })
//     .then((response)=>{return response.json();})
//     .then((data) => random.innerHTML = data.htmlCode[0])

//Number 2

// let imgDiv = document.querySelector('.img');

// function createElement(src){
//     let img = document.createElement('img');
//     img.setAttribute('src',src);
//     imgDiv.appendChild(img);
// }

// fetch('https://api.doge-meme.lol/v1/memes/?skip=0&limit=20', {
//     method: 'GET',
//     headers: {
//         "Content-Type":"application/json",
//         Accept: 'application/json'
//     }
// })
// .then((response) => {return response.json();})

// .then((data) => {
//     let memes = data.data;
//     for(let i = 0;i < memes.length;i++){
//         let mem = memes[i].submission_url.length - 4;
//         if(memes[i].submission_url.charAt(mem) == '.'){
//             createElement(memes[i].submission_url)
//         }else{
//             return false
//         }

//     }
// });




// })
//Number 3

//Number 4

//Number 5
// let button = document.querySelector('.search');

// let form = document.querySelector('form')

// let video = document.querySelector('.video')
// let previewDiv = document.querySelector('.preview');

// function createVideoplayer(src){
//     let div = document.createElement('div');
//     let preview = document.createElement('img')
//     preview.setAttribute('src',src);
//     preview.className = 'img'
//     div.appendChild(preview)
//     previewDiv.appendChild(div)
// }

// form.addEventListener('submit',function(event){
//     if(previewDiv.classList.contains('full')){
//         previewDiv.classList.remove('full');
//         div.remove(preview)
//     }else{
//         previewDiv.classList.add('full');
//     }
//     event.preventDefault();
//     let input = document.querySelector('.request').value
//     let link = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input}&type=video`
//     fetch(link)
//     .then((response) => response.json())
    
//     .then((data) => {
//         console.log(data)
//         video.setAttribute('src', `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
//         for(let i = 1;i < data.items.length;i++){
//             createVideoplayer(data.items[i].snippet.thumbnails.high.url);
//         }

//     })
// });

// previewDiv.addEventListener('click', function(event){
//     if(event.target.classList.contains('img')){
//         let newLink = event.target.src.slice(23,34)
//         console.log(event.target.src.slice(23,34))
//         console.log(event.target.src);
//         video.setAttribute('src', `https://www.youtube.com/embed/${newLink}`);
//     }
// })
