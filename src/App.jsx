import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [ships, setShips] = useState([])

  useEffect(() => {getStarships()}, [])

  async function getStarships() {

    try {
    let resp = await fetch("https://swapi.dev/api/starships")
    const data = await resp.json()
    console.log(data.results[0])
    setShips(data.results)
    }

    catch(error)
    {
      console.log(error)
    }
  }
 const output = ships.map((ship) => {
  return <Box data={ship} key={ship.model}/>  
  })

  return (
    <div className={"container"}>
   {output}
    </div>
  )
}

export default App

function Box({data}) {
  return (
    <>
    <div className={"box"}>
      {data.name}
    </div>
    </>
  )
}