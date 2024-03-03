import {configureStore} from '@reduxjs/toolkit'
import mystore from './mystore'

const store = configureStore({
    reducer: {
        mystore: mystore
    },
    devTools: true
})

export default store