import React, { Component } from 'react';

class Form1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            txtUsername: 'wwww',
            txtPassword: 'ssss',
            txtDescription: 'Nguyen Manh Cuong',
            rdLang: "en",
            sltGender: 0,
            chkStatus: true
        }
    }

    onHandleChange(event) {
    
        let name = event.target.name;
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

        this.setState({ 
            [name]: value
        })
    }

    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }



    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form
                                    action=""
                                    method="POST"
                                    onSubmit={this.onHandleSubmit.bind(this)}>
                                    <legend>Form title</legend>

                                    <div className="form-group">
                                        <label>Username:</label>
                                        <input
                                            type="text"
                                           
                                            className="form-control"
                                            name="txtUsername"
                                            onChange={this.onHandleChange.bind(this)}
                                            value={this.state.txtUsername}

                                        ></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            
                                            className="form-control"
                                            name="txtPassword"
                                            value={this.state.txtPassword}
                                            onChange={this.onHandleChange.bind(this)}
                                        ></input>
                                    </div>

                                    <div className="form-group">
                                        <label>Description: </label>
                                        <textarea
                                            className="form-control"
                                            name="txtDescription"
                                            value={this.state.txtDescription}
                                            onChange={this.onHandleChange.bind(this)}
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>
                                            <input 
                                                type="radio"
                                                name="rdLang"
                                                value="vi"
                                                onChange={this.onHandleChange.bind(this)}
                                                checked={this.state.rdLang === "vi"}>
                                            </input>
                                            Tiếng Việt
                                        </label>
                                        <br />
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdLang"
                                                value="en"
                                                onChange={this.onHandleChange.bind(this)}
                                                checked={this.state.rdLang === "en"}>
                                            </input>
                                            Tiếng Anh
                                        </label>
                                    </div>

                                    <div className="form-group">
                                        <label>Giới tính</label>
                                        <select
                                            className="form-control"
                                            name="sltGender"
                                            value={this.state.sltGender}
                                            onChange={this.onHandleChange.bind(this)}
                                        >
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input 
                                            type="checkbox" 
                                            name="chkStatus" 
                                            value={this.state.chkStatus}
                                            checked={ this.state.chkStatus === true}
                                            onChange={this.onHandleChange.bind(this)}
                                        /> Trạng thái
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                                    <button type="reset" className="btn btn-default">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form1;
