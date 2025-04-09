
// import React, { useState,useEffect,useRef } from 'react'
// /*
// useref kesei bhi dom element ko refrence sey access karne k liye use hota hai
// ye kesei bhi elemnt ka direct reference deta hai jesei input, button, div, span etc.
// main fanda ye hey key es sey elemt state kei tarhan bar bar re render nahi hota
// es only refrence  key liye use karo or bas
// */



// const Usereff = () => {
//     const [current, setcurrent] = useState('')
//     const prev = useRef('')

//     // useEffect(() => {
//     //     prev.current = current
//     // }, [current])

//     // const add = () => {
//     //     refinput.current.focus()
//     //     refinput.current.value = "hello"
//     // }
//     return (
//         <div>
//             <input type="text" className='input' value={current} onChange={(e) => setcurrent(e.target.value)} />
//             {/* <button type='submit' onClick={add} className='btn btn-primary'>focus</button> */}

//             <p>prev : {prev}</p>
//             <p>current : {current}</p>
//         </div>
//     )
// }

// export default Usereff

import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const Useref = () => {
    const [inputVel, setVel] = useState('b')
    const refrenceOfval = useRef('a')

    useEffect(() => {
        refrenceOfval.current = inputVel
    }, [inputVel])

    return (
        <div>
            <h5>using use ref</h5>
            <input type="text" value={inputVel} onChange={e => setVel(e.target.value)} className='input' />
            <p>current value : {inputVel}</p>
            <p>previus value : {refrenceOfval.current}</p>
        </div>
    )
}

export default Useref
