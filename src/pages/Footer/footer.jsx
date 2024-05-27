import React from 'react';
import "./footer.css";
import { FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div>
                <p>In art, the hand can never execute anything higher than the heart can imagine.</p>
                <p>Art speaks where words are unable to explain, painting the soul’s deepest emotions with strokes of silence and color, transcending boundaries and touching hearts beyond the visible.</p>
              </div><br></br>
              <div>
                <div className="social-icons">
                  <a href="https://twitter.com/AdityaV51270627"><FaTwitter /></a>
                  <a href="https://www.instagram.com/verma_complicated_boy"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/in/aditya-verma-swe"><FaLinkedinIn /></a>
                </div>
              </div>
              <div>
                <p>Email: avermaav2002@gmail.com</p>
                <p>Phone: +91-9026590409</p>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <p>&copy; {new Date().getFullYear()} Complicated_Boy😎. All Rights Reserved.</p>
          </div>
        </footer>
      );
}
