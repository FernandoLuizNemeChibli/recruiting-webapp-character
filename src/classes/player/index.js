import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "../../consts.js"

export default class Player {
  constructor(name) {
    this.name = name
    this.attributes = Array(...ATTRIBUTE_LIST).reduce(
      (accumulator, attributeName) => ({
        ...accumulator,
        [attributeName]: {
          points: 10,
          modifier: 0,
        },
      }),
      {}
    )
    this.class = null
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
