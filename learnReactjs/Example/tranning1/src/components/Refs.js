import React, { Component } from 'react';

class Refs extends Component {

  onAddProduct(){
      console.log(this.refs.name.value);
  }

  render() {
    return (
      <div className="row">
          <div className = "col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className = "panel panel-danger">
                <div className = "panel-heading">
                    <h3 className = "panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input type="text" 
                               className="form-control" 
                               ref = 'name'/>
                    </div>
                    <button type = "submit" 
                            className = "btn btn-primary"
                            onClick = { this.onAddProduct.bind(this) } >Save</button>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Refs;
