import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Donation from './Donation';

function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({
    top: '0',
    backgroundColor: '#00000062',

  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || window.scrollTop;

      if (scrollTop > lastScrollTop) {
        setNavbarStyle({ top: '-80px', backgroundColor: '#00000062' });
      } else {
        setNavbarStyle({ top: '0', backgroundColor: '#00000062' });
      }

      if (scrollTop > 300) {
        setNavbarStyle((prevStyle) => ({ ...prevStyle, backgroundColor: '#472e22' }));
      } else {
        setNavbarStyle((prevStyle) => ({ ...prevStyle, backgroundColor: '#00000062' }));
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div id='navigation' style={navbarStyle}>
        <nav className="navbar navbar-expand-lg">
          <div className="container ">
            <NavLink to={"/"} className=" nav-link navbar-brand">
              <div className='headerlogo'>
                <img src={require("../assets/image/logos/social army.jpg")} alt="" className='img-fluid rounded-circle object-fit-cover' />
              </div>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-2" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto" >
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link text-decoration-none headmenu ps-2 p-3  me-4" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/charitypage"} className="nav-link text-decoration-none headmenu ps-2 p-3  me-4" aria-current="page">Charity</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/eventpage"} className="nav-link text-decoration-none headmenu ps-2 p-3  me-4" aria-current="page">Events</NavLink>
                </li>
                <li style={{ color: 'black' }} className="nav-link dropdown text-decoration-none headmenu ps-2 p-3  me-4" aria-current="page">

                  <p className=" text-light" style={{ marginBottom: 0 }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Achievements
                  </p>
                  <ul className="dropdown-menu" style={{ content: "" }}>
                    <li><NavLink className="dropdown-item" style={{ background: 'none' }} to={"/Awards"}><span className='text-dark'>Awards</span></NavLink></li>
                    <li><NavLink className="dropdown-item" style={{ background: 'none' }} to={"/Certificate"}><span className='text-dark'>Certificates</span></NavLink></li>
                    <li><NavLink className="dropdown-item" style={{ background: 'none' }} to={"/Mediacoverage"}><span className='text-dark'>Mediacoverage</span></NavLink></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contactuspage"} className="nav-link text-decoration-none headmenu ps-2 p-3  me-4" aria-current="page">Contact Us</NavLink>
                </li>
                <li className="nav-item p-2">
                  <Link to={"/paymentpage"}><Donation /></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>

  )
}

export default Header;