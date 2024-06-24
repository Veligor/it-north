import React, {useState} from "react";


export default function News({
  status = 'error'
}) {
  // const [score, setScore] = useState(0);
  // // функция обновления 
  // function increment() {
  //   setScore(s => s + 1);
  // }
  // // setScore(score + 1);
  // return (
  //   <>
  //     <button onClick={() => increment()}>+1</button>
  //     <button onClick={() => {
  //       increment();
  //       increment();
  //       increment();
  //     }}>+3</button>
  //     <h1>Score: {score}</h1>
  //   </>
  // )
  
  if (status === 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea />
        <br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
  
  }
  
