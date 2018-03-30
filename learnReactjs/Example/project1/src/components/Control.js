import React, { Component } from 'react';
// import Search from '.Search'
import  Search  from '/.Search';

class Control extends Component {
    render() {
        return (
            <div>
            
                <button type="button" className="btn btn-primary">
                    <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
                
                <div className="row mt-15">
                
                    <Search />

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    <a role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Tên A-Z
                                                </span>
                                            </a>
                                </li>
                                <li>
                                    <a role="button">
                                                <span className="fa fa-sort-alpha-desc pr-5">
                                                    Tên Z-A
                                                </span>
                                            </a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                                <li><a role="button">Trạng Thái Ẩn</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Control;