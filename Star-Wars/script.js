let div = document.querySelector('div');
let input = document.querySelector('input');


axios.get('https://swapi.co/api/people/13').then(function(respost){
    console.log(respost);
    div.innerHTML=respost.data.name;
});


console.log("kjhkjhk");


let url = 'https://swapi.co/api/people?search=' + input.value;