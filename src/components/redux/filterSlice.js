import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addFilter, filter } = sliceFilter.actions;
