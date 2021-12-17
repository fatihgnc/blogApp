import { Link } from 'react-router-dom';
import Input from '../ui/Input';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <div className={styles['login-form']}>
      <h1 className={styles['login-form__title']}>Login</h1>
      <form>
        <Input id='uname' labelText='Username' type='text' />
        <Input id='psw' labelText='Password' type='password' />
        <Input id='rememberMe' labelText='remember me' type='checkbox' />
        <Link to='/register'>Don't have an account? Register!</Link>
        <button type='submit' className={styles['login-btn']}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
