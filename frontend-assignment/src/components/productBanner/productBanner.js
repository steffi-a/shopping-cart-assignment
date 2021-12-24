import React, { useEffect, useState } from "react";
import './productBanner.css';
import { useSelector, useDispatch } from "react-redux";
import {setCartItems } from '../../reducer/CartReducer';
function ProductBanner(props){

    const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const { cartItems } = useSelector((state) => state.Cart);

  console.log("cartITems", cartItems);

  const handleAddtoCart = () => {
    dispatch(setCartItems([...cartItems, { ...props, qty: 1 }]));
  };

  useEffect(() => {
    let searchIndex = cartItems.findIndex((e) => e.id === props?.id);
    if (searchIndex !== -1) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartItems]);
    return(
        
            
     <div class='product'>
    
            <div class='product-name'>
                {props.name}
            </div>

            <div class='product-img'>
               
                <img src={props.img} alt="product item" width='60%' height='100%'/>
            </div>

            <div class='product-desc'>
                {props.desc}
            </div>

            <div class='product-add' >
                {/* {props.price} */}
                <div> MRP Rs.{props.price}</div>
                <div>
                {inCart ? (
        <div class='product-add-btn'>Already in cart</div>
      ) : (
        <div class='product-add-btn' onClick={handleAddtoCart}>Buy Now</div>
      )}
                </div>
            </div>
        
    </div>
            
        
    )
}

export default ProductBanner;