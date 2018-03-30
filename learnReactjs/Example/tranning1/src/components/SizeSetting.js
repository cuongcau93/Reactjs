import React, { Component } from 'react';

class SizeSetting extends Component {
    // constructor(props){
    //     super(props);
    // }

    subSize(){
        this.props.onReceiveFrontSize(-2);
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props);
    // }
    
    addSize(){
        this.props.onReceiveFrontSize(+2);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <button className="btn btn-success" onClick={this.subSize.bind(this)}>Giam</button> &nbsp;
                    <button className="btn btn-success" onClick={this.addSize.bind(this)}>Tang</button>
                    <hr />
                </div>
            </div>
        );
    }
}

export default SizeSetting;