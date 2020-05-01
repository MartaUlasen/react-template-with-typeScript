import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { charactersModule } from './allCases';

const rootReducer = combineReducers({
    characters: charactersModule.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type IRootDispatch = typeof store.dispatch;
export type IGetRootState = typeof store.getState;
export type IRootState = ReturnType<typeof rootReducer>;

export default store;
