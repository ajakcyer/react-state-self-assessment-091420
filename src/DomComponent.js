import React, { Component } from 'react'
import {yes, no} from './objects'


class DomComponent extends Component {
    state = {
        clicked: false
    }

    clickHandler = () =>{

       
        this.setState(previousState=>({clicked: !previousState.clicked}))
    }


    render (){
        return (
            <div className="container">
                <h1>{this.state.clicked ? yes['yes-statement'] : no['no-statement']}</h1>
                <img onClick={this.clickHandler} src={this.state.clicked ? yes['yes-image'] : no['no-image']} alt={this.state.clicked ? 'gif of drake agreeing' : 'picture of drake disagreeing'}></img>
            </div>
        )

    }

}

export default DomComponent