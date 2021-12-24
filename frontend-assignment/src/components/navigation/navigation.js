import './navigation.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.svg';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
function NavigationBar(){
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.Cart);
    return(
        <div class='container'>
            <div><img src={logo} alt="Sabka Bazaar logo" /></div> 

            <div class='navigation-bar'>
                <div onClick={()=> navigate('/')}>Home</div>
                <div class='navigation-item' onClick={()=> navigate('/products')}>Products</div>
                {/* <div class='navigation-item'>Products</div> */}
            </div>

            <div >
                <div class='sign-in'>
                    <span onClick={()=> navigate('/login')}>SignIn</span>
                    <span onClick={()=> navigate('/registration')} class='sign-in-items'>Register</span>
                </div>
                <div class='cart-container' onClick={()=>{navigate('/cart')}}>
                    <div class='cart-logo'>
                        <img src={cart} alt="shopping cart" width='20px'/>
                    </div>
                    <div class='cart-item-numbers'>{cartItems.length} items</div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;