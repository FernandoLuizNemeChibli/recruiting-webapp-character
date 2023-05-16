import { Stack } from "@mui/material"
import { CLASS_LIST } from "../../consts"
import React from "react"
import ClassElement from "../ClassElement"

export default function ClassPanel({ charAttributes }) {
  return (
    <Stack direction="column" spacing={2}>
      {Object.keys(CLASS_LIST).map((className) => (
        <ClassElement
          key={`attributeElement${className}`}
          className={className}
          attributesRequirements={CLASS_LIST[className]}
          charAttributes={charAttributes}
        />
      ))}
    </Stack>
  )
}
