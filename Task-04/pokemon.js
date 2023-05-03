document.querySelector("#search").addEventListener("click", ()=>{
    let pokemonName=document.querySelector("#pokemonName").value.toLowerCase();
    getPokemon(event,pokemonName);
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}
let currpokename;
for(let i=1;i<=20;i++){
    getPokemon(null,i);
}
function getPokemon(e,pokemonName) {

    let color;
  //currpokename=pokemonName;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    .then((response) => response.json())
    .then((data) => {
        if(data.types[0].type.name=='grass' || data.types[0].type.name=='bug'){
            color='#d8c186'
        }
        else if(data.types[0].type.name=='fire'){
            color='#be7c48'
        }
        else if(data.types[0].type.name=='water'){
            color='#aebcdb'
        }
        else {
            color='#FFFFFF'
        }
        console.log(capitalizeFirstLetter(data.name))
      if(e!=null)
      document.querySelector(".pokemonBox").innerHTML=""
      document.querySelector(".pokemonBox").innerHTML += `
      <div class="poke-card">
      <div>
        <img class="poke-sprite"
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="id-exp">
        <div>ID: #${data.id}</div>
        <div>Exp: ${data.base_experience}</div>
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p class="poke-type" style="background-color: ${color};">${capitalizeFirstLetter(data.types[0].type.name)}</p>
      </div>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });
  if(e!=null)
    e.preventDefault();
}