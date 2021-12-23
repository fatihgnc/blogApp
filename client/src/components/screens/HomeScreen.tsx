import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Blog } from '../../models/blog';
import MainContentWrapper from '../layout/MainContentWrapper';
import MainContent from '../layout/MainContentWrapper';
import { BlogContext } from '../store/BlogProvider';
import { UserContext } from '../store/UserProvider';

const HomeScreen = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [err, setErr] = useState<any>();

  const userContext = useContext(UserContext);
  const blogContext = useContext(BlogContext);

  useEffect(() => {
    async function callFetchBlogs() {
      try {
        const response = await blogContext.fetchBlogs();
        return response;
      } catch (error) {
        throw error;
      }
    }

    callFetchBlogs()
      .then((data) => setBlogs(data.blogsList))
      .catch((err) => setErr(err.message));
  }, [blogContext]);

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
      {err
        ? JSON.stringify(err)
        : blogs.map((blog, i) => <div key={i}>{JSON.stringify(blog)}</div>)}
    </MainContent>
  );

  return mainContentComponent;
};

export default HomeScreen;
