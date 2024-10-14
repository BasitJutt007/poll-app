import { configureStore } from '@reduxjs/toolkit';
import pollReducer from './pollSlice';
import { pollApi } from './pollApi';

const store = configureStore({
    reducer: {
        poll: pollReducer,
        [pollApi.reducerPath]: pollApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pollApi.middleware),
});

export default store;
