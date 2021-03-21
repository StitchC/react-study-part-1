#### HOC 高阶组件

实际上就是一个返回组件的函数，函数内部提取出一些公共的逻辑，然后注入到被包装的组件props 中，从而让被包装组件拥有公共的属性或者方法

```typescript jsx
import React from 'react'

export default component => {
  const baseFuncntion = () => {
    // ... do sth
  }
  
  return props => {
    return <component { ...props } baseFunction={baseFuncntion}/>
  }
}



// 使用
import withBaseFunction from './Hoc/baseFunction'

const ChildComponent = props => {
  return <button onClick={props.baseFunction}></button>
}

// 这样 子组件就可以在内部使用 baseFunction 这个方法了
export default withBaseFunction(ChildComponent)


```