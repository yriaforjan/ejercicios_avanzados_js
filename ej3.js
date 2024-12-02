/* Dado el siguiente código usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript.  */

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
];

const sounds = [];
wavesCounter = 0;
rainCounter = 0;
firecampCounter = 0;
showerCounter = 0;
trainCounter = 0;
windCounter = 0;

for (const user of users) {
    for (const key in user.favoritesSounds) {
      if (key === "waves") {
        wavesCounter += 1;
      } else if (key === "rain") {
        rainCounter += 1;
      } else if (key === "firecamp") {
        firecampCounter += 1;
      } else if (key === "shower") {
        showerCounter += 1;
      } else if (key === "train") {
        trainCounter += 1;
      } else if (key === "wind") {
        windCounter += 1;
      }
    } 
}

console.log(`El sonido waves se ha agregado a favoritos ${wavesCounter} veces.`);
console.log(`El sonido rain se ha agregado a favoritos ${rainCounter} veces.`);
console.log(`El sonido firecamp se ha agregado a favoritos ${firecampCounter} veces.`);
console.log(`El sonido shower se ha agregado a favoritos ${showerCounter} veces.`);
console.log(`El sonido train se ha agregado a favoritos ${trainCounter} veces.`);
console.log(`El sonido wind se ha agregado a favoritos ${windCounter} veces.`);