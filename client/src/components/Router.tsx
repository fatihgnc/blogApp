import { Route, Routes } from 'react-router-dom';
import MainLayout from '../MainLayout';
import BlogsScreen from './screens/BlogsScreen';
import FriendsScreen from './screens/FriendsScreen';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='friends' element={<FriendsScreen />} />
        <Route path='blogs' element={<BlogsScreen />} />
      </Route>
    </Routes>
  );
};

export default Router;
