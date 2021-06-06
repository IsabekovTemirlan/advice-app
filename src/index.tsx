import React, { useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { Card } from "./Card";

import axios from 'axios'
import './style.css'

type adviceT = {
  advice: string
}

function App() {
  const [state, setState] = useState<adviceT>({ advice: '' })

  useEffect(() => fetchAdvice(), [])

  function fetchAdvice(): void {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        setState({ advice })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <div className="app">
      <Card advice={state.advice} fetchAdvice={fetchAdvice} />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))