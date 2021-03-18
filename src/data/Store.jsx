import React, { useState } from "react";

const initialState = {
  number: 1,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }
  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: x => updateState('number', x),
      setText: x => updateState('text', x)
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store