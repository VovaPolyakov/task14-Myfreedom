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