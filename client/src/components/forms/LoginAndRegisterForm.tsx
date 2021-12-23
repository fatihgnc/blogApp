import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '../hooks/use-input';
import { UserContext } from '../store/UserProvider';

import styles from './LoginAndRegisterForm.module.css';

const LoginAndRegisterForm = () => {
  // check if any user is authenticated
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [errMessage, setErrMessage] = useState<string | undefined>(undefined);
  console.log(errMessage);

  // get query string
  const search = useLocation().search;
  const params = new URLSearchParams(search);

  const query = params.get('q');

  useEffect(() => {
    if (userCtx.authToken) return navigate('/');
    if (!query || !['register', 'login'].includes(query)) {
      setIsLogin(true);
    } else if (query === 'login') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [query, userCtx.authToken, navigate]);

  // LOGIN FORM INPUTS
  const {
    inputValue: enteredUsername,
    inputHasError: usernameHasError,
    inputIsValid: usernameIsValid,
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
    inputIsValid: passwordIsValid,
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
    inputIsValid: registrationUsernameIsValid,
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
    inputIsValid: registrationPasswordIsValid,
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
    inputIsValid: confRegistrationPasswordIsValid,
    valMessage: confRegistrationValidationMessage,
    onBlur: confRegistrationPswOnBlur,
    onChange: confRegistrationPasswordOnChangeHandler,
    resetInput: resetConfRegistrationPasswordInput,
  } = useInput(
    'Passwords do not match!',
    '',
    (input) => input === registrationPassword
  );

  // SIGN IN AND UP FUNCTIONS
  const sendSignUpRequest = () => {
    userCtx.signUserInOrUp(
      'SUP',
      registrationUsername as string,
      registrationPassword as string,
      (err) => {
        if (err) {
          setErrMessage(err);
          alert(err);
        }
      }
    );
  };

  const sendSignInRequest = () => {
    userCtx.signUserInOrUp(
      'SIN',
      enteredUsername as string,
      enteredPassword as string,
      (err) => {
        if (err) {
          setErrMessage(err);
          alert(err);
        }
      }
    );
  };

  const resetForm = () => {
    if (isLogin) {
      resetUsernameInput('');
      resetPasswordInput('');
      return;
    }

    resetRegistrationUsernameInput('');
    resetRegistrationPasswordInput('');
    resetConfRegistrationPasswordInput('');
  };

  // set overall form validity
  let loginFormValidity = false;
  let registrationFormValidity = false;

  if (usernameIsValid && passwordIsValid) {
    loginFormValidity = true;
  }

  if (
    registrationUsernameIsValid &&
    registrationPasswordIsValid &&
    confRegistrationPasswordIsValid
  ) {
    registrationFormValidity = true;
  }

  console.log(loginFormValidity);

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLogin && !registrationFormValidity) {
      return;
    }

    if (isLogin && !loginFormValidity) {
      return;
    }

    if (isLogin) sendSignInRequest();
    else sendSignUpRequest();

    resetForm();
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
      <button type='submit' className={styles['login-btn']}>
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
