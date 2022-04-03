import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Productdetails.css"
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Rating from '@mui/material/Rating';
import StarIcon from '@material-ui/icons/Stars.js';
import Footer from "../footer/Footer";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// import styled from "styled-components";
export const ProductDetail = () => {
    const value = 3.5;
    const [data1, setData1] = useState([]);
    const [data, setData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://pepperfrybackend.herokuapp.com/armschair/${id}`).then((e) => {
            setData(e.data);
            // console.log(e.data);
        });
    }, [id]);
    useEffect(() => {
        axios.get("https://pepperfrybackend.herokuapp.com/armschair").then((e) => {
            setData1(e.data);
            console.log(e.data);
        });
    }, []);
    const Handleitem = () => {
        // console.log(id1);
        axios.get(`https://pepperfrybackend.herokuapp.com/product/${id}`).then(({ data }) => {
            let item1 = JSON.parse(localStorage.getItem("product")) || [];
            item1.push(data);
            localStorage.setItem("product", JSON.stringify(item1))
        });
    }
    return (
            <div>
                    <div>
            <div  className="main">
                <div className="image">
                    <img src={data.image} alt="chair" />
                </div>
                <div className="details">
                    <div className="main_div">
                        <div>
                            <h3 className="font1">{data.name}</h3>
                            <h3 className="made">{data.creator}</h3>
                        </div>
                        <div className="heart">
                            <Checkbox {...label} className="icon" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        </div>
                    </div>

                    <div className="rating">
                        <Rating
                            name="text-feedback"
                            value={value}
                            readOnly
                            precision={0.5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <h4>12 Months' Warranty</h4>
                    </div>
                    <h2>{data.price}</h2>
                     <p>Save ₹ 7,617 MRP ₹ 18,499 (Inc of all taxes)</p>
                    <p>EMI Starting ₹ 513 view options</p>

                    <img  className="img2" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_28032022_nd.jpg" alt="" />
                    <div>
                        <select id="cars">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button id="add" className="cart" onClick={()=>{
                            // console.log(data.id)
                            Handleitem()
                        }}>ADD TO CART</button>
                        <button id="buy" className="cart">BUY NOW </button>

                    </div>
                    <div className="describe">
                    <div>
                        <h3>MORE</h3>
                        <h3>OFFERS</h3>
                    </div>
                    <div>
                        <p>Extra 10% Off on Standard Chartered CardsCode: PFSC10</p>
                         <p>Get Extra 10% Off up to Rs 1500 on Standard Chartered Debit and Credit Cards. Applicable on orders above Rs 10,000</p>
                         <p>Extra 10% Off On Kotak Debit Cards EMICode: PFKMDCEMI10
                            Get 10% Off upto Rs 2000 on Kotak Debit Card EMI transactions</p>
                         <p>Extra 10% Off on Standard Chartered EMICode: PFSCEMI10</p>
                            <p>Get Extra 10% Off on up to Rs 2500 on Standard Chartered Credit Card EMI transactions. Offer applicable on Orders above 10,000</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="dum">
                    <h2>More Cantilever Chairs</h2>
                    <h3 className="view">view all</h3>
                </div>
            <div className="low">
                {
                    
                    data1.map((e) => {
                        return <div key={String(e.id)} className="low1">
                            <img className="img_div"  src={e.image} alt="" />
                            <p>{e.name}</p>
                            <h3 className="price1">{e.price}</h3>
                        </div>
                    })
                }
            </div>
        </div>
        <div>
                <Footer/>
            </div>
            </div>
    )
}