import { configureStore } from '@reduxjs/toolkit'
import { i18nSlice } from 'app/i18n/store'
import { enableMapSet } from 'immer'

enableMapSet()

export const store = configureStore({
  reducer: {
    i18n: i18nSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat()
})
export type AppDispatch = typeof store.dispatch
export type GetState = typeof store.getState
export type RootState = ReturnType<GetState>

export { useTypedSelector, useTypedDispatch } from './hooks'
