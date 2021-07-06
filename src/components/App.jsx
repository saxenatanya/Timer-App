import React,{useState} from "react";

function App() {
  let rightNow = new Date().toLocaleTimeString();
  const [time,setTime] = useState(rightNow);
  function getTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
// setInterval(getTime,1000)
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
