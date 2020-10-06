import React, { Component } from 'react';
import {connect} from 'react-redux';
import {filterProducts,sortProducts} from '../action/productActions';
import '../App.css'

 class Filter extends Component {
    render() {
        let {sort,size,filteredProducts,filterProducts,products,sortProducts,cartItems}=this.props
        return (
            <div className="row">
                <div style={{fontSize:"18px"}} className="col-md-4 "><b>{filteredProducts.length} Products found </b></div>
                <div className="col-md-4">
                    <label>
                             <b className="ml-3"> Order by price</b>
                        <select className="form-control" value={sort} onChange={(e)=>sortProducts(filteredProducts,e.target.value)}>
                            <option value="lowest">lowest to highest</option>
                            <option value="highest">highest to lowest</option>
                        </select>
                    </label>
                </div>

                <div className="col-md-4">
                <label>
                        Filter size
                        <select className="form-control" value={size} onChange={(e)=>filterProducts(products,e.target.value)}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                            
                        </select>
                    </label>
                    <button  id="mybadge" className="w3-blue mr-1">{cartItems.length===0?"Cart is empty":<div>Check Out
                <span  className="badge badge-light">{cartItems.length}</span></div>}</button>
                </div>
  
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    products:state.products.items,
    filteredProducts:state.products.filteredItems,
    size:state.products.size,
    sort:state.products.sort,
    cartItems:state.cart.items
})
export default connect(mapStateToProps,{filterProducts,sortProducts})(Filter);

