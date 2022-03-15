

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
fetch('https://restcountries.com/v3.1/all')
.then((response) => response.json())
.then((data) => {
    let row = document.querySelector('.row');
    class Block{
        constructor(img,name,region,population,language,currenc){
            this.img = img;
            this.name = name;
            this.region = region;
            this.population = population;
            this.language = language.innerHTML;
            this.currenc = currenc.innerHTML;
        }
        createBlock(){
            return `
            <div class="card">
                <img class="top-img" src="${this.img}" alt="">
                <p>${this.name}</p>
                <p>${this.region}</p>
                <div class="img-text">
                    <img  class="img" src="img/1f468-200d-1f469-200d-1f466-200d-1f466.png">
                    <p>${this.population}</p>
                </div>
                <div class="img-text">
                    <img  class="img" src="img/1f4b0.png">
                    <p>${this.language}</p>
                </div>
                <div class="img-text">
                    <img  class="img" src="img/1f5e3-fe0f.png">
                    <p>${this.currenc}</p>
                </div>
            </div>

            `
        }
        render(){
            row.innerHTML += this.createBlock();
        }
    }
    function renderLangs(langs){
        let langElement = document.createElement('p');
        langElement.className = 'lang-text';
        for(let lang in langs){
            let spanLang = document.createElement('span');
            spanLang.innerText =`${langs[lang]}`;
            langElement.appendChild(spanLang)
        }
        return langElement;
    }
    
    
    function renderCurrencies(currencies){
        let currencElem = document.createElement('p');
        currencElem.className = 'curren-text';
        for(let curren in currencies){
            let spanCurren = document.createElement('span');
            spanCurren.innerText = `${currencies[curren].symbol}, ${currencies[curren].name}`;
            currencElem.appendChild(spanCurren)
        }
        return currencElem; 
    }


    for(let i = 0;i<6;i++){
        let lang = renderLangs(data[i].languages);
        let cur = renderCurrencies(data[i].currencies);
        let country = new Block(data[i].flags.svg,data[i].name.official,data[i].region,data[i].population,lang,cur);
        country.createBlock();
        country.render();
    }
});

//Number 4
// let button = document.querySelector('button');

// button.addEventListener('click',function(event){
//     let inputVal = document.querySelector('input')
//     let row = document.querySelector('.row');


//     fetch(`https://restcountries.com/v3.1/name/${inputVal.value}`)
//     .then((response) => response.json())
//     .then((data) => {
//         class Block{
//             constructor(img,name,region,population,language,currenc){
//                 this.img = img;
//                 this.name = name;
//                 this.region = region;
//                 this.population = population;
//                 this.language = language.innerHTML;
//                 this.currenc = currenc.innerHTML;
//             }
//             createBlock(){
//                 return `
//                 <div class="card">
//                     <img class="top-img" src="${this.img}" alt="">
//                     <p>${this.name}</p>
//                     <p>${this.region}</p>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f468-200d-1f469-200d-1f466-200d-1f466.png">
//                         <p>${this.population}</p>
//                     </div>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f4b0.png">
//                         <p>${this.language}</p>
//                     </div>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f5e3-fe0f.png">
//                         <p>${this.currenc}</p>
//                     </div>
//                 </div>
//                 `
//             }
//             createBlockBorders(){
//                 return `
//                 <div class="card">
//                     <div class="border-country">
//                         <p>Соседняя страна</p>
//                     </div>
//                     <img class="top-img" src="${this.img}" alt="">
//                     <p>${this.name}</p>
//                     <p>${this.region}</p>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f468-200d-1f469-200d-1f466-200d-1f466.png">
//                         <p>${this.population}</p>
//                     </div>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f4b0.png">
//                         <p>${this.language}</p>
//                     </div>
//                     <div class="img-text">
//                         <img  class="img" src="img/1f5e3-fe0f.png">
//                         <p>${this.currenc}</p>
//                     </div>
//                 </div>
//                 `

//             }
//             render(){
//                 row.innerHTML += this.createBlock();
//             }


//         }
//         function renderLangs(langs){
//             let langElement = document.createElement('p');
//             langElement.className = 'lang-text';
//             for(let lang in langs){
//                 let spanLang = document.createElement('span');
//                 spanLang.innerText =`${langs[lang]}`;
//                 langElement.appendChild(spanLang)
//             }
//             return langElement;
//         }
        
        
//         function renderCurrencies(currencies){
//             let currencElem = document.createElement('p');
//             currencElem.className = 'curren-text';
//             for(let curren in currencies){
//                 let spanCurren = document.createElement('span');
//                 spanCurren.innerText = `${currencies[curren].symbol}, ${currencies[curren].name}`;
//                 currencElem.appendChild(spanCurren)
//             }
//             return currencElem; 
//         }

//         let lang = renderLangs(data[0].languages);
//         let cur = renderCurrencies(data[0].currencies);
//         let country = new Block(data[0].flags.svg,data[0].name.official,data[0].region,data[0].population,lang,cur);
//         country.createBlock();
//         country.render();

//         let borders = data[0].borders
//         console.log(borders)
//         fetch(`https://restcountries.com/v3.1/all`)
//         .then((response) => response.json())
//         .then((data) => {
//             searchBorder(data,borders)
//         })
//         function searchBorder(data,borders){
//             for(let i = 0;i < borders.length;i++){
//                 const adults = data.filter(dat => {
//                     if(borders[i] == dat.cca3){
//                         return true
//                     }
//                 })
//                 console.log(adults)
//                 let langs = renderLangs(adults[0].languages);
//                 let curs = renderCurrencies(adults[0].currencies);
//                 let border = new Block(adults[0].flags.svg,adults[0].name.official,adults[0].region,adults[0].population,langs,curs);
//                 border.createBlockBorders()
//                 border.render()
//             }
//         }
        
//     })
// })

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
