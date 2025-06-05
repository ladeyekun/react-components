function Footer() {
  return (
    <footer>
      <div className="container flex flex-between height-100">
        <div className="socials grid grid-center">
          <ul className="flex gap-20">
            <li>
              <a href="#">
                <div className="grid grid-center">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="grid grid-center">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="grid grid-center">
                  <i class="fa-brands fa-x-twitter"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <p>All rights reserved. Prairie Hotel &copy; 2025</p>
        </div>        
      </div>
    </footer>
  );
}

export default Footer;