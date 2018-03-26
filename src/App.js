import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Characters from "./components/InsertCharacters/Characters"
import Title from "./components/title/Title"

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
      title: "Superheroes"
    };
    this.deleteCharacter = this.deleteCharacter.bind(this);
    this.updateCharacterName = this.updateCharacterName.bind(this);
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

  render() {
    console.log(this.state.characters)
     const {title, characters} = this.state;
     
    return (
      <div className="App">
      <Title header={title} />
      <Characters characters={characters} 
      deleteChar={this.deleteCharacter} 
      editChar={this.updateCharacterName}
      />
      </div>
    );
  }
}

export default App;
