
import * as R from 'ramda';
/**
 * Either Monad class (from Functional Programming in JavaScript)
 */
export default class Either<T> {
  constructor(protected readonly _value: T) { }

  get value () {
    return this._value;
  }

  static fromNullable<T> (a: T) {
    // Book doesn't check if a is undefined. Am I wrong to check for undefined?
    return R.isNil(a) ? Either.left(a) : Either.right(a);
  }
  static left<T> (a: T) {
    return new Left(a);
  }
  static right<T> (a: T) {
    return new Right(a);
  }
  static of<T>(a: T) {
    return Either.right(a);
  }
}

/*
 * Left class is meant to handle errors or possible unexpected results.
 * (Left is a bit similar to Nothing)
 */
class Left<T> extends Either<T> {

  map = (fn: Function) => this;

  get value (): T {
    throw new TypeError("Can't extract value from a Left() monad");
  }

  getOrElse = (other: T) => other;

  orElse = (fn: Function) => fn(this._value);

  getOrElseThrow = (a: string) => new Error(a);

  filter = (fn: Function) => this;

  get isNothing() {
    return true;
  }

  toString = () => `[object Either.Left] (value: ${this._value})`;
}

/**
 * Right monad used for handling valid/expected types of results
 */
class Right<T> extends Either<T> {
  get value () {
    return this._value;
  }

  getOrElse = () => this.value;

  orElse = () => this;

  getOrElseThrow = (a: T) =>  this.value;

  chain = (fn: Function) => fn(this.value);

  filter = (fn: Function) => (
    Either.fromNullable(fn(this.value) ? this.value : null)
  )

  toString = () => `[object Either.Right] (value: ${this._value})`;
}
