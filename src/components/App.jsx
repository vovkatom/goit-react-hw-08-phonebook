import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/operetions/auth-operetions';
import PrivateRoute from './PrivateRoute/PrivatRoute';
import Home from 'Page/Home/Home';

import PublicRoute from './PublicRoute/PublicRoute';
import NotFaund from 'Page/NotFaund/NotFaund';
import Header from './Header/Header';
import { getIsRefreshUser } from 'redux/selector/selectors';
import Loader from './Loader/Loader';
const Contacts = lazy(() => import('./Contacts/Contacts'));
const AuthUserComponent = lazy(() =>
  import('./AuthUserComponent/AuthUserComponent')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(getIsRefreshUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      {isRefreshUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<AuthUserComponent />} />
              <Route path="register" element={<AuthUserComponent />} />
            </Route>
            <Route path="*" element={<NotFaund />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
