import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { AppContextProvider } from './context'
import Child from './Child'
import MyHoc from './HOC/HOCComponent'


const App = () => {

  return (
    <AppContextProvider>
      <div className="App">
        app
        <Child />
        {/*<MyHoc foo="foo" bar="bar" baz="baz"/>*/}
      </div>
    </AppContextProvider>
  )
}

export default App
