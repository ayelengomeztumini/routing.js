import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest
  } from "react-icons/fa";
import React from "react";
import "./footer.css";
{/*import facebook from './facebook.png';*/}

  

const Footer = () => {
    let circleClasses = "inline-block p-7 rounded-full w-20 mx-auto";
    let iconStyles = { color: "white", fontSize: "1.5em" };

    return (
        <div className="footer_all">
            <footer className="design">Design by Ayelen Gomez</footer>
        
            <footer className="politica">
                Privacy Policy </footer>
               
            <footer className="terminos">
                  Terms & Conditions </footer>
    
        <div className="social_icons">
            
                <span style={{ background: "#3B5998" }} className={circleClasses}>
                <FaFacebookF style={iconStyles} />
                </span>
            
                <span style={{ background: "#1DA1F2" }} className={circleClasses}>
                <FaTwitter style={iconStyles} />
                </span>
            
                <span style={{ background: "black" }} className={circleClasses}>
                <FaInstagram style={iconStyles} />
                </span>
            
                <span style={{ background: "#BD081C" }} className={circleClasses}>
                <FaPinterest style={iconStyles} />
                </span>
          

        </div>

           {/* <div className="in_icon">
                <icon url="https://linkedin.com" />
            </div>

            <div className="social_media">
                <img src={facebook} className= "facebook" alt=""/>
                <p>Texto</p>
            </div>*/}

        </div>
        );
    }
    
export default Footer;