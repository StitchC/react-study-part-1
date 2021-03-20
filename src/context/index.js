import React, { useState } from 'react'

const defaultAppContextValue = {
  theme: 'light',
}

export const AppContext = React.createContext(defaultAppContextValue)

export const SetAppContext = React.createContext(undefined)

export const AppContextProvider = props => {
  const [ appContext, setAppContext ] = useState(defaultAppContextValue)

   return (
     <AppContext.Provider value={appContext}>
       <SetAppContext.Provider value={setAppContext}>
         {props.children}
       </SetAppContext.Provider>
     </AppContext.Provider>
   )
}