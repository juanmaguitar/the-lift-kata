/* eslint-disable no-underscore-dangle */

const weakMap = new WeakMap();
const getState = instance => weakMap.get(instance);

class Lift {
  constructor() {
    const state = {
      currentFloor: 0,
    };

    weakMap.set(this, state);
  }

  /**
   * @return {Number}
   */
  getCurrentFloor() {
    return getState(this).currentFloor;
  }

  /**
   * @param {Number} sourceFloor
   * @param {string} direction
   */
  call({ sourceFloor, direction }) {
    getState(this).currentFloor = sourceFloor;
  }

  /**
   * @param {Number} destFloor
   */
  goto({ destFloor }) {
    getState(this).currentFloor = destFloor;
  }
}

export default Lift;
