import { useState } from "react"
import React from "react"

export default function Home() {
  //usestate for number changes
const [counter, setcount] = useState (10)
const increase = () => {
  setcount(counter+1)
}
const decrease = () => {
  setcount(counter-1)
}

//usestate for entry update
const [text, setText] = useState ("how you doin?")
const textfill = (e) => {
  setText(e.target.value)
}

//usestate for toggle action
const [isvisible, setVisibility]=useState(false)

const visibility =()=>{
  setVisibility(!isvisible)
}

// word length usestate
const [test, settest] = useState("")
  const Counte=(e)=>{
    settest(e.target.value)
  }

  return (
    <main>
      <button onClick={increase} className="border-2 rounded-full w-20">increase</button>
      <div id="counter">{counter}</div>
      <button onClick={decrease} className="border-2 rounded-full w-20">decrease</button><br/>


      <input type="text" value={text} onChange={textfill}/>
      <p>{text}</p>

      <button onClick={visibility}>show/hide</button>
      {isvisible&&<p>toggle!</p>}

      <textarea name="event" id="text" onChange={Counte}/>
      <p>{test.length}</p>
        <form className="flex flex-col">Email:<input placeholder="Enter email"/>
        <br/>Password: <input placeholder="Enter password"/>
        <button>Signup</button>
        </form>
    </main>
  );
}

