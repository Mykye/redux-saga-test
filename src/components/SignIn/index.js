import React, { useCallback, useState } from 'react'
import { Button, Input, Box } from '@mui/material'

const styles = {
  box: {
    border: '1px solid blue',
    borderRadius: 4,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '290px'
  },
  button: {
    marginTop: '10px',
    marginBottom: '10px',
    alignSelf: 'center'
  },
  input: {
    marginTop: 5
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const SignIn = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [info, setInfo] = useState('')
  const [message, setMessage] = useState({ message: '', style: {} })

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
    if (name && age && info) {
      setMessage({
        message: 'Authentification ...',
        style: { color: 'green' }
      })
    } else {
      setMessage({
        message: 'Please fill all the fields',
        style: { color: 'red' }
      })
    }
    setTimeout(() => {
      setMessage({})
    }, 4000)
  }

  return (
    <Box sx={styles.box}>
      <div>Fill fields to sign in</div>
      <div style={styles.inputs}>
        <Input style={styles.input} placeholder='name' onChange={handleNameChange} />
        <Input style={styles.input} placeholder='age' onChange={handleAgeChange} />
        <Input style={styles.input} placeholder='info' onChange={handleInfoChange} />
      </div>
      <Button variant="outlined" onClick={handleButtonClick} style={styles.button}>Sign In</Button>
      <span style={message.style}>{message?.message && message.message}</span>
    </Box>
  )
}

export default SignIn
