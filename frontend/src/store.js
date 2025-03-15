import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productsReducers.jsx'
import { userListReducer, userLoginReducer } from './reducers/usersReducers.jsx'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userList: userListReducer,
    userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const InitialState = { 
    userLogin: {userInfo: userInfoFromStorage},
}

const store = configureStore({
    reducer,
    preloadedState:InitialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store;