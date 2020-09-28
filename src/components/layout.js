import Header from "./header"
import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='is-preload'>{children}</main>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
