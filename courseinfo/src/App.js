import React from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.title} {props.exercises}</p>
}

const Content = ({ parts }) => {

  return (
    <>
      {parts.map(part => 
        <Part title={part.name} exercises={part.exercises} />
        )
      }
    </>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, currentPart) => total + currentPart.exercises, 0)

  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App