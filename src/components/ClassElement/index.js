import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ATTRIBUTE_LIST } from "../../consts"

export default function ClassElement({
  className,
  attributesRequirements,
  charAttributes,
  callModal,
}) {
  const [classDisabled, setClassDisabled] = useState(true)

  useEffect(() => {
    let newDisabledValue = false
    ATTRIBUTE_LIST.forEach((attributeName) => {
      if (
        charAttributes[attributeName].points <
        attributesRequirements[attributeName]
      ) {
        newDisabledValue = true
      }
    })
    setClassDisabled(newDisabledValue)
  }, [attributesRequirements, charAttributes])

  return (
    <Button
      variant={classDisabled ? "outline" : "contained"}
      onClick={() => callModal(className)}
    >
      {className}
    </Button>
  )
}
