const axios = require("axios");
const key = process.env.API_KEY;


let characters = [];
let newID = 9999;

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
        console.log(list.data)
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


postCharacter: (req, res) => {
    const {name} = req.body;
    res.status(200).json(characters);
}}


// updateCharacter: (req, res) => {
//     const { id } = req.params;
//     const { name, birth_year } = req.body;
//     //From characters, find the object that has the matching id as the parameter, then give name and birth_year property new values
//     characters.forEach(person => {
//       if (person.url.split("/")[5] === id) {
//         person.name = name;
//         person.birth_year = birth_year;
//       }
//     });
//     //Then send the characters
//     res.status(200).json(characters);