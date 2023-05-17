import { Stack } from "@mui/material"
import { CLASS_LIST } from "../../consts"
import React, { useState } from "react"
import ClassElement from "../ClassElement"
import ClassInfoDialog from "../ClassInfoDialog"

export default function ClassPanel({ charAttributes }) {
  const [classInfoName, setClassInfoName] = useState("")
  const [classInfoModalOpen, setClassInfoModalOpen] = useState(false)

  const callModal = (className) => {
    setClassInfoName(className)
    setClassInfoModalOpen(true)
  }
  return (
    <Stack direction="column" spacing={2}>
      {Object.keys(CLASS_LIST).map((className) => (
        <ClassElement
          key={`attributeElement${className}`}
          className={className}
          attributesRequirements={CLASS_LIST[className]}
          charAttributes={charAttributes}
          callModal={callModal}
        />
      ))}
      <ClassInfoDialog
        open={classInfoModalOpen}
        onClose={() => setClassInfoModalOpen(false)}
        className={classInfoName}
      />
    </Stack>
  )
}
