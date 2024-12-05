import React from 'react'

interface Childprops{
    name? :string;
    age?:number;
    country?:string;
}
const Child = ({name, age, country}:Childprops) => {
    
  return (
    <div>
      {name && <h3 className='text-4xl bg-fuchsia-900'>Name: {name}</h3>}
      {age && <h3 className='text-4xl bg-fuchsia-900'>Age: {age}</h3>}
      {country && <h3 className='text-4xl bg-fuchsia-900'>Country: {country}</h3>}
    </div>
  )
}

export default Child