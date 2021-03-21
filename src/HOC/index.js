export const withSayHello = Component => {
  const sayHello = name => {
    console.log(`hello my name is ${name}`)
  }

  return props => {
    return <Component { ...props } sayHello={sayHello}/>
  }
}