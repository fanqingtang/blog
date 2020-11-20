import React from 'react'
import './index.modules.less'
import { Link } from 'react-router-dom'
import RouteMenus from '@/routes/menu'
const Header = () => {
  return (
    <div className='header_wrap'>
      <header className='header_inner'>
        <Link to='/'>
          <h1 className='fl'>fqt</h1>
        </Link>
        <nav className='fr header_title'>
          {
            RouteMenus.map((list, index) => (
              list.isShow && <li key={index}>
                <Link to={list.path}>{list.title}</Link>
              </li>
            ))
          }
        </nav>
      </header>
    </div>
  )
}

export default Header
