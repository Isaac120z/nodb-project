import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Characters from "./components/InsertCharacters/Characters"
import Title from "./components/title/Title"
import FavTitle from "./components/favTitle/FavTitle"

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
      favoriteCharacters:[],
      title: "Superheroes",
      favTitle: "Favorite List",
    };
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacterName = this.updateCharacterName.bind(this);
    this.postCharacter =  this.postCharacter.bind(this);
  }

componentDidMount() {
  axios
    .get("/api/characters")
    .then(res => {
      // console.log(res.data)
      this.setState({
        characters: res.data
      });
    })
    .catch(console.log);
}

updateCharacterName(id,name){
  console.log(id, name)
  axios
  .put(`api/character/${id}`,{name})
  .then(res => {
    this.setState({
      characters: res.data
    });
  })
  .catch(console.log);
}

deleteCharacter(id) {
  axios
    .delete(`/api/characters/${id}`)
    .then(res =>
    this.setState({
      characters: res.data
    })
  ).catch(console.log)
}

postCharacter(id) {
  axios
    .post(`/api/characters/${id}`)
    .then(res =>
      this.setState({
        favoriteCharacters: res.data
      })
    ).catch(console.log);
  }



  render() {
    console.log(this.state.favoriteCharacters)
     const {title, characters,favoriteCharacters,favTitle} = this.state;
     
    return (
      <div className = "both">
       
      <div className="App">
      <Title header={title} />
      <Characters characters={characters} 
      deleteChar={this.deleteCharacter} 
      editChar={this.updateCharacterName}
      postChar={this.postCharacter}
      />
      </div>
      <div className="FavoriteList">
      <FavTitle header={favTitle}/>
      <Characters characters={favoriteCharacters} 
      deleteChar={this.deleteCharacter} 
      editChar={this.updateCharacterName}
      postChar={this.postCharacter}
      />

      </div>
      </div>

    );
  }
}

export default App;
