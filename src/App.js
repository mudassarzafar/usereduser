import {useReducer} from "react"

function handleCounter(counter,action){
  switch (action.type) {
    case "increment":
      return counter=counter+1;
    case "decrement":
        return counter-=1;
        
      
  
    default:
      return ("error")
      
  }
}

function App() {
  const [counter, dispatch] = useReducer(handleCounter,0);

  return (
    <div>
        <button onClick={()=>{
          dispatch({type:"increment"})
        }}>increment</button>
        <button onClick={()=>{
          dispatch({type:"decrement"})
        }}>decrement</button>
        <div>{counter}</div>
    </div>
  );
}

export default App;
