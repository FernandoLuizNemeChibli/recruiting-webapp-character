import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "../../consts.js"
import Attribute from "../attribute/index.js"

export default class Player {
  constructor(name) {
    this.name = name
    this.attributes = Array(...ATTRIBUTE_LIST).reduce(
      (accumulator, attributeName) => ({
        ...accumulator,
        [attributeName]: new Attribute(attributeName, 10),
      }),
      {}
    )
    this.skill = SKILL_LIST.map((skill) => {
      return {
        [skill.name]: {
          points: 0,
          attributeModifier: skill.attributeModifier,
        },
      }
    })
  }
}
