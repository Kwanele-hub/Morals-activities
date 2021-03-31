import React from 'react'


const Item = ({ onClick, completed, text, number }) => (
  <li className={'item'}
    onClick={onClick}
  >
    {text}
  </li>
)

export default Item