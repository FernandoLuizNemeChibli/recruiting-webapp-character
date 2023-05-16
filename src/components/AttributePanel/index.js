import { Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ATTRIBUTE_LIST } from "../../consts"
import AttributeElement from "../AttributeElement"

export default function AttributePanel({ charAttributes }) {
  const [attributes, setAttributes] = useState(charAttributes)

  const createAttributeSetter = (attributeName) => {
    //
    const attributeSetter = (newValue) => {
      console.log(newValue, attributeName)
      setAttributes((previousAttributes) => ({
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
    <Stack direction="column">
      {ATTRIBUTE_LIST.map((attributeName) => (
        <AttributeElement
          key={`attributeElement${attributeName}`}
          attributeName={attributeName}
          attributeValue={attributes[attributeName].points}
          setAttributeValue={createAttributeSetter(attributeName)}
        />
      ))}
    </Stack>
  )
}
