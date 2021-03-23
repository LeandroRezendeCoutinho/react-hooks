import { useState } from 'react'

export const useCounter = (InitialValue = 100) => {
  const [count, setCount] = useState(InitialValue)

  function inc() {
    setCount(count + 1)
  }

  function dec(params) {
    setCount(count - 1)
  }

  return [count, inc, dec]
}