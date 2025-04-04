import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
// import Sidebar from "./components/Sidebar";
// import Dashboard from './screens/Dashboard';
import Form from "./components/Form";
import Memoaization from "./components/Memo";
import Styling from './components/Styling';
import Hooks from './components/Hooks';
import { counterContext } from './components/Context';

const App = () => {
  // const [result, setresult] = useState([])
  const [brand, setbrand] = useState(["Planet", "1.0.0"])
  const [count, setCount] = useState(10)

  const [fruits, setfruits] = useState([])
  // const [fruits, setfruits] = useState(["apple", "banana", "orange", "grape", "kiwi"])
  // fruits.map((val, ind, arr) => {
  //   result.push(val)
  // })
  return (
    <>
      <counterContext.Provider value={count}>
        <Header brandname={brand} />
        {/* <div className='flex justify-between'> */}
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        {/* </div> */}
        {/* {
  fruits.length > 0 && <h1>You have {fruits.length} cars in your garage. </h1>
} */}
        {/* <div className="resul">{result ? result : "no result"}</div> */}


        {/* form in react */}
        <Form />
        <Memoaization />
        <Styling />
        <Hooks />
      </counterContext.Provider>
    </>
  )
}

export default App