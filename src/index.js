let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  let toyCollection = document.querySelector("#toy-collection");
  const toyObjects = 'http://localhost:3000/toys'


  fetch(toyObjects)
    .then(response => response.json())
    .then(toys => {
      toys.forEach(function(toy){
        renderToy(toy)
      })
    })

  function renderToy(toy){
    let card = document.createElement('div')
    card.className = 'card'

    let h2 = document.createElement('h2')
    h2.innerText = toy.name
    
    let img = document.createElement('img')
    img.src = toy.image
    img.className = 'toy-avatar'
    
    let p = document.createElement('p')
    p.innerText = `${toy.likes} Likes`

    let button = document.createElement('button')
    button.className = "like-btn"
    button.innerText = "Like"

    card.append(h2,img,p,button)
    toyCollection.append(card)
  }

  let submit = document.querySelector('input[type=submit]')
  submit.addEventListener('click',function(event){
    console.log(event)
    event.preventDefault()
  })

  function postToy(name,image){
    fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      "name": name,
      "image": image,
      "likes": "0"
    })
  })
  }




});
