import { Link } from "react-router-dom";
import "./billing.css";




const Billing =()=>{

    var place = JSON.parse(localStorage.getItem("order"))||[];
    return <>
    <header>
        <div className="bill">
            <div>
            <img src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" alt="err"/> 
            </div>
            <div>
             <span>Cart ---- </span> <i className='fas fa-cart-plus'></i> <span> Delivery & BillingAddress</span> -----  Payment
            </div>
        </div>
    </header>

    <section>
        <div className="order">
            <div className="summ">
                    <div className="ord">
                        <p>ORDER SUMMARY</p>
                    </div>


                    <div className="shipp" >

                        <div className="det">
                        <p>SHIPPING & BILLING DETAILS</p>
                        </div>


                        <div className="email">
                            <div>
                                <label className="id">EMAIL ID</label>  <input className="text" type="text" palceholder="Enter Your Email Address"/>
                                <br />
                                <input className="check"  type="checkbox"/>
                                <span className="pass">I Have a Password</span>
                                
                            </div>
                            <div>
                                
                                <button className="in">SIGN IN</button>
                                <button className="inn">SIGN IN</button>
                                <button className="innn">?</button>
                                <p className="p">Sign In For Express Checkout.<br/> Exciting Offers & More.</p>
                            </div>
                        </div>

                    </div>


                    <div className="add">
                        <p>Add Shipping Address</p>

                        <label className="label">Name</label>
                        <span className="spp">----------</span>
                        
                        <input className="name" type="text" placeholder="Enter Name"required/>
                        <br /><br />

                        <label className="label">Mobile </label>
                        <span className="spp">--------</span>
                        <input className="name" type="number" placeholder="Mobile NO."required/>
                        <br /><br />

                        <label className="label">Pincode</label>
                        <span className="spp">--------</span>
                        <input className="name" type="text" placeholder="Pincode"required/>
                        <br /><br />

                        <label className="label">Address</label>
                        <span className="spp">--------</span>
                        <input className="namme" type="text" placeholder="Enter Address"required/>
                        <br /><br />

                        <span className="spp">-------------------</span>
                        <input className="city" type="text" placeholder="City"required/>
                        
                        <select className="select">
                            <option value="">Select State</option>
                            <option value="">Delhi</option>
                            <option value="">Maharastra</option>
                            <option value="">Andhra Pradesh</option>
                            <option value="">Assam</option>
                            <option value="">Bihar</option>
                            <option value="">Goa</option>
                            <option value="">Haryana</option>
                            <option value="">West Bengal</option>
                            <option value="">Jharkhand</option>
                            <option value="">Kerala</option>
                            <option value="">Himachal Pardesh</option>
                            <option value="">Manipur</option>
                            <option value="">Mizoram</option>
                            <option value="">Nagaland</option>
                            <option value="">Jammu & Kashmir</option>
                            <option value="">Karnataka</option>
                            <option value="">Punjab</option>
                            <option value="">Meghalaya</option>
                        </select>
                        <br /><br />

                    <span className="spp">--------------------</span>
                    <button className="namee">India</button>
                    <br /><br />
                    <Link to="/payment">
                      <button className="save">SAVE & CONTINUE</button>
                      </Link>  
                    </div>
            </div>
            <div className="total">
            <p>Cart value --- <span>₹{place.carttotal} </span></p>
                            <p>Retails Discount --- <span>(-)₹ 5,453</span></p>
                            <p>Give India --- <span>₹ 99</span></p>
                            <p>Delivery & Assembly Charges Extra. Enter Pincode To Know</p>
                            <hr />
                            <h4>Total---<span>₹ {place.totalAmount} </span></h4> 
            </div>
        </div>
    </section>
    
    </>
}
export default Billing