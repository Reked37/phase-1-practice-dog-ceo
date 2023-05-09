document.addEventListener('DOMContentLoaded',()=>fetchDogs())

function fetchDogs(){
    
    fetch("https://dog.ceo/api/breeds/image/random/4")
     .then((res)=> res.json())
     .then((json) => (json.message.forEach((element)=>{
        const createli = document.createElement('img')
        const dogContainer = document.querySelector('#dog-image-container')
        createli.src = element
        dogContainer.appendChild(createli)
     })));   
}
    

