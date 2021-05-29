import React, { useState } from 'react'

const Feedback = ({ text, value}) => (
  <p>{text} {value}</p>
)

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

      <h2>Statistics</h2>
      <Feedback text='good' value={good} />
      <Feedback text='neutral' value={neutral} />
      <Feedback text='bad' value={bad} />
    </div>
  )
}

export default App