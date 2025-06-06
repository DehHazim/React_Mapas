import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import localizacaoReducer from '../store/LocalizacaoSlice';

const store = configureStore({
    reducer: {
        localizacao: localizacaoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => ( 
    <Provider store ={store}>{children}</Provider>
);