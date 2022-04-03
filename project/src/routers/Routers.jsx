import { Route, Routes } from "react-router-dom";
import { Products } from "../components/products/Products";
import { ProductDetail } from "../components/productdetails/Productdetails";
import Cart from "../components/cart/Cart";
import Billing from "../components/cart/Billing";
import { Payment } from "../components/payment/Payment";
import Register from '../components/pages/Register';
import {Navbar} from "../components/navbar/Navbar"
import {Home} from "../components/home/Home"
// import {useDispatch} from 'react-redux';
// import {auth} from './firebase';
 import Login from "../components/pages/Login"
export const AllRoutes = () => {
//   const dispatch = useDispatch();
 
//   useEffect(() => {
// auth.onAuthStateChanged((authUser) =>{
//   if(authUser){
//     dispatch(setUser(authUser));
//   }else{
//     dispatch(setUser(null));
//   }
// });
//   }, [dispatch]);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/armschair" element={<Products />} />
        <Route exact path="/armschair/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/billing" element={<Billing />} />
        <Route exact path="/payment" element={<Payment />} />  
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      {/* <Login/> */}
    </>
  );
};