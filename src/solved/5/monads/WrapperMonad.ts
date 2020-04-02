

export class Wrapper<T>{
  constructor(private readonly props: T) {
    this.props = props;
  }

  // wrap :: A -> Wrapper(A)
  static of = <T>(val: T) => new Wrapper(val);

  // map :: (A -> B) -> A -> B
  map = (f: Function) => Wrapper.of(f(this.props));

  join = (): Wrapper<T> => {
    if (!(this.props instanceof Wrapper)) {
      return this;
    }

    return this.props.join();
  }

  toString = () => `Wrapper (${this.props})`;
}

export default Wrapper;
