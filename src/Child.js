import React, { useContext } from 'react'
import {AppContext, SetAppContext} from './Hooks'

const Child = () => {
  const context = useContext(AppContext)
  const setContext = useContext(SetAppContext)

  const changeTheme = () => {
    const theme = context.theme === 'light' ? 'dark' : 'light'
    if(setContext) {
      setContext(state => {
        return {
          ...state,
          theme,
        }
      })
    }

  }

  return (
    <div className={`child ${context.theme}`}>
      <p>child 当前theme: {context.theme}</p>
      <button onClick={() => changeTheme()}>change theme</button>
    </div>
  )
}

export default Child