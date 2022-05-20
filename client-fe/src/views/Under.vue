<template>
  <footer id="dk-footer" class="dk-footer"> 
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-4">
          <div class="dk-footer-box-info" style="margin-top:80px">
            <a href="https://elec-club-iitb.github.io/assets/ico/logo.png" class="footer-logo">
              <v-icon class="logo" style="text-decoration: none; color:lightblue">mdi-electron-framework</v-icon>
            </a>
            <p class="footer-info-text">
              Reference site about Lorem Ipsum, giving information on its
              origins, as well as a random Lipsum generator.
            </p>
            <div class="footer-social-link">
              <h3>Follow us</h3>
              <ul>
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
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End Social link -->
          </div>
          <!-- End Footer info -->
          <div class="footer-awarad">
            <img src="images/icon/best.png" alt="" />
            
          </div>
        </div>
        <!-- End Col -->
        <div class="col-md-12 col-lg-8">
          <div class="row">
            <div class="col-md-6">
              <div class="contact-us">
                <div class="contact-icon">
                  <i class="fa fa-map-o" aria-hidden="true"></i>
                </div>
                <!-- End contact Icon -->
                <div class="contact-info">
                  <h3>Electronic Device</h3>
                  <p>Thanh Xuan</p>
                </div>
                <!-- End Contact Info -->
              </div>
              <!-- End Contact Us -->
            </div>
            <!-- End Col -->
            <div class="col-md-6">
              <div class="contact-us contact-us-last">
                <div class="contact-icon">
                  <i class="fa fa-volume-control-phone" aria-hidden="true"></i>
                </div>
                <!-- End contact Icon -->
                <div class="contact-info">
                  <h3>0388820435</h3>
                  <p>Give us a call</p>
                </div>
                <!-- End Contact Info -->
              </div>
              <!-- End Contact Us -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Contact Row -->
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget footer-left-widget">
                <div class="section-heading">
                  <h3>Useful Links</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
              <!-- End Footer Widget -->
            </div>
            <!-- End col -->
            <div class="col-md-12 col-lg-6">
              <div class="footer-widget">
                <div class="section-heading">
                  <h3>Subscribe</h3>
                  <span class="animate-border border-black"></span>
                </div>
                <p>
                  <!-- Don’t miss to subscribe to our new feeds, kindly fill the form below. -->
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well.
                </p>
                <form action="#">
                  <div class="form-row">
                    <div class="col dk-footer-form">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                      />
                      <button type="submit">
                        <i class="fa fa-send"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <!-- End form -->
              </div>
              <!-- End footer widget -->
            </div>
            <!-- End Col -->
          </div>
          <!-- End Row -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Widget Row -->
    </div>
    <!-- End Contact Container -->

    
    
  </footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style scoped>
body {
  color: #ccc;
}

.footer-widget p {
  margin-bottom: 27px;
}
p {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 28px;
}

.animate-border {
  position: relative;
  display: block;
  width: 115px;
  height: 3px;
  background: #007bff;
}

.animate-border:after {
  position: absolute;
  content: "";
  width: 35px;
  height: 3px;
  left: 0;
  bottom: 0;
  border-left: 10px solid #fff;
  border-right: 10px solid #fff;
  -webkit-animation: animborder 2s linear infinite;
  animation: animborder 2s linear infinite;
}

@-webkit-keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

@keyframes animborder {
  0% {
    -webkit-transform: translateX(0px);
    transform: translateX(0px);
  }
  100% {
    -webkit-transform: translateX(113px);
    transform: translateX(113px);
  }
}

.animate-border.border-white:after {
  border-color: #fff;
}

.animate-border.border-yellow:after {
  border-color: #f5b02e;
}

.animate-border.border-orange:after {
  border-right-color: #007bff;
  border-left-color: #007bff;
}

.animate-border.border-ash:after {
  border-right-color: #eef0ef;
  border-left-color: #eef0ef;
}

.animate-border.border-offwhite:after {
  border-right-color: #f7f9f8;
  border-left-color: #f7f9f8;
}

/* Animated heading border */
@keyframes primary-short {
  0% {
    width: 15%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 10%;
  }
}

@keyframes primary-long {
  0% {
    width: 80%;
  }
  50% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}

