import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

import axios from 'axios'
import './style.css'

function App() {
  const [state, setState] = useState({ advice: '' })

  useEffect(() => fetchAdvice(), [])

  function fetchAdvice() {
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
      <div className="card">
        <div className="advice">
          {state.advice}
        </div>
        <button className="adviceButton" onClick={fetchAdvice} >Give me advice</button>
      </div>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))