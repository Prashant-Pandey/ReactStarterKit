import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/Counter/counterSlice';
import loginReducer from './reducer/loginReducer';
import messageReducer from './reducer/messageReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loginState: loginReducer,
    messageState: messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
