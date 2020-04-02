export class Wrapper<T>{
  constructor(private readonly props: T) {
    this.props = props;
  }

  // wrap :: A -> Wrapper(A)
  static wrap = <T>(val: T) => new Wrapper(val);

  // map :: (A -> B) -> A -> B
  map = (f: Function) => f(this.props);

  // Functor
  // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
  flatMap = (f: Function) => Wrapper.wrap(f(this.props));

  toString = () => `Wrapper (${this.props})`;
}

export default Wrapper;
