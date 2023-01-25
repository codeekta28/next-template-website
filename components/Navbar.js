import React from 'react'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

function Navbar() {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-dark navbar-default  ${styles.navbar}`} style={{ backgroundColor: "var(--signInBgColor)"}}>
  <div className="container">
    {/* <!-- Logo --> */}
    <Link className="navbar-brand" href="/">
      {/* <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" className="h-8" alt="..."/> */}
      <p className='text-light'>logo</p>
    </Link>
    {/* <!-- Navbar toggle --> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collapse --> */}
    <div className="collapse navbar-collapse" id="navbarCollapse">
      {/* <!-- Nav --> */}
      <div className="navbar-nav mx-lg-auto">
        <a className="nav-item nav-link active me-3" href="#" aria-current="page">Home</a>
        <a className="nav-item nav-link me-3" href="#">Features</a>
        <a className="nav-item nav-link me-3" href="#">Product</a>
        <a className="nav-item nav-link" href="#">Pricing</a>
      </div>
      {/* <!-- Right navigation --> */}
      <div className="navbar-nav ms-lg-4 me-3">
        <Link className="nav-item nav-link text-light" href="/login">Log in</Link>
      </div>
      {/* <!-- Action --> */}
      <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
        <Link href="/signup" className="btn btn-sm btn-light w-full w-lg-auto">
          Get Started-its Free!
        </Link>
      </div>
    </div>
  </div>
</nav>

{/* <div className="p-10 bg-surface-secondary">
  <div className="mb-8 text-center">
    <h3 className="mb-2">Crafted with <a href="https://github.com/webpixels/css" target="_blank">Webpixels CSS</a></h3>
    <p>The design system for Bootstrap 5</p>
  </div>
  <div className="mt-8 text-center">
    <a href="https://webpixels.io/components?ref=codepen" className="text-warning" target="_blank">Browse all components -></a>
  </div>
</div> */}
    </>
  )
}

export default Navbar