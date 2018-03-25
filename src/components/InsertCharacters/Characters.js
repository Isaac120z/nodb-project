import React, {Component} from 'react'; 


class Characters extends Component {
    constructor(props){
        super(props)
        this.state = {flag: false,
        name: ''};
    
    this.handleFlag = this.handleFlag.bind(this);
}
    handleFlag(){
        this.setState({flag: !this.state.flag});
       }
       handleName(val){
            this.setState ({name:val})
            console.log(this.state.name)
       }
    render(){
        let {deleteChar,characters,editChar} = this.props;

        var characterList = characters.map((e,i)=> { 

        return(
            <div key={e.id}>
            <h2>{e.name}</h2>
            <h2>{e.id}</h2>
            <img src={e.image} height = "60px" width ="60px"/>
            {/* {!this.state.flag ? */}
            <button onClick={()=>this.props.deleteChar(e.id)}>delete</button>
            <button onClick={this.handleFlag}>edit</button>:
            <input onChange={e=> this.handleName(e.target.value)} />
            <button onClick = {this.handleFlag}>cancel</button>
            <button onClick = {()=>editChar(this.state.name)}>confirm</button>}
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