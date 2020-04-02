import * as R from 'ramda';
import Wrapper from './functors/WrapperFunctor';

const wrappedValue = Wrapper.wrap('Get Functional');

wrappedValue.map(R.toUpper); // GET FUNCTIONAL

wrappedValue
  .flatMap(R.append('!'))
  .flatMap(R.map(R.toUpper))
  .map(R.identity);
/**
 * Returns:
 * [
 *   'G', 'E', 'T', ' ',
 *   'F', 'U', 'N', 'C',
 *   'T', 'I', 'O', 'N',
 *   'A', 'L', '!'
 * ]
 */

/*** ***/

const two = Wrapper.wrap(2);
const plus3 = R.add(3);

two.flatMap(
  R.compose(
    plus3,
    R.tap(console.log), // 2
  ),
).map(R.identity); // 5
