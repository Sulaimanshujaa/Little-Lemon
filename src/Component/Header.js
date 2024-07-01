import React from "react";
import { Link } from 'react-router-dom';
import bannerImg from '../images/Hero-image.jpg';

export default function Header() {
  return (
    <header className="header">
      <section>
        {/* Banner Section */}
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            tradtional recipes served with a modern twist.
          </p>
          <Link to="/Booking"><button aria-label='On Click'>Reserve a Table</button></Link>
        </div>
        {/* banner image*/}
        <div className='banner-img'>
            <img src={bannerImg} alt='' />
        </div>
      </section>
    </header>
  );
}