import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/images/logo.png";

const Header = ({ siteTitle }) => (
  <header
  id="site-header"
    style={{
      background: `rgb(102,216,169)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img id="header-logo" src={logo}/>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `CAMP NOS COLLECTIVE`,
}

export default Header
