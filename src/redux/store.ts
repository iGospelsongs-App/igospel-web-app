import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from '../redux/features/sidebarSlice'
// import authReducer from '../redux/features/authSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        // auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export default store;