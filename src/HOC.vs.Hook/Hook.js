import { useSetClickCount } from './index'

export default props => {
  const setClickCount = useSetClickCount()
  return <button onClick={() => setClickCount()}>vsHook</button>
}