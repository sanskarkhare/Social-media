import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './menu';
import Search from './Search';


const Header = () => {

  

    return (
      <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
        <div className="container-fluid">
          <Link to='/' className='logo text-decoration-none'>
            <h1 className="navbar-brand text-uppercase p-0 m-0">Social-Media</h1>
          </Link>
          <Search />
          <Menu />
        </div>
      </nav>
      </div>
    )
}

export default Header
