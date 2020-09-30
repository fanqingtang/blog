import React from 'react';
import  './index.modules.less';
const Header = () => {
  return <div className="header_wrap">
    <header className="header_inner">
      <h1 className="fl">fqt</h1>
      <nav className="fr header_title">
        <li>
          <a href="#">博客首页</a>
        </li>
        <li>
          <a href="#">快乐生活</a>
        </li>
        <li>
          <a href="#">个人介绍</a>
        </li>
        <li>
          <a href="#" className="concat">联系我</a>
        </li>
      </nav>
    </header>
  </div>;
};

export default Header;
