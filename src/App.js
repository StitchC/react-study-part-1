import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { AppContextProvider, AppContext } from './Hooks'
import HOCchild1 from './HOC/HocChild1'
import HOCchild2 from './HOC/HocChild2'
import { HocVsHook } from './HOC.vs.Hook'
import Child from './Child'


const App = () => {
  return (
    <AppContextProvider>
      <div className="App">
        app
        <Child />
        <HOCchild1 name="child1"/>
        <HOCchild2 name="child2"/>
        <HocVsHook />
      </div>
    </AppContextProvider>
  )
}

export default App
