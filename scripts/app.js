import 'regenerator-runtime/runtime';
import axios from 'axios';




function getPokeInfo(pokeName){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
  console.log(response.data);
    })
    .catch(err => console.log(err));


}


