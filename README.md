# Lift

```js
const lift = new Lift();

lift.getFloor(); // 4
lift.getPassengers(); // []

lift.call({ sourceFloor: 3, direction: 'up' });
// ...
lift.getFloor(); // 3
lift.getPassengers(); // ['rudy']
// ...


```


## Installation

```bash
npm install lift
```

## Usage

```js
// Insert code example here
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
