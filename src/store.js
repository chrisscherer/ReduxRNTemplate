import { configureStore } from '@reduxjs/toolkit';
import auditSlice from './reducers/audit.slice.js'

export const store = configureStore({
  reducer: {
    audit: auditSlice
  },
});
