import React, { useState } from 'react'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad
  const averageFeedback = (good - bad) / totalFeedback
  const positiveFeedbackPercentage = (good / totalFeedback) * 100

  if (totalFeedback === 0) {
    return (
      <>
        <h2>Statistics</h2>

        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>Statistics</h2>

      <table>
        <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={totalFeedback} />

        <Statistic text='average' value={averageFeedback} />
        <Statistic text='positive' value={positiveFeedbackPercentage} />
        </tbody>
      </table>
    </>
  )
}

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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App