import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/teslaLogoSmall.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={TeslaLogo} alt='Tesla Logo' title="Tesla, Inc."/>
      </div>

      <div className="header_center">
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>

      <div className="header_right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  )
}

export default Header
