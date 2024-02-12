import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector/selectors';

const PublicRoute = ({ redirectPath = 'contacts' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

export default PublicRoute;
