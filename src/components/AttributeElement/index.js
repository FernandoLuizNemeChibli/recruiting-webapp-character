import { Button, Typography } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"

import React from "react"

export default function AttributeElement({ attribute, setPoints }) {
  const increasePoints = () => {
    setPoints(attribute.points + 1)
  }
  const decreasePoints = () => {
    setPoints(attribute.points - 1)
  }
  return (
    <div>
      <Typography>
        {attribute.name}: {attribute.points} ({attribute.getModifier()})
      </Typography>
      <Button
        variant="outlined"
        size="large"
        startIcon={<Remove />}
        onClick={decreasePoints}
      />
      <Button
        variant="outlined"
        size="large"
        startIcon={<Add />}
        onClick={increasePoints}
      />
    </div>
  )
}
