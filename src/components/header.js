import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../assets/images/logo.png";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background: rgb(102,216,169)
`

const HeaderLogo = styled.img`
  width:4rem;
  margin:1rem;
`

const Header = ({ siteTitle }) => (
  <Wrapper id="site-header">
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <HeaderLogo id="header-logo" alt="Camp Nos Collective Logo" src={logo} />
    </Link>
    <Link to="/">
      <p id="site-title">
        {siteTitle}
      </p>
    </Link>

  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `CAMP NOS COLLECTIVE`,
}

export default Header
