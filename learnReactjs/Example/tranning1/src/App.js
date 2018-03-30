import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import ProductPass from './components/product-pass'
import Example1Todo from './components/Example1Todo'
import Refs from './components/Refs'
import SettingTextColor from './components/SettingTextColor';
import Form from './components/Form';

class App extends Component {
  render() {

    var product = [
      {
        id: 1,
        name: 'Apple Iphone 8plus',
        price: 15000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFJn6p7Yl0AJxm3ochY7scFcQcuuBV-o01SQ-KjkeFfD-GyLq',
        status: true
      },
      {
        id: 2,
        name: 'Apple Iphone 9plus',
        price: 15000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFJn6p7Yl0AJxm3ochY7scFcQcuuBV-o01SQ-KjkeFfD-GyLq',
        status: true
      },
      {
        id: 3,
        name: 'Apple Iphone 10plus',
        price: 15000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFJn6p7Yl0AJxm3ochY7scFcQcuuBV-o01SQ-KjkeFfD-GyLq',
        status: true
      },
      {
        id: 4,
        name: 'Apple Iphone 11plus',
        price: 15000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFJn6p7Yl0AJxm3ochY7scFcQcuuBV-o01SQ-KjkeFfD-GyLq',
        status: true
      },
      {
        id: 5,
        name: 'Apple Iphone 12plus',
        price: 15000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFJn6p7Yl0AJxm3ochY7scFcQcuuBV-o01SQ-KjkeFfD-GyLq',
        status: false
      },
    ]

    let elements = product.map((product, index) => {
      let result = ''

      if(product.status){
        result = <ProductPass 
                    key = { product.id }
                    price = { product.price }
                    image = { product.image }
                    status = { product.status } 
                  >
                    { product.name }
                  </ProductPass>
      }
      return result;
    });

    return (
      <div className='content'>
        <Header />
        <h1>TÌM HIỂU VỀ FORM: INPUT, SELECT, CHECKBOX, RADIO, TEXTAREA... </h1>
        <Form/>

        <h1>pj1: setting text color</h1>
        <SettingTextColor/>

        <hr/>
        <br/>
        <Example1Todo/>

        <h1>Refs</h1>
        <Refs/>

        <Product />
        <h1>
          Trao đổi dữ liệu giữa các component
        </h1>

        <div className='container'>
          <div className="col-xs-12 col-ms-12 col-md-12 col-lg-12">
            { elements }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
