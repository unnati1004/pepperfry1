import { Link , Navigate} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";
import './Navbar.css';
// import {Product} from "./Product";
import {Search,PersonOutlineRounded, ShoppingCartOutlined} from "@material-ui/icons";
// const Navbardiv= styled.div`

// `;


export const Navbar = () => {

    const [Drop, setDrop]= useState(false);
    const [Drop1, setDrop1]= useState(false);
    const [Drop2, setDrop2]= useState(false);
    const [Drop3, setDrop3]= useState(false);
    const [Drop4, setDrop4]= useState(false);
    const [Drop5, setDrop5]= useState(false);
    const [Drop6, setDrop6]= useState(false);
    const [Drop7, setDrop7]= useState(false);
    const [Drop8, setDrop8]= useState(false);
    const [Drop9, setDrop9]= useState(false);

    function displayNone(e){
        
    }
  return (
    <div id="maind">
        {/* <Navbardiv> */}
        <div id="topn">
          <p id="ltop1" className="ltop">Shubh Aarambh Sale | Up to 60% Off | Use Code <span style={{color:"red"}}>SHUBH</span></p>
          <p id="ltop2" className="ltop">Extra 20% Cashback On All Orders |<span>T&C Apply </span><Link to={"/signup"}><span style={{color:"red"}}>Sign Up</span></Link></p>
        </div>
        <div id="topn1">
            <div id="topn12">
               <p>Sell on Pepperfry</p> 
               <p>Become a Franchisee</p>
               <p> Buy in Bulk</p>
               <p> Find a Studio</p>
            </div>
            <div id="topn13">
                <Link to={"/pincode"}>
               <p className="pin">Enter Pincode</p> 
               </Link>
               <p className="pin" style={{color:"red"}}>Find Pepperfry studio</p>
            </div>
        </div>

         <div id="navbar"> 
         <div id="navbar1">
      <Link to="/"> <img className="mlogo" src="https://techstory.in/wp-content/uploads/2018/03/Pepperfry.png" alt="" srcset="" /></Link> 
        
         <input id="inps"  type="text" placeholder="Your door to happiness opens with a search" />

         <Search className="searchb" />
        

         <Link to={"/help"}>
         <div>
             <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt="" />
         </div>
         </Link>
      
         <Link to= "/register">
         <div className="navprofile">     
         <PersonOutlineRounded style={{color:"black"}}   />
        
         </div>
         </Link>
         <Link to={"/wishlist"}>
         <div>
             <img src="https://ii1.pepperfry.com/images/svg/icon-wishlist-21.svg" alt="" />
         </div>
         </Link>
         <Link to="/cart">
         <div className="cart"> 
             <ShoppingCartOutlined style={{color:"black"}} />
           
         </div>
         </Link>
         </div>
      </div>
      
      <div id="dropd">
          <div id="dropd1">
          <p className="texthover" id="eth" onMouseEnter={(e) => {
              setDrop(true)
            displayNone(e)
          }} onMouseLeave={() => setDrop(true)}>Furniture</p>
          <p className="texthover" onMouseEnter={() => setDrop1(true)} onMouseLeave={() => setDrop1(false)}>Sofas & Recliners</p>
          <p className="texthover" onMouseEnter={() => setDrop2(true)} onMouseLeave={() => setDrop2(false)}>Cabinetry</p>
          <p className="texthover" onMouseEnter={() => setDrop3(true)} onMouseLeave={() => setDrop3(false)}>Beds</p>
          <p className="texthover" onMouseEnter={() => setDrop4(true)} onMouseLeave={() => setDrop4(false)}>Matresses</p>
          <p className="texthover"  onMouseEnter={() => setDrop5(true)} onMouseLeave={() => setDrop5(false)}>Furnishings</p>
          <p className="texthover"  onMouseEnter={() => setDrop6(true)} onMouseLeave={() => setDrop6(false)}>Decor</p>
          <p className="texthover" onMouseEnter={() => setDrop7(true)} onMouseLeave={() => setDrop7(false)}>Lighting</p>
          <p className="texthover" id="elec" onMouseEnter={() => setDrop8(true)} onMouseLeave={() => setDrop8(false)}>Appliances</p>
          <p className="texthover" id="elec" onMouseEnter={() => setDrop9(true)} onMouseLeave={() => setDrop9(false)}>Modular</p>
          </div>
      </div>
      {(Drop==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/armschair'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii1.pepperfry.com/media/catalog/product/e/r/494x544/erin-seating-stool-navy-blue-colour-by-riance-creations-erin-seating-stool-navy-blue-colour-by-rianc-f0vbd5.jpg" alt="" />
       </div>
      </div>)
:""}


{(Drop1==true)?(<div className="down">
       <div className="dowp">
           <p>By Size</p>
           <p>By Type</p>
           <p>By Style</p>
           <p>By Material</p>
           <p>Sofa Chairs</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>3 Seater Sofas</p>
           <p>2 Seater Sofas</p>
           <Link id="link" to={'/armschair'}><p>1 Seater Sofas</p></Link>
           <p>Sectional Sofas</p>
           <p>Sofa Sets</p>
           <p>1 Seater Recliners</p>
           <p>2 Seater Recliners</p>
           <p>3 Seater Recliners</p>
           <p>Recliner Sets</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii2.pepperfry.com/media/catalog/product/a/r/494x544/aric-chaise-lounger--in-grey-colour-by-muebles-casa-aric-chaise-lounger--in-grey-colour-by-muebles-c-opnt5n.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop2==true)?(<div className="down">
       <div className="dowp">
           <p>Wardrobes</p>
           <p>Shoe Racks</p>
           <p>Storage</p>
           <p>Entertainment Units</p>
           <p>Bar</p>
           <p>Kids Storage</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>1 Door Wardrobes</p>
           <p>2 Door Wardrobes</p>
           <Link id="link" to={'/product'}><p>3 Door Wardrobes</p></Link>
           <p>4 Door Wardrobes</p>
           <p>4+ Door Wardrobes</p>
           <p>Sliding Door Wardrobes</p>
           <p>Fabric Wardrobes</p>
           <p>Kids Wardrobes</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii1.pepperfry.com/media/catalog/product/t/i/494x544/tiber-solid-wood-cabinet-in-natural-acacia-finish-by-woodsworth-tiber-solid-wood-cabinet-in-natural--i9e3gg.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop3==true)?(<div className="down">
       <div className="dowp">
           <p>By Size</p>
           <p>By Storage</p>
           <p>Kids & Teens</p>
           <p>By Material</p>
           <p>By Style</p>
           <p>Mattresses</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Queen Size Beds</p>
           <p>King Size Beds</p>
           <Link id="link" to={'/product'}><p>Single Beds</p></Link>
           <p>Box Storage</p>
           <p>Hydraulic</p>
           <p>Drawer</p>
           <p>No Storage</p>
           <p>Double Beds</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii1.pepperfry.com/media/catalog/product/m/e/494x544/metro-queen-size-bed-in-black-colour-by-bantia-furniture-metro-queen-size-bed-in-black-colour-by-ban-esc61x.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop4==true)?(<div className="down">
       <div className="dowp">
           <p>Mattresses</p>
           <p>Mattresses type</p>
           <p>Mattresses firmness</p>
           <p>Mattresses brand</p>
           
       </div>
       <div id="divcol" className="dowp1">
           <p>Mattress Sizes</p>
           <p>Foldable Mattress</p>
           <Link id="link" to={'/product'}><p>Baby Mattress</p></Link>
           <p>Kids Mattress</p>
           <p>Mattress Protectors</p>
           <p>Mattress Toppers</p>
           <p>Pillows</p>
           <p>Bed Wedges</p>
           <p>Mattress Steaming</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii1.pepperfry.com/media/catalog/product/n/o/494x544/nor-orthopedic-6-inches-memory---hr-foam-single-size-mattress-by-clouddio-nor-orthopedic-6-inches-me-6ospse.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop5==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Furninshing_Collection_WEB_1_2x.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop6==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/wallart_trends_web_23122021_2.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop7==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Chandelier_trends_web_24122021_2.jpg" alt="" />
       </div>
      </div>)
:""}
 {(Drop8==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
       <div className="dowp1">
           <h3 className="brand">Popular Brands</h3>
           <p>@home</p>
           <p>Amberville</p>
           <p>Boingg! - A Happy Start</p>
           <p>Chumbak</p>
           <p>Durian</p>
           <p>Fabuliv</p>
           <p>HomeTown</p>
           <p>Mudramark</p>
           <p>Orange Tree</p>
           <p>Sattva</p>
           <p>ValueWud</p>
           <p>Woodsworth</p>
           <p>View All Brands </p>
       </div>
       <div className="dowp2">
           <p className="lasttext">Alex Daisy</p>
           <p>Bohemiana</p>
           <p>CasaCraft</p>
           <p>Crystal Furnitech</p>
           <p>Evok</p>
           <p>Godrej Interio</p>
           <p>Home Centre</p>
           <p>Mintwud</p>
           <p>Nilkamal</p>
           <p>Prima</p>
           <p>Spacewood</p>
           <p>Wakefit</p>
           <p>YiPi Online</p>
       </div>
       <div className="dowpimg">
       <img src="https://ii3.pepperfry.com/media/catalog/product/k/e/494x544/kent-wet---dry-force-cyclonic-vacuum-cleaner-2000-watt--white-and-silver--kent-wet---dry-force-cyclo-xifk92.jpg" alt="" />
       </div>
      </div>)
:""}

{(Drop9==true)?(<div className="down">
       <div className="dowp">
           <p>Sofas and Recliners</p>
           <p>Seating</p>
           <p>Chairs</p>
           <p>Beds</p>
           <p>Cabinetry</p>
           <p>Tables</p>
           <p>Dining</p>
           <p>Kids and Teens</p>
           <p>Home Office</p>
           <p>Sofa Chairs</p>
           <p>Entertainment Units</p>
           <p>Outdoor</p>
           <p>Bar Furniture</p>
           <p>Furniture & Home Services</p>
       </div>
       <div id="divcol" className="dowp1">
           <p>Arm Chairs</p>
           <p>Rocking Chairs</p>
           <Link id="link" to={'/product'}><p>Cantilever Chairs</p></Link>
           <p>Folding Chairs</p>
           <p>Iconic Chairs</p>
           <p>Cafe Chairs</p>
           <p>Dining Chairs</p>
           <p>Office Chairs</p>
       </div>
      
       <div className="dowpimg1">
       <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/modular_banner_may2020.jpg" alt="" />
       </div>
      </div>)
:""}

    </div>
  );
};