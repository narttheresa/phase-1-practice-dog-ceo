// console.log('%c HI', 'color: firebrick')



    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        const dogsArray = data.message
        for (let dog of dogsArray) {
            const dogContainer = document.querySelector("#dog-image-container")
            const dogImg = document.createElement("img")
            dogImg.src= dog
            dogContainer.append(dogImg)
        }
    })




const breedList = (startingLetter = "a") => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => {
           const breedArray = data.message 
            const dogBreed = document.querySelector("#dog-breeds")

            for (let breed in breedArray) {
                if(breed.toUpperCase().startsWith(startingLetter.toUpperCase())) 
                {
                    const newLi = document.createElement("li")
                    const subBreedUl = document.createElement("ul")
                    newLi.textContent = breed
                    breedArray[breed].forEach(subBreed => {
                        const subBreedLi = document.createElement("li")
                        subBreedLi.textContent = subBreed
                        subBreedUl.append(subBreedLi)
                    })
                    newLi.addEventListener("click", e => {
                        e.target.style.color = "blue"
                    })
                    dogBreed.append(newLi)
                    newLi.append(subBreedUl)
                }
            }
  
        })
    }

breedList();


const dropDown= document.querySelector("#breed-dropdown")
dropDown.addEventListener("change", e => {
    removeChildren(document.querySelector("#dog-breeds"))
    breedList(e.target.value)
})

const removeChildren = parentNode => {
    while (parentNode.lastElementChild) {
        parentNode.removeChild(parentNode.lastElementChild);
    }
}












    


 