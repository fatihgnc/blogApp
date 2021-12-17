import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
