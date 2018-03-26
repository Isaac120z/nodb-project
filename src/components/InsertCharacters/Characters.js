import React, {Component} from 'react'; 


class Characters extends Component {
    constructor(props){
        super()
        this.state = {flag: false,
        name: ''};
    
    this.handleFlag = this.handleFlag.bind(this);
}
    handleFlag(){
        this.setState({flag: !this.state.flag});
       }
       handleName(val){
            this.setState ({name:val})
       }

    
    render(){
        let {deleteChar,characters,editChar} = this.props;
        let {name} = this.state;

        var characterList = characters.map((e,i)=> { 
        return(
            <div key={e.id}>
            <h4>{e.name}</h4>
            <h2>{e.id}</h2>
            <img src={e.image} height = "100px" width ="100px"/>
            
            {!this.state.flag ?

            <div>
                <button onClick={()=>this.props.deleteChar(e.id)}>Delete Character</button>
                <button onClick={this.handleFlag}>Edit Name</button>
                <button onClick={()=>this.props.postChar(e.id)}>Favorites List</button>
            </div>    
                :
            <div>    
            <input onChange={e=> this.handleName(e.target.value)} />
            <button onClick = {this.handleFlag}>Go Back</button>
            <button onClick = {()=>editChar(e.id,name)}>Confirm</button> </div>}
            </div>
            )
        })
        
        return(
            <div>
            {characterList}
            </div>
        );
    }
}

export default Characters;


// if(!this.state.value){
//     var characterList = characters.map((e,i)=> { 

//         return(
//             <div key={e.id}>
//             <h2>{e.name}</h2>
//             <h2>{e.id}</h2>
//             <img src={e.image} height = "60px" width ="60px"/>
//             {/* {!this.state.flag ? */}
//             <button onClick={()=>this.props.deleteChar(e.id)}>delete</button>
//             <button onClick={this.handleFlag}>edit</button>:
//             <input onChange={e=> this.handleName(e.target.value)} />
//             <button onClick = {this.handleFlag}>cancel</button>
//             <button onClick = {()=>editChar(this.state.name)}>confirm</button>}
//         </div>

//         )
//     })
// }
// else{
//     var characterList = characters.map((e,i)=> { 

//         return(
//             <div key={e.id}>
//             <h2>{this.state.name}</h2>
//             <h2>{e.id}</h2>
//             <img src={e.image} height = "60px" width ="60px"/>
//             {/* {!this.state.flag ? */}
//             <button onClick={()=>this.props.deleteChar(e.id)}>delete</button>
//             <button onClick={this.handleFlag}>edit</button>:
//             <input onChange={e=> this.handleName(e.target.value)} />
//             <button onClick = {this.handleFlag}>cancel</button>
//             <button onClick = {()=>editChar(this.state.name)}>confirm</button>}
//         </div>

//         )
//     })
// }