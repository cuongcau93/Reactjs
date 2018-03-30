import React, { Component } from 'react';
import Input from './Input'

class Example1Todo extends Component {
    state = {
      isHovered: false,
    };

  componentWillReceiveProps(newProps) {

  }

  handleMoseMove = () => {
    this.setState({
      isHovered: true,
    })
  }

  handleLeave = () => {
    this.setState({
      isHovered: false,
    })
  }

  showText(){
    console.log('text');
  }

  add(){
    if(this.state.isHovered){
      return <button type="button" 
                     className="btn btn-default"
                     onClick = { this.showText } >+</button>
    }
  }

  render() {
    
    return (
      <div>
        <div className="row" onMouseMove  = { this.handleMoseMove.bind(this) }
                             onMouseLeave  = { this.handleLeave.bind(this) }>

          <div className="col-sm-3">{ this.add() }</div>

          <Input/>
          <Input/>
          <Input/>

        </div>
      </div>
    );
  }
}

export default Example1Todo;