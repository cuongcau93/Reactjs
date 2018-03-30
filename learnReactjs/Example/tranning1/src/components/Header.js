import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a>Trang chủ</a></li>
                <li><a>Danh Mục sản phẩm</a></li>
                </ul>
            </div>
          </nav>
      </div>
    );
  }
}

export default Header;
