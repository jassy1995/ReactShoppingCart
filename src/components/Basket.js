import React, { Component } from 'react';
import util from '../util';
import { connect } from 'react-redux';
import {removeFromCart} from '../action/cartActions'

class Basket extends Component {
  myBasketFunction=()=> {
    let x = document.getElementById("myProductTablet");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
  printToPdf=()=>{
    window.print()
  }
    render() {
        let {cartItems,removeFromCart}=this.props;
            return (
               <div className="mt-5">   
                  
                     {cartItems.length===0?"":<div className="w3-large w3-center">You have <b>{cartItems.length}</b> product in the basket</div>}
                      {cartItems.length>0 &&
                      <div className="w3-card-2">
                      <table className="w3-table-all">
                      <thead>
                        <tr  className="w3-indigo">
                          <th>S/N</th>
                          <th>prduct</th>
                          <th>price</th>
                          <th>qty</th>
                          <th>total</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                    
                         {cartItems.map((item,jos) =>(
                            <tr key={jos}>
                                <td>{jos+1}</td>
                                <td >{item.title}</td>
                                <td >{item.price}</td>
                                <td >{item.count}</td>
                                <td >{item.price * item.count}</td>
                                <td><span className="fa fa-trash text-danger" onClick={()=>removeFromCart(this.props.cartItems,item)}></span></td>
                            </tr>
                        ))
                        
                    }
                    </tbody>
              </table>
              <small className="mt-3 ml-2"><h2>Total Amount={util.formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}</h2></small>
              <button className="w3-button w3-blue ml-2 " onClick={this.printToPdf}>print pdf</button> 
              </div>
        
            }
            
         </div>
        
       
    )
  }
}
    const mapStateToProps=state=>({
      cartItems:state.cart.items
    })
    export default connect(mapStateToProps,{removeFromCart})(Basket)


