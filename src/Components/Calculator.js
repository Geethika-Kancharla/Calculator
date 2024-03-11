import React from 'react'

export default function Calculator(props) {
  return (
    <div>
      <button className={props.className} style={{ height: '70px', width: '70px' }} onClick={(e) => props.onClick(e.target.value)} value={props.value}>{props.value}</button>
    </div>
  )
}
