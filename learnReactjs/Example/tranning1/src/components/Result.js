import React, { Component } from 'react';
import '../App.css';

class Result extends Component {
    // constructor(props){
    //     super(props);

    // }

    setStyle(){
        return{
            color: this.props.color,
            fontSize: this.props.fontSize
        }
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color: {this.props.color} - FrontSize: {this.props.fontSize}px</p>
                <div id ="content content-text" style={this.setStyle()}>
                    Noi dung setting
                </div>
            </div>
        );
    }
}

export default Result;