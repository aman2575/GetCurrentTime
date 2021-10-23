import React, { useState } from 'react'

const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);
  const UpdateTime = () => {
    let newCtime = new Date().toLocaleTimeString();
    setCtime(newCtime)

  }



  return (
    <>
      <h1> {ctime} </h1>
      <button onClick={UpdateTime}> get time</button>
    </>
  )
}

export default App
