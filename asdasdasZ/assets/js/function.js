function headerBlock() {
    document.write(`<!-- ======= Header ======= --> 
       <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
        <a href="index.html" class="logo d-flex align-items-center">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1>ITDWC</h1>
        </a>
  
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="index.html" class="active">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Events</a></li>
            <li><a href="pricing.html">Forms & Reports</a></li>
            <!--
            <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            -->
            <li><a href="contact.html">Contact</a></li>
            <li><a class="get-a-quote" href="https://forms.gle/GAAL2818zerpAe9X6" target="_blank">Join Us</a></li>
            <li></li> 
          </ul>
        </nav><!-- .navbar -->
  
      </div>
    </header><!-- End Header -->`);
  }

  function footerBlock() {
    document.write(`<!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
  
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <a href="index.html" class="logo d-flex align-items-center">
              <span>ITDWC</span>
            </a>
            <p>Indian Truck Drivers Welfare Consortium (ITDWC) was working towards the welfare, growth and holistic development of the truck drivers for more than 5 years and it’s registered under Indian Trust Act as the mouthpiece related to nations transport industry. It was well known that the truck drivers are the backbone of road transport industries and supply chain particularly they take major role in increasing the Indian economy on supplying the goods & materials and function of Automobile Industries.</p>
            <!--
            <div class="social-links d-flex mt-4">
              <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
            </div>
            -->
          </div>

          
          
  
          
          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="services.html">Events</a></li>
              <li><a href="pricing.html">Forms & Events</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
  
          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              H.O : # D39, CMDA Truck Terminal Complex, <br>Madhavaram, Chennai - 600110. <br>Tamilnadu, India. <br><br>
              B.O : # 67/785, Madrasi Camp,<br> Jal Vihar, Lajpat Nagar –1,<br> Delhi – 110024.<br>
              <br>
              <strong>Phone :</strong> +91 88256 34445<br>
              <strong>Email:</strong> itdw.consortium@outlook.com<br>
            </p>
  
          </div>
  
        </div>
      </div>
  
      <div class="container mt-4">
        <p id="google_translate_element" style="position:absolute !important;"></p>
        <div class="copyright">
          &copy; Copyright <strong><span>Indian Truck Driver Welfare Consortium</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="https://bluontech.com/" target="_blank">Bluon Tech</a>
        </div>
      </div>
  
    </footer><!-- End Footer -->
    <!-- End Footer -->`);
  }