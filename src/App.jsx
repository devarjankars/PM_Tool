import { useState } from 'react'
import Browse from './Components/Browse'
import { Provider } from 'react-redux'
import store from './Utils/store'

function App() {

  return (<Provider store={store}><Browse/></Provider>
  )
}

export default App
