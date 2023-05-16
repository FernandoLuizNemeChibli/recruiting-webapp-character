import { Stack } from "@mui/material"
import { CLASS_LIST } from "../../consts"
import React from "react"
import ClassElement from "../ClassElement"

export default function ClassPanel({}) {
  return (
    <Stack direction="column">
      {Object.keys(CLASS_LIST).map((className) => (
        <ClassElement
          key={`attributeElement${className}`}
          className={className}
        />
      ))}
    </Stack>
  )
}
