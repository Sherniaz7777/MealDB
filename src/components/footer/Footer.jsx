import React from "react";
import "../../components/footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="Container">
        <div className="footer-in">
          <div className="footer-in-1">
            <p>© 2024 TheMealDB</p>
            <p>
              Proudly built in the UK
              <img
                src="https://www.themealdb.com/images/icons/flags/big/16/gb.png"
                alt=""
              />
            </p>
          </div>

          <div className="footer-in-2">
            <div className="footer-in-2-1">
              <p>Socials: </p>
              <img
                src="https://www.themealdb.com/images/facebook_icon.png"
                alt=""
              />
              <img
                src="https://www.themealdb.com/images/twitter_icon.png"
                alt=""
              />
              <img
                src="https://www.themealdb.com/images/discord_icon.png"
                alt=""
              />
            </div>

            <div className="footer-in-2-2">
              <img src="https://www.themealdb.com/images/logo-tcdb.png" alt="" />
              <img src="https://www.themealdb.com/images/logo-tadb.png" alt="" />
              <img src="https://www.themealdb.com/images/logo-tsdb.png" alt="" />
            </div>
          </div>
          <div className="footer-in-3">
            <p>About </p>
            <p>Faq</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
