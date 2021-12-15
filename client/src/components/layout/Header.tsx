import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../store/UserProvider';
import styles from './Header.module.css';

const Header: React.FC = (props) => {
  const userContext = useContext(UserContext);

  const navBar = userContext.isAuth ? (
    <nav>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive === true ? styles.active : ''
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='blogs'
          className={({ isActive }) =>
            isActive === true ? styles.active : ''
          }>
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to='friends'
          className={({ isActive }) =>
            isActive === true ? styles.active : ''
          }>
          Friends
        </NavLink>
      </li>
    </nav>
  ) : (
    <nav>
      <li>
        <NavLink
          to='register'
          className={({ isActive }) =>
            isActive === true ? styles.active : ''
          }>
          <button className={styles.register}>Register</button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='login'
          className={({ isActive }) =>
            isActive === true ? styles.active : ''
          }>
          <button className={styles.login}>Login</button>
        </NavLink>
      </li>
    </nav>
  );

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        fBlog
      </Link>
      {navBar}
    </header>
  );
};

export default Header;
