import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector/selectors';

const PrivateRoute = ({ redirectPath = 'login' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn === false) {
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
