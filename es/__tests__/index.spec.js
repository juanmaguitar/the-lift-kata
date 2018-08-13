 import Lift from '../index';

describe('Lift', () => {
  it('should be a class with the following API: getCurrentFloor(), call(), goto()', () => {
    expect(Lift).toBeInstanceOf(Function);
    expect(Lift.prototype.call).toBeInstanceOf(Function);
    expect(Lift.prototype.getCurrentFloor).toBeInstanceOf(Function);
    expect(Lift.prototype.goto).toBeInstanceOf(Function);
  });

  describe('#getCurrentFloor()', () => {
    it('should return a number', () => {
      const lift = new Lift();

      const currentFloor = lift.getCurrentFloor();

      expect(currentFloor).toEqual(expect.any(Number));
    });

    describe('when instantiated', () => {
      it('should be at floor 0', () => {
        const lift = new Lift();

        const currentFloor = lift.getCurrentFloor();

        expect(currentFloor).toBe(0);
      });
    });
  });

  describe('#call({ sourceFloor, direction })', () => {
    it('should make the lift move to the source floor', () => {
      const lift = new Lift();

      lift.call({ sourceFloor: 3, direction: 'up' });

      const currentFloor = lift.getCurrentFloor();

      expect(currentFloor).toBe(3);
    });

    describe('when called multiple times', () => {
      it('should make the lift move to the last floor called', async () => {
        const lift = new Lift();

        lift.call({ sourceFloor: 3, direction: 'up' });
        lift.call({ sourceFloor: -1, direction: 'up' });

        const currentFloor = lift.getCurrentFloor();

        expect(currentFloor).toBe(-1);
      });
    });
  });

  describe('#goto({ destFloor })', () => {
    it('should make the lift move to the destination floor', () => {
      const lift = new Lift();

      lift.goto({ destFloor: 4 });

      const currentFloor = lift.getCurrentFloor();

      expect(currentFloor).toBe(4);
    });
  });
});
