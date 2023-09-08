import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { incriment,decriment } from '../action';
function Redux() {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
  return (
    <div>
    
    
    <h1>counter app using redux</h1>
      {count}
      <div className='d-flex justify-content-around'>
        <button onClick={()=>dispatch(decriment())}>decrement</button>
        <button onClick={()=>dispatch(incriment())}>incriment</button>
      </div>
      </div>
  )
}

export default Redux