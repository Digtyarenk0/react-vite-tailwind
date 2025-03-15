import React, { ReactNode, useCallback } from 'react'

import { Provider } from './provider'
import { setUserLocale } from '@/app/i18n/store'
import { useTypedDispatch, useTypedSelector } from '@/app/store'
import { SupportedLocale } from '@/app/i18n/constants'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useTypedDispatch()
  const storeUserLocale = useTypedSelector((state) => state.i18n.userLocale)

  const onActivate = useCallback(
    (locale: SupportedLocale) => {
      document.documentElement.setAttribute('lang', locale)
      dispatch(setUserLocale(locale))
    },
    [dispatch]
  )

  return (
    <Provider locale={storeUserLocale} onActivate={onActivate}>
      {children}
    </Provider>
  )
}
