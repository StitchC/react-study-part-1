import {useContext} from 'react'
import {AppContext, SetAppContext} from '../Hooks'
import VsHook from './Hook'

// HOC 容器
export const withSetClickCount = Component => {
  return props => {
    const setAppContext = useContext(SetAppContext)
    const setClickCount = () => {
      if(setAppContext) {
        setAppContext(state => {
          return {
            ...state,
            clickCount: state.clickCount + 1,
          }
        })
      }
    }

    return <Component {...props} setClickCount={setClickCount}/>
  }
}


// 自定义hook
export const useSetClickCount = () => {
  const setAppContext = useContext(SetAppContext)

  return () => {
    if(setAppContext) {
      setAppContext(state => {
        return {
          ...state,
          clickCount: state.clickCount + 1
        }
      })
    }
  }
}

const HocOfSetClickCount = props => {
  return <button onClick={() => props.setClickCount()}>vsHoc</button>
}

export const HocVsHook = props => {
  const context = useContext(AppContext)
  const Hoc = withSetClickCount(HocOfSetClickCount)

  return (
    <div>
      <p>当前点击次数{context.clickCount}</p>
      <Hoc />
      <VsHook />
    </div>
  )
}