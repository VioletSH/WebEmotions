import React from 'react'

const Message = ({ bg = 'light', color = 'white', children }) => (
  <div className={`my1 p1 h5 bg-${bg} ${color} rounded`}>{children}</div>
)

export default Message
