import { Route, Routes } from 'react-router-dom';
import MainLayout from '../MainLayout';
import BlogsScreen from './screens/BlogsScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import LoginAndRegisterScreen from './screens/LoginAndRegisterScreen';
import BlogContextProvider from './store/BlogProvider';
import AddBlogScreen from './screens/AddBlogScreen';

const Router = () => {
    return (
        <BlogContextProvider>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<HomeScreen />} />
                    <Route path='profile' element={<ProfileScreen />} />
                    <Route path='blogs' element={<BlogsScreen />} />
                    <Route path='addBlog' element={<AddBlogScreen />} />
                    <Route path='auth' element={<LoginAndRegisterScreen />} />
                </Route>
            </Routes>
        </BlogContextProvider>
    );
};

export default Router;
