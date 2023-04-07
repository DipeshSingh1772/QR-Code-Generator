import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>DEVELOP@DPS</p>
        <ul className="socials">
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;2025 <a href="#">DEVELOP@DPS</a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
