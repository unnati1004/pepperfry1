import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import "./Home.css";
export const Home=()=>{
const [slideData, setSlide]= useState(-1);
const [slideData1, setSlide1]= useState(-1);

var arr=["https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_Web_2X_28032022_nd.jpg","https://ii2.pepperfry.com/media/wysiwyg/banners/HB-02_2154x1050_04032022.jpg", "https://ii3.pepperfry.com/media/wysiwyg/banners/HB-03_2154x1050_04032022.jpg", "https://ii1.pepperfry.com/media/wysiwyg/banners/HB-04_2154x1050_04032022.jpg"]
var arr1=["https://ii3.pepperfry.com/media/catalog/product/a/u/494x544/aurora-king-bed-in-natural-finish---casacraft-by-pepperfry-aurora-king-bed-in-natural-finish---casac-t98qd8.jpg", "https://ii3.pepperfry.com/media/catalog/product/c/o/494x544/cobain-6-seater-dinning-table-set-in-natural-finish---casacraft-by-pepperfry-cobain-6-seater-dinning-mp3f8e.jpg", "https://ii1.pepperfry.com/media/catalog/product/l/i/494x544/liliana-coffee-table-in-natural-finish---casacraft-by-pepperfry-liliana-coffee-table-in-natural-fini-l910m4.jpg", "https://ii1.pepperfry.com/media/catalog/product/m/a/494x544/manfredo-2-seater-sofa-in-light-grey-colour-with--natural-finish-manfredo-2-seater-sofa-in-light-gre-ozulie.jpg"]
useEffect(()=>{
   setInterval(()=>{
     
        setSlide((prev)=>{
            if(prev===3){
                return prev=0
            }
            return prev+1
        })
       
   }, 2000)
},[])

useEffect(()=>{
    setInterval(()=>{
      
         setSlide1((prev)=>{
             if(prev===3){
                 return prev=0
             }
             return prev+1
         })
        
    }, 2000)
 },[])
// console.log(slideData)
    return(
        <div>
                 <div>
     <div id="upperdiv">
      <div id="large">
       <img className="imgtop" src={arr[slideData]} alt="" />
      </div>
      <div id="small">
          <img className="imgtop" src={arr1[slideData1]} alt="" />
      </div>
     </div>
     {/* <br /> */}
     <div id="div2">
         <img className="imgtop" src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_24032022.jpg" alt="" />
     </div>
     {/* <br /> */}
     <h1 className="head">Shop By Room</h1>
     <div id="box1">
         <div id="gul" className="box11">
             <img className="img1" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1__2x_14032022.jpg" alt="" />
             <p>Living Room</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2__2x_14032022.jpg" alt="" />
         <p>Work From Home</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3__2x_14032022.jpg" alt="" />
         <p>Living Room</p>
         </div>
         <div className="box11">
         <img className="img1" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4__2x_14032022.jpg" alt="" />
         <p>Living Room</p>
         </div>
     </div>
     <br />
     <br />
     <h1 className="head">What's Everyone Eyeing?</h1>
     <div id="box2">
     <div className="box21">
     <img className="img2" src="https://ii1.pepperfry.com/media/catalog/product/m/e/494x544/metro-queen-size-bed-in-black-colour-by-bantia-furniture-metro-queen-size-bed-in-black-colour-by-ban-esc61x.jpg" alt="" />
     </div>
         <div className="box21">
         <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_14032022.jpg" alt="" />
         </div>
         <div id="box23" className="box21">
             <div>
                 <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_14032022.jpg" alt="" />
             </div>
             <div>
                 <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_14032022.jpg" alt="" />
             </div>
             <div>
                 <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_14032022.jpg" alt="" />
             </div>
             <div>
                 <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_14032022.jpg" alt="" />
             </div>
         </div>
     </div>
     <br />
     <h1 className="head">Your Pocket-Friendly Shoppe</h1>
     <div id="box3">
         <div className="box11">
             <img className="img1" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_14032022.jpg" alt="" />
             <p className="p1">Office Chairs</p>
             <p className="price">Under Rs. 8,000</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_14032022.jpg" alt="" />
             <p className="p1">Shoe Racks</p>
             <p className="price">Under Rs. 6,000</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_14032022.jpg" alt="" />
             <p className="p1">End Tables</p>
             <p className="price">Under Rs. 7,000</p>
         </div>
         <div className="box11">
             <img className="img1" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_4_2x_14032022.jpg" alt="" />
             <p className="p1">Study Tables</p>
             <p className="price">Under Rs. 9,000</p>
         </div>
     </div>
     <br />
     <br />
     <br />
     <div id="box4">
     <div className="box41">
         <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Mattress_Block_Web_2X_04032022.jpg" alt="" />
     </div>
         <div className="box41">
             <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Modular_Block_Web_2X_04032022.jpg" alt="" />
         </div>
     </div>
     </div>   
            <div>
                <Footer/>
            </div>
        </div>
    )
}