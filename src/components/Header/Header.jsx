import { Toolbar } from '@mui/material';
import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selector/selectors';
import {
  ButtonNav,
  HeaderBox,
  HeaderButton,
  HeaderNav,
  HeaderTitle,
  LinkHeader,
  LinkNav,
} from './Header.styled';
import Loader from 'components/Loader/Loader';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <HeaderBox>
        <HeaderNav position="static">
          <Toolbar sx={{ padding: '5px' }}>
            <HeaderButton variant="contained">
              <LinkHeader to="/"> Home</LinkHeader>
            </HeaderButton>

            {isLoggedIn === true && (
              <HeaderButton variant="contained">
                <LinkHeader to="contacts">Contacts</LinkHeader>
              </HeaderButton>
            )}

            <HeaderTitle variant="h6" component="div">
              Phonebook
            </HeaderTitle>
            {isLoggedIn === false && (
              <ButtonNav>
                <LinkNav to="login">Log in</LinkNav>
              </ButtonNav>
            )}
            {isLoggedIn === false && (
              <ButtonNav>
                <LinkNav to="register">Register</LinkNav>
              </ButtonNav>
            )}
            {isLoggedIn && <UserMenu />}
          </Toolbar>
        </HeaderNav>
      </HeaderBox>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
