import React, { Component } from 'react'

export default class Day26 extends Component {
    constructor(props){
        super(props);
        this.state={text:'I am not clicked!'}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this)
        this.setState({
            text:'I am clicked'
        })
    }
    render() {
        return (
            <div>
        <button type="button" onClick={this.handleClick}>Click here</button>
        <p>{this.state.text}</p>
            </div>
        )
    }
}
