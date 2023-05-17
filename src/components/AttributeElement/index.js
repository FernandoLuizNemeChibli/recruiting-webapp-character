import { Button, Typography } from "@mui/material"
import { Add, Remove } from "@mui/icons-material"

import React from "react"

export default function AttributeElement({
  attributeName,
  attributeValue,
  setAttributeValue,
}) {
  const increaseAttribute = () => {
    setAttributeValue(attributeValue + 1)
  }
  const decreaseAttribute = () => {
    setAttributeValue(attributeValue - 1)
  }
  return (
    <div>
      <Typography>
        {attributeName}: {attributeValue}{" "}
      </Typography>
      <Button
        variant="outlined"
        size="large"
        startIcon={<Remove />}
        onClick={decreaseAttribute}
      />
      <Button
        variant="outlined"
        size="large"
        startIcon={<Add />}
        onClick={increaseAttribute}
      />
    </div>
  )
}
