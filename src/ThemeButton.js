import { useContext } from 'react'
import { AppContext } from './context'

export default function(props) {
  const theme = useContext(AppContext)

  return (
    <button className={theme}>按钮</button>
  )
}