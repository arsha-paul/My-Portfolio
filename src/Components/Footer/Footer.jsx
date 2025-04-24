import React from "react";
import "../Footer/Footer.css";
import footer_logo from "../../assets/portfolio_logo.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer_top">
        <div className="footer_top_left">
            <img src={footer_logo} alt="" srcset="" className='footer_logo' />
            <p>I’m a Frontend Developer with one year of experience, specializing in creating responsive, user-friendly web applications with clean, efficient code and modern design principles.</p>
        </div>
        <div className="footer_top_right">
            <div className="footer_email_input">
                <img src={user_icon} alt="" srcset="" />
                <input type="email" name="" id="" placeholder='enter your email' />
            </div>
            <div className="footer_subscribe">Subscribe</div>
        </div>
      </div>
      <hr /> */}
      <div className="footer_bottom" style={{ textAlign: "center" }}>
        <div className="footer_bottom_left">
          &copy;2025 Arsha Paul . All Rights reserved.
        </div>
        <div className="footer_bottom_right"></div>
      </div>
    </div>
  );
};

export default Footer;
