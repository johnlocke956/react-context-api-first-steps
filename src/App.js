import Page from './components/Page';

import { AppContextProvider } from './contexts/AppContextProvider'

function App() {
  return (
    <AppContextProvider>
      <Page />
    </AppContextProvider>

  );
}

export default App;
