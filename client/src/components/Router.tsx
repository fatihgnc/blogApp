import { Route, Routes } from 'react-router-dom';
import MainLayout from '../MainLayout';
import BlogsScreen from './screens/BlogsScreen';
import FriendsScreen from './screens/FriendsScreen';
import LoginAndRegisterScreen from './screens/LoginAndRegisterScreen';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<h1>hey</h1>} />
        <Route path='friends' element={<FriendsScreen />} />
        <Route path='blogs' element={<BlogsScreen />} />
        <Route path='auth' element={<LoginAndRegisterScreen />} />
      </Route>
    </Routes>
  );
};

export default Router;
