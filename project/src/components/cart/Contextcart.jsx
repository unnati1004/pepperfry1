import React, { useContext } from 'react'
// import { Scrollbars } from "react-custom-scrollbars"
import Items from "./Items"
import { CartContext } from './Cart';
import { Link } from 'react-router-dom';




function Contextcart() {
    const {items,totalItem,totalAmount,carttotal} = useContext(CartContext);
        localStorage.setItem("order", JSON.stringify({totalAmount,carttotal}))
        // var place = JSON.parse(localStorage.getItem("order"))||[];
        // console.log(place);
    
   
  return (
    <>
        <header>
            <div className="cart-head">
                
                <div className='abc'>
                <img src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" alt="err"/> 
                </div>

                <div>
                    <i className='fas fa-cart-plus'></i>  <span>Cart ---- </span>  Delivery & BillingAddress -----  Payment
                </div>
            </div>
            </header>
            <section>
                <div className="cart-items">
                <h3>IN YOUR CART <span> ({totalItem} Items)</span></h3>
                </div>
            </section>

            <section>
                <div className="add-items">
                    <div className="inner">

                        <div className='outer'>
                        <div>
                        <i className="fas fa-map-marker-alt"></i>  <span>Enter Your Pincode For Delivery & Assembly Information</span>
                        </div>
                        <div>
                        <input type="number" placeholder="Pincode"/>
                        <button>GO</button>
                        </div>
                        </div>

                        <div >
                        {/* <Scrollbars> */}
                        {
                                items.map((e)=>{
                                    return <Items key={e._id} {...e}/>
                                })
                            }
                           {/* </Scrollbars>     */}
                        </div>
                    </div>
                    <div className="login">
                        <div>
                            <p>Login OR Register</p>
                            <p>For Express Checkout, Exciting Offers & More.</p>
                        </div>
                        <div>
                         <input className="input" type="text" placeholder="Apply Coupon" />
                        </div>
                        <div>
                            <p>Cart value --- <span>₹ {carttotal}</span></p>
                            <p>Retails Discount --- <span>(-)₹ 5,453</span></p>
                            <p>Give India --- <span>₹ 99</span></p>
                            <p>Delivery & Assembly Charges Extra. Enter Pincode To Know</p>
                            <hr />
                            <h4>Total --- <span>₹ {totalAmount}</span></h4> 
                            <hr />
                            <p>No Cost EMI Available Starting ₹ 2,608/month. EMI Starting ₹ 737/month</p>
                        </div>
                        <div>
                            
                            <input className="check" type="checkbox" />
                            <span>Use GSTIN For Business Purchase (Optional)
                               
                                 Claim Tax Credit By Entering Your Companies GSTIN.</span>
                                 <br />
                                 <Link to="/billing">
                            <button >PLACE ORDER</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
export default Contextcart