const axios = require("axios");
const key = process.env.API_KEY;


let characters = [];
let newID = 9999;

let favoriteCharacters = [];

module.exports = {
getCharacters: (req,res) => {
    // let {number} = req.query;
    // if (!number){
    // number = 1;
// }

if(!characters.length){
    axios
    .get(`https://www.giantbomb.com/api/characters/?api_key=${key}&format=json&limit=10`)
    .then(list =>{
        // console.log(list.data)
        characters = list.data.results.map(e => {
            return {name: e.name, image: e.image.medium_url, id: e.id}
        });

        res.status(200).json(characters);
})
    .catch(res => res.status(500).json(res));
}
else{
    res.status(200).json(characters);
}
},
updateCharacters: (req,res)=>{
    let {id} = req.params;
  let {name}=req.body;
var index = characters.findIndex(e => e.id === parseInt(id));
characters[index].name = name;
  res.status(200).json(characters)
},

deleteCharacters: (req,res)=> {
    let {id}=req.params
    let index = characters.findIndex(character => character.id === parseInt(id))
    characters.splice(index,1) 
    res.status(200).json(characters);
},


postCharacters: (req, res) => {
    const {id} = req.params;
    var index = characters.findIndex(e => e.id === parseInt(id));
    favoriteCharacters.push(characters[index]);
    console.log(favoriteCharacters);
  res.status(200).json(favoriteCharacters)
}}


// const getFavorites = (req, res, next) => {
//     res.status(200).json(favorites);
//   };
  
//   // Add a new favorite onto the end of the favorites array.
//   const addFavorite = (req, res, next) => {
//     favorites.push(req.body.quote);
//     res.status(200).json(favorites);
//   };