import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
  const n = parseInt(num)
  if (n < 0) return -1
  if (n === 0) return 1
  return calcFactorial(n - 1) * n
}

function isEven(value) {
  return value % 2 === 0 ? true : false
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1)
  const [factorial, setFactorial] = useState(1)
  const [status, setStatus] = useState("Odd")

  useEffect(function () {
    setFactorial(calcFactorial(number))
  }, [number])

  useEffect(function () {
    setStatus(isEven(number) === true ? "Even" : "Odd")
  }, [number])

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">{factorial}</span>
        </div>
        <input type="number" class="input"
          value={number}
          onChange={e => setNumber(e.target.value)} />
      </div>

      <SectionTitle title="Exercise #02" />
      <div className="center">
        <div>
          <span className="text">Status:</span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  )
}

export default UseEffect
