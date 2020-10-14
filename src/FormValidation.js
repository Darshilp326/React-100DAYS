import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(props){
        super();
        this.state={
            username:"",
            age:""
        }
    }
    changeText=(event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
          if (!Number(val)) {
            alert("Your age must be a number");

          }
          else {
              this.setState({age:val})
          }
        }
        else{
            this.setState({username:val})
        }
        
    }
    render() {
        let header=''
        if(this.state.username && this.state.age){
            header=<h2>Hello {this.state.username} and you are {this.state.age} years old</h2>
        }
        return (
            <div>
               {header}
        <p>Enter your name:</p>
        <input
          type="text"
          name="username"
          onChange={this.changeText}
          value={this.state.username}
        />
        <p>Enter your age</p>
        <input
          type="text"
          name="age"
          onChange={this.changeText}
          value={this.state.age}
        />
            </div>
        )
    }
}
