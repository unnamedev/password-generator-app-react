import {combineReducers, configureStore} from "@reduxjs/toolkit"
import passwordReducer from "../features/password/passwordSlice"
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist"
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants"

/* This is the configuration for the redux-persist library. */
const persistConfig = {
    key: "root",
    storage
}

/* This is the root reducer. It combines all the reducers into one. */
const rootReducer = combineReducers({
    pwd: passwordReducer
})

/* This is a function that combines the reducer with the redux-persist library. */
const persistedReducer = persistReducer(persistConfig, rootReducer)

/* Creating a store with the reducer we just created. */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)