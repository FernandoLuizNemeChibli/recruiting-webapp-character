import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ATTRIBUTE_LIST } from "../../consts"

export default function ClassElement({
  className,
  attributesRequirements,
  charAttributes,
}) {
  const [classDisabled, setClassDisabled] = useState(true)

  useEffect(() => {
    let newDisabledValue = false
    ATTRIBUTE_LIST.forEach((attributeName) => {
      console.log("checking ", attributeName)
      if (
        charAttributes[attributeName].points <
        attributesRequirements[attributeName]
      ) {
        console.log(
          charAttributes[attributeName].points,
          attributesRequirements[attributeName]
        )
        newDisabledValue = true
      }
    })
    console.log(newDisabledValue)
    setClassDisabled(newDisabledValue)
  }, [charAttributes])

  return (
    <Button variant="contained" disabled={classDisabled}>
      {className}
    </Button>
  )
}
