let imgDiv = document.querySelector('.img');

function createElement(src){
    let img = document.createElement('img');
    img.setAttribute('src',src);
    imgDiv.appendChild(img);
}

fetch('https://api.doge-meme.lol/v1/memes/?skip=0&limit=20', {
    method: 'GET',
    headers: {
        "Content-Type":"application/json",
        Accept: 'application/json'
    }
})
.then((response) => {return response.json();})

.then((data) => {
    let memes = data.data;
    for(let i = 0;i < memes.length;i++){
        let mem = memes[i].submission_url.length - 4;
        if(memes[i].submission_url.charAt(mem) == '.'){
            createElement(memes[i].submission_url)
        }else{
            return false
        }

    }
});