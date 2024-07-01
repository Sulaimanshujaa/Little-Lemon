import React from 'react'
import Logo from "../images/Logo .svg"

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little lemon footer logo"/>
      <h3>Doormat</h3>
      <ul>
        <li><a href='/home'>Home</a></li>
        <li><a href='/menu'>menu</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/reservations'>Reservations</a></li>
        <li><a href='/Order_online'>Order Online</a></li>
        <li><a href='/login'>Login</a></li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li><a href='/address'>AddressStreet 19, New York</a></li>
        <li><a href='/phone'>Phone0312478596</a></li>
      </ul>
      <h3>Social Media</h3>
      <ul>
        <li><a href='/facbook/little-lemon'>Facebook</a></li>
        <li><a href='/instagram/little-lemon'>Instagram</a></li>
        <li><a href='/thread/little-lemon'>Thread</a></li>
      </ul>
    </footer>
  )
}
