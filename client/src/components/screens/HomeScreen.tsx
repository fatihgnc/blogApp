import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}>
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,.85)',
          padding: '50px',
          width: '50%',
        }}>
        <h1 style={{ marginBottom: '15px' }}>Welcome to fBlog!</h1>
        <section>
          <p>
            Here you can create your own blogs and share your thoughts with the
            audience and all other people who are enrolled to this blog site!
            It's very easy to use! <br />
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
              If you have an account, you can{' '}
              <Link to='auth?q=login'>login</Link> to your account to take off!
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
      </div>
    </div>
  );
};

export default HomeScreen;