import React from "react"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const footer = props => {
  return (
    <div id="footer-wrap">
      <div className="footer text-white">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 mb-3 mb-md-0 pr-5">
              <h5 className="text-uppercase">THE FARNON HOME TEAM</h5>
              <p className="small text-white-50">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div
              className="col-md-3 mb-3 mb-md-0 pl-md-5 pl-sm-3 quickL"
              style={{
                borderLeft: "1px solid rgb(178 206 253 / 0.15)",
                borderRight: "1px solid rgb(178 206 253 / 0.15)",
              }}
            >
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled small">
                <li>
                  <Link to="#">Search listings</Link>
                </li>
                <li>
                  <Link to="#">Search map</Link>
                </li>
                <li>
                  <Link to="#">Buyers</Link>
                </li>
                <li>
                  <Link to="#">Sellers</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3 pl-md-5 pl-sm-3">
              <div className="social-icons">
                <h5 className="text-uppercase">Connect with us:</h5>
                <ul className="list-inline pl-0">
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-left">
              <span>
                © {new Date().getFullYear()} The Farnon Home Team. All Rights
                Reserved.
              </span>
            </div>
            <div className="col-md-6 col-sm-12">
              Designed and powered by {``}
              <a
                href="https://webriq.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WebriQ
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer
