import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { api } from "./api";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer, 
})

export const store = configureStore({
    reducer:rootReducer, 
    // adding the middleware enables caching, invalidation, polling, 
    // and other useful features of 'rtk-quer' 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware), 

})

export type AppDispatch = typeof store.dispatch; 
export type AppState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState> 

// export const useAppDispatch: () => AppDispatch = useDispatch; 
// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector; 
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); 
// export const useAppSelector = useSelector.withTypes<RootState>(); 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 

// optional, but required for refetchOnFocus/refetchOnReconnect  behavious, 
setupListeners(store.dispatch); 