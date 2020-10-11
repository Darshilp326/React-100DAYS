import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)
    this.setState({username:''})
    this.setState({password:''})
    document.getElementById("submit").innerHTML="Submitted successfully"
    }
    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={(e)=>this.setState({username:e.target.value})}
          value={this.state.username}
        />
        <p>Enter your password</p>
        <input
          type="password"
          onChange={(e)=>this.setState({password:e.target.value})}
          value={this.state.password}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      <div id="submit"></div>
            </div>
        )
    }
}
