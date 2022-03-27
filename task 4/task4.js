let button = document.querySelector('button');

button.addEventListener('click',function(event){
    let inputVal = document.querySelector('input')
    let row = document.querySelector('.row');


    fetch(`https://restcountries.com/v3.1/name/${inputVal.value}`)
    .then((response) => response.json())
    .then((data) => {
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
                        <img  class="img" src="/img/1f468-200d-1f469-200d-1f466-200d-1f466.png">
                        <p>${this.population}</p>
                    </div>
                    <div class="img-text">
                        <img  class="img" src="/img/1f4b0.png">
                        <p>${this.language}</p>
                    </div>
                    <div class="img-text">
                        <img  class="img" src="/img/1f5e3-fe0f.png">
                        <p>${this.currenc}</p>
                    </div>
                </div>
                `
            }
            createBlockBorders(){
                return `
                <div class="card">
                    <div class="border-country">
                        <p>Соседняя страна</p>
                    </div>
                    <img class="top-img" src="${this.img}" alt="">
                    <p>${this.name}</p>
                    <p>${this.region}</p>
                    <div class="img-text">
                        <img  class="img" src="/img/1f468-200d-1f469-200d-1f466-200d-1f466.png">
                        <p>${this.population}</p>
                    </div>
                    <div class="img-text">
                        <img  class="img" src="img/1f4b0.png">
                        <p>${this.language}</p>
                    </div>
                    <div class="img-text">
                        <img  class="img" src="/img/1f5e3-fe0f.png">
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

        let lang = renderLangs(data[0].languages);
        let cur = renderCurrencies(data[0].currencies);
        let country = new Block(data[0].flags.svg,data[0].name.official,data[0].region,data[0].population,lang,cur);
        country.createBlock();
        country.render();

        let borders = data[0].borders
        console.log(borders)
        fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((data) => {
            searchBorder(data,borders)
        })
        function searchBorder(data,borders){
            for(let i = 0;i < borders.length;i++){
                const adults = data.filter(dat => {
                    if(borders[i] == dat.cca3){
                        return true
                    }
                })
                console.log(adults)
                let langs = renderLangs(adults[0].languages);
                let curs = renderCurrencies(adults[0].currencies);
                let border = new Block(adults[0].flags.svg,adults[0].name.official,adults[0].region,adults[0].population,langs,curs);
                border.createBlockBorders();
                border.render();
            }
        }
        
    })
})