.dk-footer {
  padding: 75px 0 0;
  background-color: #dddddd;
  position: relative;
  z-index: 2;
  
  border-top: 1px solid rgb(190, 189, 189);
}
.dk-footer .contact-us {
  margin-top: 0;
  margin-bottom: 30px;
  padding-left: 80px;
}
.dk-footer .contact-us .contact-info {
  margin-left: 50px;
}
.dk-footer .contact-us.contact-us-last {
  margin-left: -80px;
}
.dk-footer .contact-icon i {
  font-size: 24px;
  top: -15px;
  position: relative;
  color: #007bff;
}

.dk-footer-box-info {
  position: absolute;
  top: -122px;
  background: #378bcf;
  padding: 40px;
  z-index: 2;
}
.dk-footer-box-info .footer-social-link h3 {
  color: #fff;
  font-size: 24px;
  margin-bottom: 25px;
}
.dk-footer-box-info .footer-social-link ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dk-footer-box-info .footer-social-link li {
  display: inline-block;
}
.dk-footer-box-info .footer-social-link a i {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  background: #000;
  margin-right: 5px;
  color: rgb(253, 253, 253);
}
.dk-footer-box-info .footer-social-link a i.fa-facebook {
  background-color: #3b5998;
}
.dk-footer-box-info .footer-social-link a i.fa-twitter {
  background-color: #55acee;
}
.dk-footer-box-info .footer-social-link a i.fa-google-plus {
  background-color: #dd4b39;
}
.dk-footer-box-info .footer-social-link a i.fa-linkedin {
  background-color: #0976b4;
}
.dk-footer-box-info .footer-social-link a i.fa-instagram {
  background-color: #b7242a;
}

.footer-awarad {
  margin-top: 285px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.footer-awarad p {
  color: rgb(0, 0, 0);
  font-size: 24px;
  font-weight: 700;
  margin-left: 20px;
  padding-top: 15px;
}

.footer-info-text {
  margin: 26px 0 32px;
  color: rgb(255, 255, 255);
}

.footer-left-widget {
  padding-left: 80px;
}

.footer-widget .section-heading {
  margin-bottom: 35px;
}

.footer-widget h3 {
  font-size: 24px;
  color: rgb(0, 0, 0);
  position: relative;
  margin-bottom: 15px;
  max-width: -webkit-fit-content;
  max-width: -moz-fit-content;
  max-width: fit-content;
}

.footer-widget ul {
  width: 50%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.footer-widget li {
  margin-bottom: 18px;
  text-decoration: none;
}

.footer-widget p {
  margin-bottom: 27px;
}

.footer-widget a {
  text-decoration: none;
  color: #878787;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.footer-widget a:hover {
  color: #007bff;
}

.footer-widget:after {
  content: "";
  display: block;
  clear: both;
}

.dk-footer-form {
  position: relative;
}
.dk-footer-form input[type="email"] {
  padding: 14px 28px;
  border-radius: 50px;
  background: #ffffff;
  border: 1px solid #2e2e2e;
}
.dk-footer-form input::-webkit-input-placeholder,
.dk-footer-form input::-moz-placeholder,
.dk-footer-form input:-ms-input-placeholder,
.dk-footer-form input::-ms-input-placeholder,
.dk-footer-form input::-webkit-input-placeholder {
  color: #878787;
  font-size: 14px;
}
.dk-footer-form input::-webkit-input-placeholder,
.dk-footer-form input::-moz-placeholder,
.dk-footer-form input:-ms-input-placeholder,
.dk-footer-form input::-ms-input-placeholder,
.dk-footer-form input::placeholder {
  color: #878787;
  font-size: 14px;
}
.dk-footer-form button[type="submit"] {
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 24px 12px 17px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid #007bff;
  background: #007bff;
  color: #fff;
}
.dk-footer-form button:hover {
  cursor: pointer;
}

/* ==========================

    Contact

=============================*/
.contact-us {
  position: relative;
  z-index: 2;
  margin-top: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.contact-icon {
  position: absolute;
}
.contact-icon i {
  font-size: 36px;
  top: -5px;
  position: relative;
  color: #007bff;
}

.contact-info {
  margin-left: 75px;
  color: rgb(2, 2, 2);
}
.contact-info h3 {
  font-size: 20px;
  color: rgb(0, 0, 0);
  margin-bottom: 0;
}

.copyright {
  padding: 28px 0;
  margin-top: 55px;
  background-color: #202020;
}
.copyright span,
.copyright a {
  color: #c5c5c5;
  -webkit-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
}
.copyright a:hover {
  color: #007bff;
}

.copyright-menu ul {
  text-align: right;
  margin: 0;
}

.copyright-menu li {
  display: inline-block;
  padding-left: 20px;
}


.logo{
  margin-top: 8px;
  font-size: 85px;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>