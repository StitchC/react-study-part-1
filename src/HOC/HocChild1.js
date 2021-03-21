import { withSayHello } from './index'

const Child = props => {
  return <button onClick={() => props.sayHello(props.name)}>click me and say</button>
}

export default withSayHello(Child)