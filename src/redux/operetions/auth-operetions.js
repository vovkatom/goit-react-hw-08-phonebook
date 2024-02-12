import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', userInfo);
      token.set(data.token);
      return data;
    } catch (error) {
      alert(error.message);
      history.push('goit-react-hw-08-phonebook/register');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userInfo);
      token.set(data.token);
      return data;
    } catch (error) {
      alert(error.message);
      history.push('goit-react-hw-08-phonebook/login');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    alert(error.message);
    history.push('goit-react-hw-08-phonebook/');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    } else token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      alert(error.message);
      history.push('goit-react-hw-08-phonebook/');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
