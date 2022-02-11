import 'regenerator-runtime/runtime';
import axios from 'axios';
console.log("It's working!");



function getPokeInfo(pokeName){
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => {
  console.log(response.data);
    })
    .catch(err => console.log(err));


}

getPokeInfo('squirtle');


{/* 
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>

*/}



const pokeCard = pokecard => {
  const card = document.createElement("div");
  const pokeImg = document.createElement("img");
  




}
