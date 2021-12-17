import { Route, Routes } from 'react-router-dom';
import MainLayout from '../MainLayout';
import BlogsScreen from './screens/BlogsScreen';
import FriendsScreen from './screens/FriendsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<h1>hey</h1>} />
        <Route path='friends' element={<FriendsScreen />} />
        <Route path='blogs' element={<BlogsScreen />} />
        <Route path='register' element={<RegisterScreen />} />
        <Route path='login' element={<LoginScreen />} />
      </Route>
    </Routes>
  );
};

export default Router;
