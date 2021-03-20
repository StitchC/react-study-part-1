import { withSayHello } from './wrapper'

const myHoc = props => {
  return (
    <div>
      <button onClick={() => props.sayHello('stitch')}>我是hoc</button>
      <span>{Object.entries(props).join('')}</span>
    </div>
  )
}

export default withSayHello(myHoc)