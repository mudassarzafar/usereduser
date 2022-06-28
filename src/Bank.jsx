import React, { useReducer } from 'react'
function handleamount(amount,action){
switch (action.type) {
    case "Addamount":
        return amount=amount+action.payload;
        
        case "Withdraw":
        return amount=amount-action.payload;

    default:
        return("Error")
        break;
}
}



const Bank = () => {
    const[amount,dispatch]=useReducer(handleamount,0)
  return (
    <div>
        <h1>Bank Account</h1>
        <button onClick={()=>
        {
         dispatch(
            {
                type:"Addamount",
                payload:5
            })
        }}>Add amount</button>
        <button onClick={()=>
        {
         dispatch({
            type:"Withdraw",
            payload:5
        
        })
        }}>Withdraw</button>
        <div>
            {amount}
        </div>
    </div>
    
  )
}

export default Bank