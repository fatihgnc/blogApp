import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = (props) => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        fBlog
      </Link>
      <nav>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='blogs'>Blogs</NavLink>
        </li>
        <li>
          <NavLink to='friends'>Friends</NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;
