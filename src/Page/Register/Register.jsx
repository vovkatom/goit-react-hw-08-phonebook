import { Button, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Span } from './Register.styled';
import { useNavigate } from 'react-router-dom';

const Register = props => {
  const { handlInputChange, email, password, name } = props;
  const navigate = useNavigate();

  return (
    <Fragment>
      <TextField
        type='text'
        name='name'
        required
        size='small'
        margin='normal'
        fullWidth={true}
        label='Name'
        placeholder='enter your name'
        variant='outlined'
        value={name}
        onChange={handlInputChange}
      />
      <TextField
        type='text'
        name='email'
        required
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
        Register
      </Button>
      <Typography variant='body1'>
        Do you have an account?
        <Span onClick={() => navigate('/login')}>Login</Span>
      </Typography>
    </Fragment>
  );
};

Register.propTypes = {
  handlInputChange: PropTypes.func,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Register;
