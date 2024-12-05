import React from 'react'
import Child from './Child'

const Parent = () => {
    const name="Manahil";
    const age=22;
    const country="Hyderabad";
  return (
    <div className='mt-10'>
        <Child name={name}/>
        <Child age={age}/>
        <Child country={country}/>
    </div>
  )
}

export default Parent