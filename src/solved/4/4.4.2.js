const _ = require('lodash');

const Scheduler = (function ()  {
  const delayedFn = _.bind(setTimeout, undefined, _, _);

  return {
    delay: _.partial(delayedFn, _, _),
    delay1: _.partial(delayedFn, _, 1000),
    delay2: _.partial(delayedFn, _, 2000),
  }
})

Scheduler().delay1(() => {
  console.log('After 1 second')
})

Scheduler().delay2(() => {
  console.log('After 2 seconds')
})

Scheduler().delay(() => {
  console.log('After 3 seconds')
}, 3000)
