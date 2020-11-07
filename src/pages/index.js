import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { FaStar } from "react-icons/fa"
import angle from "../images/right-arrow-angle.png"
import houseIcon from "../images/house-icon.svg"
// import listBanner from "../images/gatsby-astronaut.png"
import listing1 from "../images/Slide2.jpg"
import listing2 from "../images/Slide4.jpg"
import blog1 from "../images/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg"
import blog2 from "../images/jacques-bopp-Hh18POSx5qk-unsplash.jpg"
import blog3 from "../images/todd-kent-178j8tJrNlc-unsplash.jpg"
import garyP from "../images/gary-photo.jpg"
import emailIcon from "../images/email-icon.svg"
import locationIcon from "../images/location-icon.svg"
import phoneIcon from "../images/phonecall-icon.svg"
import saleIcon from "../images/sale-icon.svg"

import areaMap from "../images/Icon-metro-location.svg"
import lstLocationIcon from "../images/Area-Icon.svg"
import lstBathroomIcon from "../images/Bathroom-Icon.svg"
import lstBedIcon from "../images/Bed-Icon.svg"
import lstGarageIcon from "../images/Garage-Icon.svg"

import WebriQForm from "@webriq/gatsby-webriq-form"

import MySwiper from "../components/swiper/swiper"
// import SampleForm from "../components/form/form"
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import "react-lazy-load-image-component/src/effects/blur.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  // function showStar() {
  //   let x
  //   for (x = 0; x < 5; x++) {
  //     console.log(x)
  //     return <FaStar />
  //   }
  // }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} description={siteDescription} />
      <div className="fortransparent-overlay">
        <Hero />
        <section id="about-us">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-8 col-sm-12 m-auto">
                <span className="subtitle-txt">Why Choose Us</span>
                <h2>The Farnon Home Team</h2>
                <p>
                  Specializing in Listing of Homes, Veterans and First Time Home
                  Buyers in the Pikes Peak Region. We have the latest in
                  education and technology to offer you in order to stay ahead
                  of the competition!
                </p>
                <p>
                  Specializing in Listing of Homes, Veterans and First Time Home
                  Buyers in the Pikes Peak Region. We have the latest in
                  education and technology to offer you in order to stay ahead
                  of the competition!
                </p>
                <Link
                  to="#"
                  className="btn-gradient btn btn-primary text-uppercase mt-5"
                >
                  More About us
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="latest-listings">
          <div className="container">
            <span className="subtitle-txt text-center d-block">
              LATEST LISTINGS
            </span>
            <h2 className="text-center">Quick Property Listings</h2>
            <MySwiper slidesperview={1}>
              <div className="row bg-white">
                <div className="col-md-7 col-sm-12 property-listing">
                  <div className="listing-banner">
                    <img
                      src={listing1}
                      className="img-fluid"
                      alt="listBanner"
                      style={{ border: "6px solid #fff" }}
                    />
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 p-3 align-self-center">
                  <div className="list-details-1">
                    <p className="mb-0 pl-4">
                      <img
                        width={18}
                        src={areaMap}
                        className="img-fluid"
                        alt="icon"
                        style={{ position: "absolute", left: "15px" }}
                      />
                      <strong>1680 S Shoshone Street Denver, CO 80223 </strong>
                    </p>
                    <p style={{ paddingLeft: "27px" }}>
                      <small>Listing ID: 5277239</small>
                    </p>
                  </div>
                  <div className="list-details-wrap">
                    <div className="list-details-2 pt-3">
                      <ul className="list-inline py-3 mb-0">
                        <li className="list-inline-item text-center bg-white">
                          <img
                            src={lstBedIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>2 bds</p>
                        </li>
                        <li className="list-inline-item text-center bg-white">
                          <img
                            src={lstBathroomIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>1 ba</p>
                        </li>
                        <li className="list-inline-item text-center">
                          <img
                            src={lstLocationIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>175sqft</p>
                        </li>
                        <li className="list-inline-item text-center">
                          <img
                            src={lstGarageIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>1 ga</p>
                        </li>
                      </ul>
                      <div className="pnDBO pt-3">
                        <span className="list-price mr-3">$300,000</span>
                        <span className="DBO">DIRECT BUYERS ONLY</span>
                        <Link
                          to="#"
                          className="btn-gradient btn btn-primary text-uppercase mt-4"
                        >
                          VIEW ALL LISTINGS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd */}

              <div className="row bg-white">
                <div className="col-md-7 col-sm-12 property-listing">
                  <div className="listing-banner">
                    <img
                      src={listing2}
                      className="img-fluid"
                      alt="listBanner"
                    />
                  </div>
                </div>
                <div className="col-md-5 col-sm-12 p-3 align-self-center">
                  <div className="list-details-1">
                    <p className="mb-0 pl-4">
                      <img
                        width={18}
                        src={areaMap}
                        className="img-fluid"
                        alt="icon"
                        style={{ position: "absolute", left: "15px" }}
                      />
                      <strong>1050 S Shoshone Street Denver, CO 80223 </strong>
                    </p>
                    <p style={{ paddingLeft: "27px" }}>
                      <small>Listing ID: 52758239</small>
                    </p>
                  </div>
                  <div className="list-details-wrap">
                    <div className="list-details-2 pt-3">
                      <ul className="list-inline py-3 mb-0">
                        <li className="list-inline-item text-center bg-white">
                          <img
                            src={lstBedIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>2 bds</p>
                        </li>
                        <li className="list-inline-item text-center bg-white">
                          <img
                            src={lstBathroomIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>1 ba</p>
                        </li>
                        <li className="list-inline-item text-center">
                          <img
                            src={lstLocationIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>175sqft</p>
                        </li>
                        <li className="list-inline-item text-center">
                          <img
                            src={lstGarageIcon}
                            className="img-fluid"
                            alt="icon"
                          />
                          <p>1 ga</p>
                        </li>
                      </ul>
                      <div className="pnDBO pt-3">
                        <span className="list-price mr-3">$350,000</span>
                        <span className="DBO">DIRECT BUYERS ONLY</span>
                        <Link
                          to="#"
                          className="btn-gradient btn btn-primary text-uppercase mt-4"
                        >
                          VIEW ALL LISTINGS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MySwiper>
            <div className="BSR-properties row mt-5">
              <div className="col text-center p-0">
                <Link to="#">
                  <div className="bsr-box bg-white p-5 m-1">
                    <img
                      className="img-fluid"
                      src={houseIcon}
                      alt="houseIcon"
                    />
                    <span
                      className="font-weight-bold text-uppercase"
                      style={{ color: "#00088C", marginLeft: "10px" }}
                    >
                      BUY PROPERTIES
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col text-center p-0">
                <Link to="#">
                  <div className="bsr-box bg-white p-5 m-1">
                    <img
                      className="img-fluid"
                      src={houseIcon}
                      alt="houseIcon"
                    />
                    <span
                      className="font-weight-bold text-uppercase"
                      style={{ color: "#00088C", marginLeft: "10px" }}
                    >
                      SELL PROPERTIES
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col text-center p-0">
                <Link to="#">
                  <div className="bsr-box bg-white p-5 m-1">
                    <img
                      className="img-fluid"
                      src={houseIcon}
                      alt="houseIcon"
                    />
                    <span
                      className="font-weight-bold text-uppercase"
                      style={{ color: "#00088C", marginLeft: "10px" }}
                    >
                      RENT PROPERTIES
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="mis-vis">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto mis-vis-border">
              <div className="mis-vis-content text-center">
                <h3 className="mb-4">The Farnon Mission</h3>
                <p>
                  Your One-Stop Everything Real Estate Solution. Whether you are
                  a Seller of Residential or Commercial Property, a Buyer of
                  Primary Residential or Commercial Property, Buyers of
                  Investment Income Generated Properties (Rentals &/or Air BNB),
                  Buyers of Land Property, Renters who are Future Home Buyers, &
                  Property Management, The Farnon Home Team partners with some
                  of Colorado's Trusted Lenders & Preferred Vendors to support
                  the largest financial commitment you will make, to ensure your
                  experience is smooth.
                </p>
                <h3 className="mb-4 mt-5">The Farnon Vision</h3>
                <p>
                  Your One-Stop Resource for Everything Real Estate, now and in
                  the future
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="container">
          <div className="container text-center">
            <span className="subtitle-txt">testimonials</span>
            <h2>What Our Clients Say</h2>
            <div className="row py-5">
              <div className="col-md-4 col-sm-12">
                <div className="review-content">
                  <h3 className="mb-0">George Maldonado</h3>
                  <span>Colorado Springs, CO 2020</span>
                  <p className="pt-4">
                    It's not often that a former realtor with 227 agents who
                    worked under myself are allowed to give praise to another
                    realtor. <Link to="#">READ MORE</Link>
                  </p>
                  <div className="review-rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="review-content">
                  <h3 className="mb-0">Brent Johnson</h3>
                  <span>Florissant, CO 2020</span>
                  <p className="pt-4">
                    I worked with Gary looking for houses for about 8 months
                    before we found one in my budget and an area I loved.{" "}
                    <Link to="#">READ MORE</Link>
                  </p>
                  <div className="review-rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="review-content">
                  <h3 className="mb-0">Becca Ellis</h3>
                  <span>Colorado Springs, CO 2020</span>
                  <p className="pt-4">
                    Gary put myself and my husband at ease during the home
                    buying process. He asked insightful questions,{" "}
                    <Link to="#">READ MORE</Link>
                  </p>
                  <div className="review-rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-blog">
        <div className="container pb-5">
          <span className="subtitle-txt d-block text-center">latest blog</span>
          <h2 className="text-center">Useful Real Estate Insights</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-12">
              <div className="blogItem">
                <img className="img-fluid" src={blog1} alt="listBanner" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  I worked with Gary looking for houses for about 8 months
                  before we found one in my budget and an area I loved.{" "}
                  <Link to="#">READ MORE</Link>
                </p>
                <div className="date-wrap">
                  <div className="forVBorder">
                    <p className="mb-0">OCT</p>
                    <p className="mb-0">30/20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="blogItem">
                <img className="img-fluid" src={blog2} alt="listBanner" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  I worked with Gary looking for houses for about 8 months
                  before we found one in my budget and an area I loved.{" "}
                  <Link to="#">READ MORE</Link>
                </p>
                <div className="date-wrap">
                  <div className="forVBorder">
                    <p className="mb-0">OCT</p>
                    <p className="mb-0">30/20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="blogItem">
                <img className="img-fluid" src={blog3} alt="listBanner" />
                <h4>Lorem ipsum dolor sit amet.</h4>
                <p>
                  I worked with Gary looking for houses for about 8 months
                  before we found one in my budget and an area I loved.{" "}
                  <Link to="#">READ MORE</Link>
                </p>
                <div className="date-wrap">
                  <div className="forVBorder">
                    <p className="mb-0">OCT</p>
                    <p className="mb-0">30/20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="get-in-touch">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 git-image">
              <img className="img-fluid" src={garyP} alt="garyP" />
            </div>
            <div className="col-md-6 col-sm-12 git-form">
              <span className="subtitle-txt d-block text-center git">
                get in touch
              </span>
              <h3 className="text-white text-center">
                Contact us for faster appointment.
              </h3>
              <WebriQForm>
                <div className="row py-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="Last Name"
                    />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="Email Address"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone (optional)"
                      name="Phone"
                    />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject (optional)"
                      name="Subject"
                    />
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="Message"
                      id="message"
                      cols="20"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col">
                    <input
                      className="form-check"
                      type="checkbox"
                      id="checkboxinput"
                      name="I agree and understand to the terms and conditions."
                      style={{ borderRadius: "100%" }}
                      value="YES"
                    />
                    <label
                      htmlFor="checkboxinput"
                      className="text-white"
                      style={{
                        position: "absolute",
                        top: "-9px",
                        left: "40px",
                      }}
                    >
                      I agree and understand to the terms and conditions.
                    </label>
                  </div>
                </div>
                <div className="row py-3 sendButton">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <button
                        className="btn-gradient btn btn-primary d-block text-uppercase"
                        type="submit"
                        style={{ width: "100%" }}
                      >
                        send message
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-group">
                      <div className="webriq-recaptcha" />
                    </div>
                  </div>
                </div>
              </WebriQForm>
            </div>
          </div>
        </div>
      </section>
      <section id="how-find-us">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 px-5">
              <span className="subtitle-txt text-center d-block">
                how to find us
              </span>
              <div className="hfu">
                <ul className="list-unstyled">
                  <li>
                    <img
                      className="img-fluid"
                      src={locationIcon}
                      alt="locationIcon"
                    />
                    <span>
                      7189 Red Cardinal Loop Colorado Springs CO 80908 USA
                    </span>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      src={phoneIcon}
                      alt="phoneIcon"
                    />
                    <a href="tel:7196501688">7196501688</a>
                  </li>
                  <li>
                    <img
                      className="img-fluid"
                      src={emailIcon}
                      alt="emailIcon"
                    />
                    <a href="mailto:doctorgarymyrealtor@gmail.com">
                      doctorgarymyrealtor@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 px-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.965830691882!2d-104.6970267846481!3d38.947608979562865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134999c225f401%3A0x96d8c5e0fc0d1e90!2s7189%20Red%20Cardinal%20Loop%2C%20Colorado%20Springs%2C%20CO%2080908%2C%20USA!5e0!3m2!1sen!2sph!4v1603871161739!5m2!1sen!2sph"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section id="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 align-self-center text-right pr-5">
              <div className="saleIcon">
                <img
                  src={saleIcon}
                  alt="saleIcon"
                  className="img-fluid saleIcon mr-5"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12 text-center">
              <div className="newsletter-content">
                <span className="subtitle-txt d-block text-center">
                  newsletter
                </span>
                <h2 className="text-center">Subscribe To Our Newsletter</h2>
                <div className="gthd">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      style={{ borderRadius: 0, height: "auto" }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        id="button-addon2"
                        style={{
                          background: "#000A3E",
                          height: "auto",
                          borderRadius: 0,
                          position: "relative",
                          zIndex: "1",
                        }}
                      >
                        GET THE HOTTEST DEALS
                      </button>
                    </div>
                  </div>
                  <div className="lead">
                    Give it a sub and get updated of hottest deals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
