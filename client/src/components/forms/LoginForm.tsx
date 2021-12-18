import { Link } from 'react-router-dom';
import useInput from '../hooks/use-input';

import styles from './LoginForm.module.css';

const LoginForm = () => {
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [shouldRememberMe, setShouldRememberMe] = useState(false);

  const {
    inputValue: enteredUsername,
    // inputIsValid: isUsernameValid,
    inputHasError: usernameHasError,
    onBlur: unameOnBlur,
    onChange: usernameOnChangeHandler,
    resetInput: resetUsernameInput,
  } = useInput(
    '',
    (input) => input.trim().length > 4 && input.trim().length <= 26
  );

  const {
    inputValue: enteredPassword,
    // inputIsValid: isPasswordValid,
    inputHasError: passwordHasError,
    onBlur: pswOnBlur,
    onChange: passwordOnChangeHandler,
    resetInput: resetPasswordInput,
  } = useInput(
    '',
    (input) => input.trim().length > 6 && input.trim().length <= 30
  );

  const {
    inputValue: shouldRememberMe,
    onChange: rememberMeChangeHandler,
    resetInput: resetRememberMeInput,
  } = useInput(false, (input) => false);

  let formValidity = false;

  if (!usernameHasError && !passwordHasError) {
    formValidity = true;
  }

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValidity) {
      return;
    }

    resetPasswordInput('');
    resetUsernameInput('');
    resetRememberMeInput(false);
  };

  const usernameClasses = usernameHasError ? styles.invalid : '';

  const passwordClasses = passwordHasError ? styles.invalid : '';

  return (
    <div className={styles['login-form']}>
      <h1 className={styles['login-form__title']}>Login</h1>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor='uname'>Username</label>
          <input
            id='uname'
            type='text'
            value={enteredUsername as string}
            onChange={usernameOnChangeHandler}
            onBlur={unameOnBlur}
            className={usernameClasses}
          />
          {usernameHasError && (
            <span
              style={{
                color: 'red',
                marginTop: '5px',
                display: 'inline-block',
                fontSize: '14px',
              }}>
              Username is not valid! (must be between 5-26 chars)!
            </span>
          )}
        </div>
        <div>
          <label htmlFor='psw'>Password</label>
          <input
            id='psw'
            type='password'
            value={enteredPassword as string}
            onChange={passwordOnChangeHandler}
            onBlur={pswOnBlur}
            className={passwordClasses}
          />
          {passwordHasError && (
            <span
              style={{
                color: 'red',
                marginTop: '5px',
                display: 'inline-block',
                fontSize: '14px',
              }}>
              Password is not valid! (must be between 7-31 chars)!
            </span>
          )}
        </div>
        <label className={styles.checkbox}>
          <input
            type='checkbox'
            id='rememberMe'
            name='rememberMe'
            checked={shouldRememberMe as boolean}
            onChange={rememberMeChangeHandler}
          />
          <span className={styles.checkbox}>
            <span></span>
          </span>
          <span className={styles.text}>remember me</span>
        </label>

        <Link to='/register'>Don't have an account? Register!</Link>
        <button type='submit' className={styles['login-btn']} disabled={false}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
