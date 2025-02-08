import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store , persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux" 
import Main from './containers/Main'
function App() {

  return (
    
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
    
  )
}

export default App
