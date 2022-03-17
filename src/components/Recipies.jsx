import React, { useState } from 'react'

const Recipies = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(x => x + 1)}>Click</button>
    </div>
  )
}

export default Recipies