let random = document.querySelector('.random');
let button = document.querySelector('button');
let travel = document.querySelector('.travel');
let food = document.querySelector('.food');
let animal = document.querySelector('.animal')

fetch('https://emojihub.herokuapp.com/api/all',{
    method: 'GET',
    headers: {
        "Content-Type":"application/json",
        Accept: 'application/json'
    }
})
.then((response) => {return response.json();})
.then((data) => {for(let i = 0;i < data.length;i++){
    switch(data[i].category) {
        case 'travel and places': 
            let travelDiv = document.createElement('div');
            travelDiv.innerHTML = data[i].htmlCode
            travel.appendChild(travelDiv)
            break;
      
        case 'food and drink':
            let foodDiv = document.createElement('div');
            foodDiv.innerHTML = data[i].htmlCode
            food.appendChild(foodDiv)
            break;
        case 'animals and nature':
            let animalDiv = document.createElement('div');
            animalDiv.innerHTML = data[i].htmlCode
            animal.appendChild(animalDiv)
            break;
      }
}
});
button.addEventListener('click',function(event){
    fetch('https://emojihub.herokuapp.com/api/random',{
    method: 'GET',
    })
    .then((response)=>{return response.json();})
    .then((data) => random.innerHTML = data.htmlCode[0])
})