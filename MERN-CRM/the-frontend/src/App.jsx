import React from 'react'
import Header from './components/Header'
import Sidebar from "./components/Sidebar";
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <>
      <Header />
      {/* <div className='flex justify-between'> */}
        <Sidebar />
        <Dashboard />
      {/* </div> */}
    </>
  )
}

export default App