import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactOperations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// addContact: {
//        reducer: (store, { payload }) => {
//          store.push(payload);
//        },
//        prepare: data => {
//          return {
//            payload: {
//              ...data,
//              id: nanoid(),
//            },
//          };
//        },
//      },
//      removeContact: (store, { payload }) =>
//        store.filter(({ id }) => id !== payload),
//   },
// export const { addContact, removeContact } = contactSlice.actions;

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;
