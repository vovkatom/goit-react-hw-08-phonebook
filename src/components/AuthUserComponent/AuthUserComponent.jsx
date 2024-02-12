import { Box } from '@mui/material';
import Login from 'Page/Login/Login';
import Register from 'Page/Register/Register';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logInUser, registerUser } from 'redux/operetions/auth-operetions';

const AuthUserComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handlInputChange = e => {
    const { value, name } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userRegisterInfo = { name, email, password };
    const userLoginInfo = { email, password };
    if (name) {
      dispatch(registerUser(userRegisterInfo)).then(result => {
        if (result.payload) {
          return;
        }

        reset();
      });
    } else {
      dispatch(logInUser(userLoginInfo)).then(result => {
        if (result.payload) {
          return;
        }

        reset();
      });
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const location = useLocation();

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            maxWidth: '500px',
            margin: '50px auto',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '5px 5px 10px #2a2a2a',
            background: '#fff',
          }}
        >
          {}
          {location.pathname === '/login' ? (
            <Login
              handlInputChange={handlInputChange}
              password={password}
              email={email}
            />
          ) : location.pathname === '/register' ? (
            <Register
              handlInputChange={handlInputChange}
              name={name}
              password={password}
              email={email}
            />
          ) : null}
        </Box>
      </form>
    </Fragment>
  );
};

export default AuthUserComponent;
