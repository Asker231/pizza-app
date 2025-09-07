import React from 'react'
import type { IButton } from './prop.button'

function Button({children,...prop}:IButton) {
  return (
    <button {...prop}>{children}</button>
  )
}

export default Button