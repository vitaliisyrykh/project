import React, { useState } from 'react'
import FormPage from './components/form-page';
import { themeContext } from './contexts/contexts'
//import SwitchTheme from './components/switch-theme'

function App () {
  const [isLight, setIsLight] = useState(true)

  return (
    <themeContext.Provider value={[isLight, setIsLight]}>
      <FormPage />
    </themeContext.Provider>
  )
}

export default App
