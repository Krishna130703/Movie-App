import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Discover, Watch, Enjoy - Your Gateway to Endless Movie Magic with Movix!
                <p> © 2024 by Krishna Sharma</p>
                </div>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/krishna-sharma-ab597a253/">
                       <span className="icon">
                          <FaLinkedin />
                       </span>
                    </a>
                    <a href="https://github.com/Krishna130703">
                      <span className="icon">
                          <FaGithub />
                      </span>
                    </a>
                    <a href="https://leetcode.com/u/krishna_1307/">
                       <span className="icon">
                         <SiLeetcode /> 
                       </span>
                    </a>

                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
