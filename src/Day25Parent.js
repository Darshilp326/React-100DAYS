import React, { Component } from 'react'
import Child from './Day25Child.js' 
export default class Day25Parent extends Component {
    constructor(props){
        super();
        this.state={
            clicked:false
        }
    }
    onClickHandler=(e)=>{
        this.setState({clicked:true})
    }
    render() {
        let child
        if(this.state.clicked)child=<Child name="darshil"/>
        return (
            <div>
                <button onClick={this.onClickHandler}>Please click</button>
                {child}
            </div>
        )
    }
}
