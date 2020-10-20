// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef(null)
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = usernameRef.current.value

    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    const {value} = event.target
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={usernameRef} onChange={handleChange} aria-invalid={Boolean(error)} aria-errormessage={error} />
        {error ? <div style={{color: 'red'}}>{error}</div> : null}
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
