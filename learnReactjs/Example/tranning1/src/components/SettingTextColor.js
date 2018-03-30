import React, { Component } from 'react';
import ColorPicker from './ColorPicker';
import SizeSetting from './SizeSetting';
import Reset from './Reset';
import Result from './Result';

class SettingTextColor extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }

  onSetColor(params){
    //console.log(params);
    this.setState({
      color: params
    })
  }

  onSetFrontSize(params){
    this.setState({
      fontSize: this.state.fontSize + params
    })
  }

  setStyle(){
    return {
      color: this.state.color
    }
  }

  render() {
    return (
      <div className = "container mt-50">
         <div className="row">
            <ColorPicker color={this.state.color} onReceiveColor = { this.onSetColor.bind(this) }/>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <SizeSetting onReceiveFrontSize = { this.onSetFrontSize.bind(this) }
                             fontSize = {this.state.fontSize} />
                <Reset/>
            </div>
            <Result color = {this.state.color} fontSize = {this.state.fontSize}/>
         </div>
      </div>
    );
  }
}

export default SettingTextColor;
