import React, { useState } from 'react'

const Demo = React.memo(({ count }) => {
  console.log("first CMP Rerander")
  return <h1>Iam Demo Cmp {count ? count : "empty !"}</h1>
})

/* 
use memo aike heigh order component hey es ka use render performance ko better karney key liye use hota hey
ye bilavaja render honey valey component ko nahi render hone deta hey
ye sirf tab hei kesei component ko render karta  hey jab os key props change hotey hey
*/

const Memo = () => {
  const [count, setcount] = useState(0)
  const [input, setinput] = useState('')
  return (
    <div>
      <hr className='mt-4'/>
      <h1>Memo</h1>
      <Demo count={count} />
      <button type='submit' onClick={() => setcount(count + 1)} className='btn'>incre</button>

      <input
        type="text"
        value={input.length > 0 ? input : "no value"}
        className="input"
        onChange={(e) => setinput(e.target.value)}
      />

      
    </div>
  )
}

export default Memo