import Header from "./header"
import React, { ReactNode } from "react"
import PropTypes from "prop-types"

interface Props {
  children : ReactNode
}

const Layout = ({ children } : Props ) => {
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
