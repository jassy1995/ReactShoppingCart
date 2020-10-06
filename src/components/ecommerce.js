import React, { Component } from 'react';
import MyProducts from './Products';
import '../App.css';
import Filter from './Filter';
import Basket from './Basket';
import { Provider } from 'react-redux';
import store from '../store';


class Ecommerce extends Component {
    
    componentWillMount=()=>{
          if(localStorage.getItem('cartItems')){
              this.setState({cartItems:JSON.parse(localStorage.getItem('cartItems'))})
          }
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container-fluid">
                    <h1 className="ml-5 w3-center">Inventory Application</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <Filter/> 
                            
                            <hr/> 
                            <MyProducts /> 
                        </div>
                        <div id="baskett"  className="col-md-12">
                             <Basket/> 
                        </div>
                    </div>
                       
                </div>
            </Provider>
        )
    }
}
export default Ecommerce
