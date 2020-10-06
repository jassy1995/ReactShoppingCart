import React, { Component } from 'react';
import util from '../util';
import {connect} from "react-redux";
import {fetchProducts} from "../action/productActions";
import {addToCart} from '../action/cartActions';

 class MyProducts extends Component {
     componentWillMount(){
         this.props.fetchProducts()
     }
    render() {
        let {products,addToCart,cartItems}=this.props
        let productItems=products.map(product=>(
            <div className="col-md-4" key={product.id}>
            <div className="thumbnail text-center">
                <a href={`#${product.id}`} onClick={()=>addToCart(cartItems,product)}>
                    <img src={`/products/${product.uniqName}_2.jpg`} alt={product.title}/>
                    <p>{product.title}</p>
                </a>
                <b className="text-white" style={{fontSize:"20px"}}>{util.formatCurrency(product.price)}</b>
             <button style={{fontSize:"15px"}} className="btn btn-success text-white m-2 p-3" onClick={()=>addToCart(cartItems,product)}>add to cart</button>
            </div>
             
            </div>
        )
        )
        return (
            <div className="row">
            {productItems}
                
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    products:state.products.filteredItems,
    cartItems:state.cart.items
})
  

export default connect(mapStateToProps,{fetchProducts,addToCart})(MyProducts)
