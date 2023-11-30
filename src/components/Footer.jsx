import React from "react";
import footer_logo from "../../public/footer.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12">
            <img src={footer_logo} alt="" />
            <p> &copy; Copyright Finsweet 2022</p>

            <span>(480) 555-0103</span>
            <span>4517 Washington Ave. </span>
            <span>finsweet@example.com</span>
          </div>
          <div className="col-lg-2 col-sm-6 col-12">
            <h3>Quicklinks</h3>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Surmons</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6 col-12">
            <h3>Connect</h3>

            <a className="social-link" href="#">
              <FaFacebook size={20} style={{ color: "#FFD2A4" }} />
            </a>
            <a className="social-link" href="#">
              <FaTwitter size={20} style={{ color: "#FFD2A4" }} />
            </a>
            <a className="social-link" href="#">
              <FaLinkedin size={20} style={{ color: "#FFD2A4" }} />
            </a>
          </div>
          <div className="col-lg-4 col-sm-12 col-12">
            <h1>Subscribe to get Latest Updates and News</h1>

            <form action="#">
              <input
                type="email"
                name=""
                id=""
                placeholder="Yourmail@gmail.com"
              />

              <button type="submit" className="btn btn-warning">
                COntact us
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
