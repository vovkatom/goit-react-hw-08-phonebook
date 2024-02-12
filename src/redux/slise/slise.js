import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from '../operetions/operetions';

const contactsInitialState = {
  contacts: {
    items: [],
    operetion: null,
    error: null,
  },
  filter: '',
};

const contactsSlise = createSlice({
  name: 'phonebook',
  initialState: contactsInitialState,
  reducers: {
    filterOnContact: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.operetion = 'fatch';
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.operetion = null;
        state.error = null;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.operetion = null;
        state.error = payload;
      })
      .addCase(addContacts.pending, state => {
        state.operetion = 'add';
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.operetion = null;
        state.error = null;
        state.contacts.items.push(payload);
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.operetion = null;
        state.error = payload;
      })
      .addCase(deleteContacts.pending, (state, action) => {
        state.operetion = `${action.meta.arg}`;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.operetion = null;
        state.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.items.splice(index, 1);
      });
  },
});
export const { filterOnContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
