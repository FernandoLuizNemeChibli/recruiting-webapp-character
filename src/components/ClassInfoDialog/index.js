import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material"
import React from "react"
import { CLASS_LIST } from "../../consts"

export default function ClassInfoDialog({ open, onClose, className }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ textAlign: "center", alignItems: "center" }}
    >
      <DialogTitle>{className} Minimum Requirements</DialogTitle>
      <DialogContent>
        {className &&
          Object.keys(CLASS_LIST[className]).map((attributeName) => {
            const attributeValue = CLASS_LIST[className][attributeName]
            return (
              <DialogContentText key={`classAttribute${attributeName}`}>
                {attributeName}: {attributeValue}
              </DialogContentText>
            )
          })}
      </DialogContent>
      <DialogActions>
        <Button autoFocus variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}
