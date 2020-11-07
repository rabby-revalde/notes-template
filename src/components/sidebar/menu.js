import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import "./menu.css"

export default () => (
  <div className="navigation">
    <Nav className="flex-column">
      <Nav.Item>
        <Link to="#">Search Listings</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="#">search map</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="#">search map</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="#">sellers</Link>
      </Nav.Item>
    </Nav>
  </div>
)
