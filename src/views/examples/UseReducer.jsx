import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0
}

function reducer(state, action) {
  switch (action.type) {
    case 'number_add2':
      return { ...state, number: state.number + 2 }
    case 'number_mult7':
      return { ...state, number: state.number * 7 }
    case 'number_div25':
      return { ...state, number: state.number / 25 }
    case 'number_parseInt':
      return { ...state, number: parseInt(state.number) }
    case 'number_addN':
      return { ...state, number: state.number + action.payload }
    case 'login':
      return { ...state, user: { name: action.payload } }
    default:
      return state
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ?
          <span className="text">{state.user.name}</span>
          : <span className="text">No user</span>}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Mary' })}>Login</button>
          <button className="btn" onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
          <button className="btn" onClick={() => dispatch({ type: 'number_mult7' })}>*7</button>
          <button className="btn" onClick={() => dispatch({ type: 'number_div25' })}>/25</button>
          <button className="btn" onClick={() => dispatch({ type: 'number_parseInt' })}>Int</button>
          <button className="btn" onClick={() => dispatch({ type: 'number_addN', payload: + 10 })}>+ 10</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
