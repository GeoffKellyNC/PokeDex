import 'regenerator-runtime/runtime';
import axios from 'axios';
console.log("It's working!");


const pokemonName = 'pikachu';

const pokeCardInfo = ({
  name,
  height,
  weight
}) => {
  const infoCard = document.createElement("div");
  const infoHeading = document.createElement("h2")
  const pokeImg = document.createElement("img");
  const pokeName = document.createElement("h3")
  const pokeHeight = document.createElement("p")
  const pokeWeight = document.createElement("p")

  infoCard.classList.add("card-container")
  pokeImg.classList.add("poke-img");
  pokeImg.src = "https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
  pokeName.classList.add("poke-name", "info");
  pokeHeight.classList.add("poke-height", "info");
  pokeWeight.classList.add("poke-weight", "info");

  pokeName.textContent = `Pokemon Name: ${name}`;
  pokeHeight.textContent = `Pokemon Height (Feet): ${Math.round(height/3.048)} `;
  pokeWeight.textContent = `Pokemon weight (Pounds): ${Math.round(weight * 0.441)}`;

  infoCard.appendChild(pokeImg);
  infoCard.appendChild(pokeName);
  infoCard.appendChild(pokeHeight);
  infoCard.appendChild(pokeWeight);

  return infoCard;
}


const getPokeInfo = (name) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      document.querySelector(".container").prepend(pokeCardInfo(res.data))
    })
    .catch(err => console.log(err));
}


const createAbilityCard = () => {

  const abilityCard = document.createElement('div');
  const abilityCardHeader = document.createElement("h1")
  const abilityHeader = 'Abilities'
  abilityCardHeader.textContent = abilityHeader;

  abilityCard.classList.add("ability-card")
  abilityCardHeader.classList.add("ability-header");

  abilityCard.appendChild(abilityCardHeader);

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res => {
      console.log(res.data.abilities)
      res.data.abilities.forEach(ability => {
        console.log(ability.ability.name)
        const abilityTitle = document.createElement("h2")

        abilityTitle.textContent = ability.ability.name;
        abilityTitle.classList.add("ability")
        abilityCard.appendChild(abilityTitle);
      })
    })
    .catch(err => console.log(err));

  document.querySelector('.container').appendChild(abilityCard)

  return abilityCard;
}





  getPokeInfo(pokemonName)
  createAbilityCard();
