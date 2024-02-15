import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      if (error.response && error.response.status === 400) {
        // Обробка помилки з кодом 400 (наприклад, невірні дані при реєстрації)
        const errorMessage = error.response.data.message || 'Error Registr...';
        alert(errorMessage);
      } else {
        // Інші помилки
        alert('Email is already in use. Please use a different email.');
      }

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
      // alert(error.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // alert(error.message);

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
      //alert(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
