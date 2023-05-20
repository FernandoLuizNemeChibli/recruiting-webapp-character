export default class Attribute {
  constructor(name, points) {
    this.name = name
    this.points = points
  }

  getModifier = function () {
    return Math.floor((this.points - 10) / 2)
  }
}
