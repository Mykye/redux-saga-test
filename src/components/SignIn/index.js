import React, { useCallback, useState } from 'react'
import './styles.css'
//import Button from '@mui/material'

const SignIn = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [info, setInfo] = useState('')
  const [show, setShow] = useState(false)

  const handleNameChange = useCallback((event) => {
    setName(event.target.value)
  }, [setName])

  const handleAgeChange = useCallback((event) => {
    setAge(event.target.value)
  }, [setAge])

  const handleInfoChange = useCallback((event) => {
    setInfo(event.target.value)
  }, [setInfo])

  const handleButtonClick = () => {
    setShow(true)
    setTimeout(() => setShow(false), 3000)
  }

  return (
    <div className='signInContainer'>
      <input className='input' placeholder='name' onChange={handleNameChange} />
      <input className='input' placeholder='age' onChange={handleAgeChange} />
      <input className='input' placeholder='info' onChange={handleInfoChange} />
      <div>
        <button onClick={handleButtonClick} className='button'>Show info</button>
      </div>
      {show && 
        <div className='info'>
          <div>Name - {name}</div>
          <div>age - {age}</div>
          <div>info - {info}`</div>
        </div>}
    </div>
  )
}

export default SignIn
