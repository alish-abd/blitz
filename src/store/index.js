import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: {warnAfter: 128},
            serializableCheck: {warnAfter: 128},
        })
    });
};

export const store = setupStore();