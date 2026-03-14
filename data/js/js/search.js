```javascript
document.getElementById("searchBar").addEventListener("keyup",function(){

let filter=this.value.toLowerCase()

let games=document.querySelectorAll(".gameCard")

games.forEach(game=>{

let text=game.innerText.toLowerCase()

game.style.display=text.includes(filter)?"block":"none"

})

})
```
