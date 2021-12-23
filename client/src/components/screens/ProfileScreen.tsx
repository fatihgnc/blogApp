import { useContext } from 'react';
import MainContentWrapper from '../layout/MainContentWrapper';
import { UserContext } from '../store/UserProvider';

const ProfileScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <MainContentWrapper
      backgroundColor='rgba(255,255,255,.85)'
      padding='50px'
      width='25%'>
      <p>Username: {userContext.user?.username}</p>
      <p>Password: {userContext.user?.password}</p>
      <p>Total blogs: {userContext.user?.blogCount}</p>
    </MainContentWrapper>
  );
};

export default ProfileScreen;
