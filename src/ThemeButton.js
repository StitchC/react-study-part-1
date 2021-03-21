import { useContext } from 'react'
import { AppContext } from './Hooks'

export default function(props) {
  const theme = useContext(AppContext)

  return (
    <button className={theme}>按钮</button>
  )
}