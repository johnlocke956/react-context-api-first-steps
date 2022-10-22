import React, { useContext } from 'react'

import { LangContext } from '../contexts/LangContext'
import { ThemeContext } from '../contexts/ThemeContext'

import './Page.scss'

const texts = {
  title: {
    it: 'React Context API con aggregatore di provider',
    en: 'React Context API with providers combiner',
  },
  buttons: {
    language: {
      it: 'Lingua',
      en: 'Language',
    },
    theme: {
      it: 'Cambia tema',
      en: 'Toggle theme',
    },
  },
  phrase: {
    it: 'I topi non avevano nipoti',
    en: 'The mouses had no nephews',
  },
}

const Page = () => {
  const [lang, setLang] = useContext(LangContext)
  const [theme, setTheme] = useContext(ThemeContext)

  const changeLang = () => setLang(lang === 'it' ? 'en' : 'it')
  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <div className={`container ${theme}`}>
      <h1>{texts.title[lang]}</h1>
      <button
        className={`${theme === 'light' ? 'dark' : 'light'}`}
        onClick={changeLang}
      >
        {texts.buttons.language[lang]}: {lang}
      </button>
      <button
        className={`${theme === 'light' ? 'dark' : 'light'}`}
        onClick={changeTheme}
      >
        {texts.buttons.theme[lang]}
      </button>
      <h2>{texts.phrase[lang]}</h2>
    </div>
  )
}

export default Page
