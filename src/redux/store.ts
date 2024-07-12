import { configureStore } from '@reduxjs/toolkit'
import  endpointReduser from './endPointSlice'
import catReduser from './categorySlice'
import countryReduser from './countrySlice'
import langReduser from './langSlice'
import sortByReduser from './sortBySlice'
import searchReduser from './searchSlice'

const store = configureStore({
    
  reducer: {
    selectedEndpoint: endpointReduser,
    category: catReduser,
    country:countryReduser,
    lang:langReduser,
    sortBy:sortByReduser,
    search:searchReduser
  },

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store