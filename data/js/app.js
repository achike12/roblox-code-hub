```javascript
async function loadGames(){

const response = await fetch("data/games.json")

const games = await response.json()

const container = document.getElementById("gamesContainer")

games.forEach(game => {

let card = document.createElement("div")

card.className="gameCard"

card.innerHTML=`

<img src="${game.thumbnail}">

<h3>${game.name}</h3>

`

container.appendChild(card)

})

}

loadGames()
```
