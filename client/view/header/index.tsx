import React from 'react'
import './index.modules.less'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header_wrap'>
      <header className='header_inner'>
        <h1 className='fl'>fqt</h1>
        <nav className='fr header_title'>
          <li>
            <NavLink exact to='/'>
              博客首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/happyLive'>快乐生活</NavLink>
          </li>
          <li>
            <NavLink to='/instroduction'>快乐生活</NavLink>
          </li>
          <li>
            <a href='#' className='concat'>
              联系我
            </a>
          </li>
        </nav>
      </header>
    </div>
  )
}

export default Header
