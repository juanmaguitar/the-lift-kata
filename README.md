# The lift kata

## Features


- ✅ a lift responds to calls containing a source floor and direction
- ✅ a lift has an attribute floor, which describes it’s current location
- a lift delivers passengers to requested floors
- ✅ you may implement current floor monitor
- you may implement direction arrows
- you may implement doors (opening and closing)
- you may implement DING!
- there can be more than one lift


## Installation

```bash
npm install lift
```

## Usage

```js
import Lift from 'lift';

const lift = new Lift({
  currentFloor: 1,
  direction: 'up',
});

const liftStrategy = LiftStrategy({
  requestedFloors: [{ 4, up }, { 2, up }],
  calls: [{ 1, up }, { 2 up }],
})

liftStrategy.addLift(lift);
liftStrategy.execute();

// start the dance!

lift.getCurrentFloor(); // -> 0

lift.call({ sourceFloor: 0, direction: 'up' });
lift.tick();
lift.getCurrentFloor(); // -> 0

lift.goTo({ floor: 4 });
lift.goTo({ floor: 2 });
lift.tick();
lift.getCurrentFloor(); // -> 2

lift.call({ sourceFloor: 1, direction: 'up' });
lift.tick();
lift.getCurrentFloor(); // -> 4

lift.tick();
lift.getCurrentFloor(); // -> 1
```

## Testing

Clone the repository and execute:

```bash
npm test
```

## Contribute

1. Fork it: `git clone {packageRepoCloneUrl}`
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Check the build: `npm run build`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D
