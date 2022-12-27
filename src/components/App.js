import React from 'react'
import { useState } from 'react';

import '../styles/App.css';

const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}

const year = Object.keys(data);
console.log(year);

const App = () => {

  const [yearState, setYearstate] = useState("");

  function changeYear(e) {
    setYearstate(e.target.value);
  }


  return (
    <div id="main">

      <select onChange={changeYear}>
        <option value={null}></option>
        {
          year.map((element, index) => {
            return <option value={index} key={element} >{element}</option>
          })
        }
      </select>
      <div id='selected-year'>
        {yearState == "" ? `No year selected` : `Selected year-${year[yearState]}`}
      </div>
      <ul>
        {
          yearState != "" ?
            data[year[yearState]].map((element) => {
              return <li key={element}>{element}</li>
            })
            :
            null
        }
      </ul>
    </div >
  )
}


export default App;
