import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    const data = axios.get("https://api.disneyapi.dev/character")
      .then((response) => {
        setCharacters(response.data.data)
      })
  }, [])

  console.log(characters)

  return (
    <main style={{
      backgroundColor: "#040714"
    }}>
      <div>
        {characters.map((i) => (
          <div style={{color: "white"}}>
            <img src={i.imageUrl} />
            <h2>{i.name}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home
