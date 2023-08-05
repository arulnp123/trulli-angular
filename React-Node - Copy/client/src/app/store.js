// import { configureStore } from '@reduxjs/toolkit'
// import loginReducer from '../action/loginAction'

// export default configureStore({
//   reducer: {
//      login: loginReducer,
//   },
// })

// import { createStore, applyMiddleware} from "redux";
// import loginReducer from '../action/loginAction';
// import  { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import { createStore } from "@reduxjs/toolkit";

// const persistConfig = {
//   key : 'main-root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, loginReducer);

// const store = createStore(persistedReducer,applyMiddleware());

// const Presistor = persistStore(store);

// export{Presistor};

// export default store;










//https://edvins.io/how-to-use-redux-persist-with-redux-toolkit


// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// import loginReducer from '../action/loginAction';

// const reducers = combineReducers({
//   login: loginReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });

// export default store;




import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../action/loginAction';import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { encryptTransform } from 'redux-persist-transform-encrypt';


import { v4 as uuid } from 'uuid';

  const unique_id = uuid();

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    transforms: [
        encryptTransform({
          secretKey: unique_id,
          onError: function (error) {
            console.log('error');
          },
        }),
      ],
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };