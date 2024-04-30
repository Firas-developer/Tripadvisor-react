import React from 'react'
import './index.css'
import img1 from "./images/logo1.png"
import img2 from "./images/img1.jpg"
import img3 from "./images/card1.jpg"
import img4 from "./images/card2.jpg"
import img5 from "./images/card3.jpg"
import img6 from "./images/card4.jpg"
import img7 from "./images/card5.jpg"
import img8 from "./images/card6.jpg"
import img9 from "./images/card7.jpg"
import img10 from "./images/card8.jpg"
import img11 from "./images/explore1.jpg"
import img12 from "./images/explore2.jpg"
import img13 from "./images/explore3.jpg"
import img14 from "./images/trip1.jpg"
import img15 from "./images/trip2.jpg"
import img16 from "./images/trip3.jpg"
import img17 from "./images/trip4.jpg"
import img18 from "./images/dest1.jpg"
import img19 from "./images/dist2.jpg"
import img20 from "./images/dist3.jpg"
import img21 from "./images/dist4.jpg"
export default function App() {
  return (
    <div>
      <div class="container1">
        {/* <!-- Navigation Bar --> */}
        <div class="navbar">
          <div class="navbar__menu">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="navbar__left">
            <img src={img1} alt=""/>
              <h1>Tripadvisor</h1>
          </div>
          <div class="navbar__middle">
            <h4>Discover</h4>
            <h4>Trips</h4>
            <h4>Review</h4>
            <h4>Flights</h4>
          </div>
          <div class="navbar__right">
            <div class="navbar__right__rupees">
              <i class="fa-solid fa-globe"></i>
              <h4>INR</h4>
            </div>
            <p>Sign In</p>
          </div>
        </div>
        {/* <!-- Section-2 --> */}
        <div class="section2">
          <h1>Where to?</h1>
          <div class="section2__menubar">
            <p> <i class="fa-solid fa-magnifying-glass"></i> Search All</p>
            <p> <i class="fa-solid fa-hotel"></i> Hotels</p>
            <p> <i class="fa-solid fa-ticket"></i> Things to Do</p>
            <p><i class="fa-solid fa-utensils"></i> Restaurants</p>
            <p><i class="fa-solid fa-house"></i> Holiday Homes</p>
          </div>
          <div class="section2__search">
            <div class="section2__search__search">
              <i class="fa-solid fa-magnifying-glass mx-5"></i>
              <input type="text" className='text-sm ml-3' placeholder="Place to go, Hotels to go.."/>
            </div>
            <h4>Search</h4>
          </div>
        </div>
        {/* <!-- Section-3 --> */}
        <div class="section3">
          <div class="section3__img">
            <img src={img2} class="section3__mainimg"/>
              <div class="section3__text">
                <h1>Travellers’ Choice Best of the Best Restaurants</h1>
                <p>From fine dining to neighbourhood faves—the results are in.</p>
              </div>
              <div class="section3__winner">
                <h4>See the winners</h4>
              </div>
          </div>
        </div>
        {/* <!-- Section4 --> */}
        <div class="section4">
          <h2>Ways to tour Chennai(Madras)</h2>
          <p>Book these experiences for a close-up look at Chennai (Madras)</p>
          <div class="section4__card">
            <div class="card">
              <img src={img3} alt=""/>
                <h4>Mahabalipuram & Kanchipuram in a day from chennai by private car with guide</h4>
                <p>⭐⭐⭐⭐ 174</p>
                <h5>from ₹11,500 per adult</h5>
            </div>
            <div class="card">
              <img src={img4} alt=""/>
                <h4>Mahabalipuram and Kanchipuram in a day from chennai by private car with guide and person</h4>
                <p>⭐⭐⭐⭐ 19</p>
                <h5>from ₹11,000 per adult</h5>
            </div>
            <div class="card">
              <img src={img5} alt=""/>
                <h4>Kanchipuram in a day from chennai by private car with guide and stay in hotel</h4>
                <p>⭐⭐⭐⭐ 120</p>
                <h5>from ₹7,500 per adult</h5>
            </div>
            <div class="card">
              <img src={img6} alt=""/>
                <h4>Chennai city tour and private guide provided with the lunch with the up and down travel</h4>
                <p>⭐⭐⭐⭐ 90</p>
                <h5>from ₹11,500 per adult</h5>
            </div>
          </div>
        </div>
        {/* <!-- Section5 --> */}
        <div class="section5">
          <h2>Vibrant Asian cities</h2>
          <p>From rich cultural history to psychedelic streets</p>
          <div class="section5__card">
            <div class="card">
              <img src={img7} alt=""/>
                <h2>Hanoi, Vietnam</h2>
            </div>
            <div class="card">
              <img src={img8} alt=""/>
                <h2>Phueket, Thailand</h2>
            </div>
            <div class="card">
              <img src={img9} alt=""/>
                <h2>Lake, Vietnam</h2>
            </div>
            <div class="card">
              <img src={img10} alt=""/>
                <h2>Bail, Indonesia</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Explore Section --> */}
      <div class="explore">
        <h2>More to explore</h2>
        <div class="explore__card">
          <div class="card">
            <img src={img11} alt=""/>
              <h4>On the record: A musician's guide to Sydney's top sports</h4>
          </div>
          <div class="card">
            <img src={img12} alt=""/>
              <h4>8 lesser-known spots for the best Sydney harbour views</h4>
          </div>
          <div class="card">
            <img src={img13} alt=""/>
              <h4>A guide to Surry Hills, Sydney: great food, Aussie pubs</h4>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="section6">
          <h2>Dream Your Next Trip</h2>
          <p>Weekend getaways from Chennai (Madras)</p>
          <div class="section6__trip">
            <div class="card">
              <img src={img14} alt=""/>
                <h2>Mahabalipuram, India</h2>
            </div>
            <div class="card">
              <img src={img15} alt=""/>
                <h2>Pondicherry, India</h2>
            </div>
            <div class="card">
              <img src={img16} alt=""/>
                <h2>Bengaluru, India</h2>
            </div>
            <div class="card">
              <img src={img17} alt=""/>
                <h2>Tirupati, India</h2>
            </div>
          </div>
        </div>
        <div class="section7">
          <h2>Top destinations for your next holiday</h2>
          <p>Here's where your fellow travellers are headed</p>
          <div class="section7__destination">
            <div class="card">
              <img src={img18} alt=""/>
                <h2>Kyoto, Japan</h2>
            </div>
            <div class="card">
              <img src={img19} alt=""/>
                <h2>Hanoi, Vietnam</h2>
            </div>
            <div class="card">
              <img src={img20} alt=""/>
                <h2>Singapore, Singapore</h2>
            </div>
            <div class="card">
              <img src={img21} alt=""/>
                <h2>Dubai, UAE</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer section --> */}
      <div class="footer">
        <div class="footer__section1">
          <div class="footer__section1__info1">
            <div class="footer__section1__info__s1">
              <h4>About Tripadvisor</h4>
              <p>About Us</p>
              <p>Resources and Policies</p>
              <p>Trust & Safety</p>
              <p>Contact us</p>
            </div>
            <div class="footer__section1__info__s2">
              <h4>Explore</h4>
              <p>Write a Review</p>
              <p>Add a Place</p>
              <p>Travellers' Choice</p>
              <p>Help Centre</p>
            </div>
          </div>
          <div class="footer__section1__info2">
            <h4>Tripadvisor Sites </h4>
            <p>Book tours and attraction tickets on Viator</p>
          </div>
        </div>
        <div class="footer__section2">
          <div class="footer__section2__copyright">
            <img src={img1} alt=""/>
              <p>&copy; Firas Tripadvisor Clone All rights reserved
              </p>
          </div>
          <div class="footer__section2__socialmedia">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
