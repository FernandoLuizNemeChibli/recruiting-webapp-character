import { Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ATTRIBUTE_LIST } from "../../consts"
import AttributeElement from "../AttributeElement"

export default function AttributePanel({ charAttributes, setCharAttributes }) {
  const createAttributeSetter = (attributeName) => {
    const attributeSetter = (newValue) => {
      setCharAttributes((previousAttributes) => ({
        ...previousAttributes,
        [attributeName]: {
          ...previousAttributes[attributeName],
          points: newValue,
        },
      }))
    }
    return attributeSetter
  }
  return (
    <Stack direction="column" spacing={2}>
      {ATTRIBUTE_LIST.map((attributeName) => (
        <AttributeElement
          key={`attributeElement${attributeName}`}
          attributeName={attributeName}
          attributeValue={charAttributes[attributeName].points}
          setAttributeValue={createAttributeSetter(attributeName)}
        />
      ))}
    </Stack>
  )
}
