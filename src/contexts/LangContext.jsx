import React, { useState, createContext } from 'react'

export const LangContext = createContext()

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('it')

  return (
    <LangContext.Provider value={[lang, setLang]}>
      {children}
    </LangContext.Provider>
  )
}
