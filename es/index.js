/* eslint-disable no-underscore-dangle */

class Lift {
  constructor() {
    this._currentFloor = 0;
  }

  /**
   * @param {options} Object
   * @param {Number} sourceFloor
   * @param {string} direction
   */
  call({ sourceFloor, direction }) {
    this._currentFloor = sourceFloor;
  }

  /**
   * @return {Number}
   */
  getFloor() {
    return this._currentFloor;
  }
}

export default Lift;
