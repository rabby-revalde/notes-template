import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="atf-wrap container-fluid">
      <div className="row">
        <div className="col-md-5 space-nn forbluDiv">
          <div style={{ position: "relative", zIndex: "1" }}>
            <h1>Your Service Focused Real Estate Solution</h1>
            <p style={{ marginBottom: "60px" }}>
              If you are less than a year from buying or selling your home, lets
              us get a game plan together for you! Contact us now while rates
              are historical lows
            </p>
            <Link
              to="#"
              className="btn-gradient btn btn-primary text-uppercase"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
        <div className="col-md-7 hero-blu">
          <div className="blue-house">
            <span className="segoe-text">
              “Having somewhere to go is home. Having someone to love is family.
              And having both is a blessing.” -CTTO
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
