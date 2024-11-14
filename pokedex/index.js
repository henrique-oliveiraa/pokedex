const imgPokemon = document.querySelector("#imgPokemon")
const nomePokemon = document.querySelector("#nomePokemon")
const numeroPokemon = document.querySelector("#numeroPokemon")
const inputText = document.querySelector("#inputText")
const form = document.querySelector(".form-busca")
const buttonA = document.querySelector("#btnAnterior")
const buttonP = document.querySelector("#btnProximo")
const typePoke = document.querySelector("#typePokemon")



let IDPokemon = 1;



const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    
    const datapokemon = await fetchPokemon(pokemon);
    IDPokemon = datapokemon.id;
    numeroPokemon.innerHTML = IDPokemon;
    imgPokemon.src = datapokemon.sprites.front_default;
    const texto = document.createElement("span");
    texto.textContent = datapokemon.types[0].type.name;
    typePoke.appendChild(texto);
    const texto1 = document.createElement("span");
    texto1.textContent = datapokemon.types[1].type.name;
    typePoke.appendChild(texto1);
    
    nomePokemon.innerHTML = datapokemon.name;
  
}

inputText.addEventListener("input", () =>
    IDPokemon = toString(inputText.value)
)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(inputText.value.toLowerCase());

});


buttonP.addEventListener('click', (event) =>{
    event.preventDefault();
    IDPokemon += 1;

    showPokemon(IDPokemon)
})

showPokemon(IDPokemon) 