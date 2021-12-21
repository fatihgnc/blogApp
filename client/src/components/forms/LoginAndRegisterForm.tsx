import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useInput from '../hooks/use-input';
import { UserContext } from '../store/UserProvider';

import styles from './LoginAndRegisterForm.module.css';

const LoginAndRegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const userCtx = useContext(UserContext);

  const search = useLocation().search;
  const params = new URLSearchParams(search);

  const query = params.get('q');

  useEffect(() => {
    if (!query || !['register', 'login'].includes(query)) {
      setIsLogin(true);
    } else if (query === 'login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [query]);

  // LOGIN FORM INPUTS
  const {
    inputValue: enteredUsername,
    inputHasError: usernameHasError,
    valMessage: usernameValidationMessage,
    onBlur: unameOnBlur,
    onChange: usernameOnChangeHandler,
    resetInput: resetUsernameInput,
  } = useInput(
    'Username is not valid! (must be between 5-26 chars)!',
    '',
    (input) => input.trim().length > 4 && input.trim().length <= 26
  );

  const {
    inputValue: enteredPassword,
    inputHasError: passwordHasError,
    valMessage: passwordValidationMessage,
    onBlur: pswOnBlur,
    onChange: passwordOnChangeHandler,
    resetInput: resetPasswordInput,
  } = useInput(
    'Password is not valid! (must be between 7-31 chars)!',
    '',
    (input) => input.trim().length > 6 && input.trim().length <= 30
  );

  // REGISTER FORM INPUTS
  const {
    inputValue: registrationUsername,
    inputHasError: registrationUsernameHasError,
    valMessage: registrationUsernameValidationMessage,
    onBlur: registrationUnameOnBlur,
    onChange: registrationUsernameOnChangeHandler,
    resetInput: resetRegistrationUsernameInput,
  } = useInput(
    'Username is not valid! (must be between 5-26 chars)!',
    '',
    (input) => input.trim().length > 4 && input.trim().length <= 26
  );

  const {
    inputValue: registrationPassword,
    inputHasError: registrationPasswordHasError,
    valMessage: registrationPasswordValidationMessage,
    onBlur: registrationPswOnBlur,
    onChange: registrationPasswordOnChangeHandler,
    resetInput: resetRegistrationPasswordInput,
  } = useInput(
    'Password is not valid! (must be between 7-31 chars)!',
    '',
    (input) => input.trim().length > 6 && input.trim().length <= 30
  );

  const {
    inputValue: confRegistrationPassword,
    inputHasError: confRegistrationPasswordHasError,
    valMessage: confRegistrationValidationMessage,
    onBlur: confRegistrationPswOnBlur,
    onChange: confRegistrationPasswordOnChangeHandler,
    resetInput: resetConfRegistrationPasswordInput,
  } = useInput(
    'Passwords do not match!',
    '',
    (input) => input === registrationPassword
  );

  const sendSignupRequest = () => {
    userCtx.signUserInOrUp(
      'SUP',
      registrationUsername as string,
      registrationPassword as string
    );
  };

  // handling form validity
  let loginFormValidity = false;
  let registrationFormValidity = false;

  if (!usernameHasError && !passwordHasError) {
    loginFormValidity = true;
  }

  if (
    !registrationUsernameHasError &&
    !registrationPasswordHasError &&
    !confRegistrationPasswordHasError
  ) {
    registrationFormValidity = true;
  }

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin && !loginFormValidity) {
      return;
    }

    if (!isLogin && !registrationFormValidity) {
      return;
    }

    if (isLogin) {
      resetPasswordInput('');
      resetUsernameInput('');
    } else {
      resetRegistrationUsernameInput('');
      resetRegistrationPasswordInput('');
      resetConfRegistrationPasswordInput('');
    }
  };

  const loginOrRegister = isLogin ? (
    <>
      <div>
        <label htmlFor='uname'>Username</label>
        <input
          id='uname'
          type='text'
          value={enteredUsername as string}
          onChange={usernameOnChangeHandler}
          onBlur={unameOnBlur}
        />
        {usernameHasError && (
          <span className={styles.invalid}>{usernameValidationMessage}</span>
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
        />
        {passwordHasError && (
          <span className={styles.invalid}>{passwordValidationMessage}</span>
        )}
      </div>
      <button type='submit' className={styles['login-btn']}>
        Login
      </button>
    </>
  ) : (
    <>
      <div>
        <label htmlFor='rUname'>Username</label>
        <input
          id='rUname'
          name='rUname'
          type='text'
          value={registrationUsername as string}
          onChange={registrationUsernameOnChangeHandler}
          onBlur={registrationUnameOnBlur}
        />
        {registrationUsernameHasError && (
          <span className={styles.invalid}>
            {registrationUsernameValidationMessage}
          </span>
        )}
      </div>
      <div>
        <label htmlFor='rPsw'>Password</label>
        <input
          id='rPsw'
          name='rPsw'
          type='password'
          value={registrationPassword as string}
          onChange={registrationPasswordOnChangeHandler}
          onBlur={registrationPswOnBlur}
        />
        {registrationPasswordHasError && (
          <span className={styles.invalid}>
            {registrationPasswordValidationMessage}
          </span>
        )}
      </div>
      <div>
        <label htmlFor='cPsw'>Confirm Password</label>
        <input
          id='cPsw'
          name='cPsw'
          type='password'
          value={confRegistrationPassword as string}
          onChange={confRegistrationPasswordOnChangeHandler}
          onBlur={confRegistrationPswOnBlur}
        />
        {confRegistrationPasswordHasError && (
          <span className={styles.invalid}>
            {confRegistrationValidationMessage}
          </span>
        )}
      </div>
      <button
        type='submit'
        className={styles['login-btn']}
        onClick={sendSignupRequest}>
        Register
      </button>
    </>
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}>
      <div className={styles['login-form']}>
        <h1 className={styles['login-form__title']}>
          {isLogin ? 'Login' : 'Register'}
        </h1>
        <form onSubmit={handleSubmission}>{loginOrRegister}</form>
        <label className={styles.checkbox}>
          <input
            type='checkbox'
            checked={isLogin}
            onChange={(e) => {
              setIsLogin((prev) => !prev);
            }}
          />
          <span className={styles.checkbox} style={{ left: '20px' }}>
            <span></span>
          </span>
          <span className={styles.text} style={{ marginLeft: '30px' }}>
            {isLogin ? 'Go to register' : 'Go to login'}
          </span>
        </label>
      </div>
    </div>
  );
};

export default LoginAndRegisterForm;
