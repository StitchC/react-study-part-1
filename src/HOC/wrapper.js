export function withSayHello(WrapperComponent) {
  const sayHello = (name) => {
    console.log(`hello my name is ${name}`)
  }


  return props => (
    <WrapperComponent sayHello={sayHello} {...props} />
  )
}