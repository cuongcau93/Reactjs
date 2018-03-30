import React, { Component } from 'react';
import '../App.css';

class ColorPicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc']
        }
    }

    showColor(color){
        return{
            backgroundColor: color,
            paddingTop: 10,
            paddingRight: 20,
            paddingBottom: 10,
            paddingLeft: 20,
            marginRight: 15
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

    render() {

        var elmColor = this.state.colors.map((color, index) => {
            return <span key={index} 
                         style={ this.showColor(color)}
                         className = {this.props.color === color ? 'active-color' : ''}
                         onClick = { () => {this.setActiveColor(color)} }>
            </span>
        })
        
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className = "panel-body">
                        {elmColor}
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;