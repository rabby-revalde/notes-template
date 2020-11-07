import React from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"
import styl from "./header.module.css"

const Header = () => (
  <header>
    <Sticky
      className={styl.stickyWrapper}
      stickyClassName={styl.isSticky}
      stickyStyle={{ transform: "unset", zIndex: "2" }}
    >
      <div className={`header ${styl.header}`}>
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-3 col-8">
              <div className="header-logo">
                <Link to="/">
                  <h4 className="text-logo mb-0">THE FARNON HOME TEAM</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-8 h-menu-wrap text-right">
              <ul className="list-inline h-menu">
                <li className="list-inline-item">
                  <Link to="#">Search Listings</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Search map</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Buyers</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Blog</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-4 pl-0">
              <div className="text-right">
                <SideBarMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
)

export default Header
