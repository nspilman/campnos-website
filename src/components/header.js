import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/images/logo.png";

const Header = ({ siteTitle }) => (
  <header
  id="site-header"
    style={{
      background: `rgb(102,216,169)`,
    }}
  >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img id="header-logo" alt="Camp Nos Collective Logo" src={logo}/>
        </Link>
        <Link to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
            <p id="site-title">
            {siteTitle}
            </p>
        </Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `CAMP NOS COLLECTIVE`,
}

export default Header
