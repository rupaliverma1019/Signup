import React, { useState } from 'react';
import './App.css';

const Hook = () => {
const [length , setLength] = useState(5);
const[number , setNumber] = useState(false);
const[character , setCharacter ] = useState(false)

  return (
    <div>
      <h1 className='heading'>Password Generator</h1>

      <div className='container'>
        <div className='container2'> 
        <input type='text' />
        <button>Copy</button>
    </div>
        <div className='container2'>
            <label>  
             <input type='range' />Length
            </label>

       
        <label>
          <input type='checkbox' /> Numbers
        </label>
        <label>
          <input type='checkbox' /> Characters
        </label>
        </div>
      </div>
    </div>
  );
};

export default Hook;
