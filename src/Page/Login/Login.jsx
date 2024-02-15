import { Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Span } from 'Page/Register/Register.styled';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = props => {
  const { handlInputChange, email, password } = props;
  const navigate = useNavigate();

  return (
    <Fragment>
      <TextField
        type='email'
        name='email'
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        size='small'
        margin='normal'
        fullWidth={true}
        label='Email'
        placeholder='enter your email'
        variant='outlined'
        value={email}
        onChange={handlInputChange}
      />
      <TextField
        type='password'
        name='password'
        required
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        size='small'
        margin='normal'
        fullWidth={true}
        label='Password'
        placeholder='enter your password'
        variant='outlined'
        value={password}
        onChange={handlInputChange}
      />
      <Button
        sx={{
          marginTop: 1,
          width: '50%',
          marginBottom: 2,
        }}
        type='submit'
        variant='contained'
      >
        Login
      </Button>
      <Typography variant='body1'>
        Don't have an account?
        <Span onClick={() => navigate('/register')}>Register</Span>
      </Typography>
    </Fragment>
  );
};

Login.propTypes = {
  handlInputChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
export default Login;
