export default class Maybe {
  static just = <T>(a: T) => new Just(a);

  static nothing = <T>(a: T) => new Nothing();

  static fromNullable = <T>(a: T | null) => a !== null ? Maybe.just(a) : Maybe.nothing(a);

  static of = <T>(a: T) => Maybe.just(a);

  map = <T>(f: Function): Just<T> | Nothing => null;

  get isNothing() {
    return false;
  }

  get isJust() {
    return false;
  }
}

export class Just<T> extends Maybe {
  constructor(
    private readonly props: T,
  ) {
    super();
  }

  get value() {
    return this.props;
  }

  map = (f: Function) => Just.of(f(this.value));

  getOrElse = () => this.value;

  filter = (f: Function) => Just.fromNullable(
    f(this.value) ? this.value : null,
  )

  get isJust () {
    return true;
  }

  toString = () => `Maybe.Just(${this.value})`;
}

export class Nothing extends Maybe {
  map = (f: Function) => this;

  get value() {
    throw new TypeError("Can't extract the value of a Nothing");
  }

  getOrElse = <T>(other: T) => other;

  filter = () => this.value;

  get isNothing () {
    return true;
  }

  toString = () => 'Maybe.Nothing';
}
