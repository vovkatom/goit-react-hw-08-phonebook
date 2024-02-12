import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operetions/auth-operetions';
import { getUserAuth } from 'redux/selector/selectors';
import { UserMenuBox, UserMenuButton, UserMenuDescr } from './UserMenu.styled';

const UserMenu = () => {
  const { email } = useSelector(getUserAuth);

  const dispatch = useDispatch();

  return (
    <UserMenuBox>
      <UserMenuDescr>{`Welcome ${email}!`}</UserMenuDescr>
      <UserMenuButton
        type="button"
        size="small"
        onClick={() => dispatch(logOut())}
        variant="contained"
      >
        Logout
      </UserMenuButton>
    </UserMenuBox>
  );
};

export default UserMenu;
