import { createContext } from "react";


export const GlobalContext =  createContext()

const GlobalStateProvider = ({children}) => {

    
  return (
    <GlobalContext.Provider value={"vaishkah"}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateProvider
