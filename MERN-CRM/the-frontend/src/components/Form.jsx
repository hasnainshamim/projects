import React from 'react'
import { useState,useContext } from 'react'
import {counterContext} from './Context'

const Form = () => {
    const [name, setname] = useState({})
    const [textareavalue, settextareavalue] = useState("iam text area value")
    const counter = useContext(counterContext)
    let selectValue = ''

    const userInfo = (e) => {
        const userName = e.target.name;
        const userValue = e.target.value;
        setname({ ...name, [userName]: userValue })
        // console.log(name)
    }

    const AddUser = (e) => {
        e.preventDefault()
        alert(`Hello ${name.username}`)
    }
    const Selectuser = (e) => {
        selectValue = e.target.value
        console.log(selectValue)
    }

    return (
        <div>
            <h1>Crazy App Contact Form{counter}</h1>
            <form onSubmit={AddUser}>
                <label htmlFor="Name" >Full Name</label><br />
                <input
                    name='username'
                    type="text"
                    className='input'
                    value={name.userName}
                    // onChange={(e) => setname(e.target.value)} add single value in input
                    onChange={userInfo} // add multiple value in input
                /> <br /><br />
                <textarea value={textareavalue} onChange={(e) => settextareavalue(e.target.value)} cols="30" rows="10" className='textarea' placeholder='Enter your message here...'>
                    {/* value or onchange event is most important in react tabels text area or selct */}
                </textarea> <br /><br />
                <select
                    // value={selectValue}
                    onChange={Selectuser}
                    className='select'

                >
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                    <option value="grape">Grape</option>
                    <option value="kiwi">Kiwi</option>
                </select><br /><br />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Form