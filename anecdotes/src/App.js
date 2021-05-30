import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( new Array(anecdotes.length).fill(0) )

  const nextAnecdote = () => {
    const generateRandomAnecdotes = Math.floor( Math.random() * anecdotes.length )
    setSelected(generateRandomAnecdotes)
  }

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1;

    setVotes(copy)
  }
  
  const mostVotesIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={voteAnecdote}>
        vote
      </button>
      <button onClick={nextAnecdote}>
        next anecdote
      </button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotesIndex]}</p>
      <p>has {votes[mostVotesIndex]} votes</p>
    </div>
  )
}

export default App