import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [state, setstate] = useState("Website mey state menage karney key liye use hota hey variable kei tarha data store karta hey")
    const [effct, seteffct] = useState("Website mey koi kam bydefaut karney ya side effect menage karney key liye use hota hey jesy api fetch and call, database update etc")
    const [add, setAdd] = useState(0)
    useEffect(() => {
        console.log("render")
    }, [])
    return (
        <div className='mt-5'>
            <hr />
            <h1 className='text-2xl text-red-600'>Hooks</h1>

            {/* useState */}
            <h1 className=''>UseState : {state}</h1>
            <h1 className=''>UseEffect : {effct}</h1>

            <button onClick={(e) => setAdd(add + 1)} className='btn'>add</button>
        </div>
    )
}

export default Hooks