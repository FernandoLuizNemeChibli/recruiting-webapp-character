import React, { useState } from "react"
import "./App.css"
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js"
import { Stack } from "@mui/material"
import AttributePanel from "./components/AttributePanel"
import Player from "./classes/player"
import ClassPanel from "./components/ClassPanel"

function App() {
  const player = new Player("player name placeholder")
  const [charAttributes, setCharAttributes] = useState(player.attributes)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Stack direction="row" spacing={2}>
          <AttributePanel
            charAttributes={charAttributes}
            setCharAttributes={setCharAttributes}
          />
          <ClassPanel charAttributes={charAttributes} />
        </Stack>
      </section>
    </div>
  )
}

export default App
