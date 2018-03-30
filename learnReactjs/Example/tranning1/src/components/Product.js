import React, { Component } from 'react';

class Product extends Component {

    constructor() {
        super();
        this.state = {
            users: [{
                id: 1,
                name: 'Nguyen Manh Cuong',
                age: 18
            },
            {
                id: 2,
                name: 'Tran Van B',
                age: 19
            },
            {
                id: 3,
                name: 'Ly mac sau',
                age: 34
            }],

            isActive: true,
        }
    }

    //function show info TEXT
    showInfoProduct(product) {
        if (product.status) {
            return <h3>
                ID: {product.id} <br />
                Name: {product.name} <br />
                Price: {product.price} VNĐ <br />
                Status: {product.status ? 'Active' : 'Pending'}
            </h3>
        }
    }

    showHide(){
        this.setState ( {
            isActive : !this.state.isActive
        })
    }

    render() {

        var a = 5;
        var name = 'Nguyen Manh Cuong';
        //var b = 7;

        var product = {
            id: 1,
            name: 'Nguyen Manh Cuong',
            price: 1500000,
            status: true
        }

        // var users = [{
        //     id: 1,
        //     name: 'Nguyen Manh Cuong',
        //     age: 18
        // },
        // {
        //     id: 2,
        //     name: 'Tran Van B',
        //     age: 19
        // },
        // {
        //     id: 3,
        //     name: 'Ly mac sau',
        //     age: 34
        // }];

        var elements = this.state.users.map((user, index) => {
            if(this.state.isActive){
                return <div key={user.id}>
                            <h2>Tên: {user.name}</h2>
                            <p>Tuổi: {user.age}</p>
                        </div>
            }else{
                return null;
            }
        })

        return (
            <div>
                <h2>
                    a: {a} <br />
                </h2>
                <h3>
                    name: {name}
                </h3>

                <hr />
                {elements}
                {this.showInfoProduct(product)}
                <br />
                <hr />

                <button className="btn btn-primary"
                        onClick={ this.showHide.bind(this) }> {this.state.isActive ? 'Hide' : 'Show'} User</button>
                <br />
                <hr />

            </div>
        );
    }
}

export default Product;
