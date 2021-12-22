import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainContentWrapper from '../layout/MainContentWrapper';
import MainContent from '../layout/MainContentWrapper';
import { UserContext } from '../store/UserProvider';

const HomeScreen = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  const mainContentComponent = !userContext.isAuth ? (
    <MainContentWrapper
      backgroundColor='rgba(255,255,255,.85)'
      width='50%'
      padding='50px'>
      <h1 style={{ marginBottom: '15px' }}>Welcome to fBlog!</h1>
      <section>
        <p>
          Here you can create your own blogs and share your thoughts with the
          audience and all other people who are enrolled to this blog site! It's
          very easy to use! <br />
          <strong>Steps:</strong>
        </p>
        <ul
          style={{
            margin: '30px',
            background: '#ddd',
            padding: '15px',
            listStyleType: 'none',
          }}>
          <li>
            If you don't have an account, you can{' '}
            <Link to={'auth?q=register'}>register</Link> right away to start
            sharing your blogs!
          </li>
          <li>
            If you have an account, you can <Link to='auth?q=login'>login</Link>{' '}
            to your account to take off!
          </li>
        </ul>
      </section>
      <button
        style={{
          backgroundColor: 'rgba(125,125,125,.2)',
          marginTop: '15px',
          fontSize: '17px',
        }}
        onClick={(_) => {
          navigate('auth?q=register');
        }}>
        Let's start!
      </button>
    </MainContentWrapper>
  ) : (
    <MainContent
      backgroundColor='rgba(255,255,255,.85)'
      width='50%'
      padding='50px'>
      Here is your main page! Your info:
      {JSON.stringify(userContext.user)}
    </MainContent>
  );

  return mainContentComponent;
};

export default HomeScreen;
