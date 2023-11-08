import React from 'react'
import { ButtonProps } from './index.d'
const Button: React.FC<ButtonProps> = ({ style, text }) => {
  console.log([1, 2, 3].includes(1))
  return <button style={style}>{text}</button>
}
export default Button
