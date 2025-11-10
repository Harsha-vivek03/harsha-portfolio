
import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer-bottom">
        <div className="row justify-content-center text-center"> {/* Center the content */}
          <div className="col-12 footer-info">
          
            <p>All rights reserved &copy; 2024</p>
            <div className="social-links mt-3 d-flex justify-content-center">
            <a href="https://x.com/" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.facebook.com/harshavivek.nani?mibextid=ZbWKwL" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://github.com/Harsha-vivek03" className="github"><i class="fa-brands fa-github"></i></a>
          
          <a href="https://www.linkedin.com/in/harsha-vivek-a47309243" className="linkedin"><i className="bi bi-linkedin"></i></a>
        
            </div>
          </div>
        </div>
          <p>Designed & Developed by <a href="/">Harsha</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
