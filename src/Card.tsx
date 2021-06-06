import React from 'react'

interface CardI {
  advice: string,
  fetchAdvice: () => void
}

export const Card: React.FC<CardI> = ({advice, fetchAdvice}) => (
  <div className="card">
    <div className="advice">
      {advice}
    </div>
    <button className="adviceButton" onClick={fetchAdvice} >Give me advice</button>
  </div>
)