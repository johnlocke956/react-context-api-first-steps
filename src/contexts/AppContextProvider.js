/* 
CONTEXTS COMBINER GUIDE:
https://medium.com/front-end-weekly/how-to-combine-context-providers-for-cleaner-react-code-9ed24f20225e
*/

import { LangProvider } from './LangContext';
import { ThemeProvider } from './ThemeContext';

import { combineComponents } from './combineComponents';

const providers = [
  LangProvider,
  ThemeProvider
]
export const AppContextProvider = combineComponents(...providers);