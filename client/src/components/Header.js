import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {label:'Home',icon:'home', path:'/'},
  {label:'Message',icon:'near_me', path:'/message'},
  {label:'Discover',icon:'explore', path:'/discover'},
  {label:'Notify',icon:'favorite', path:'/notify'},
]

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Social-Media</a>

    <div className="menu">
      <ul className="navbar-nav flex-row">
      {
        navLinks.map((link, index) => (
          <li className="nav-item active">
            <Link className="nav-link" to={link.path}>
              <span className="material-icons">
                {link.icon}
              </span>
            </Link>
          </li>
        ))
      }
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
          role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Dark Mode</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header
