import React from 'react';
import './App.css';
import Component1 from './components/Component1';

const App = () => {
  /* const name = 'vonn'
  const age = 30;
  const email = 'vonn@yahoo.com' */

  /* const arr = [1,2,3,4,5] */
  
  const name ='vonn';
  const age = 35;
  const email = 'vonnvonn@gmail.com'
  

  /* const show = () => {
    console.log('Hello');
  }
 */


  return (
    <main>
     <h1>Welcome to React</h1>
      <Component1 name={name} age={age} email= {email} />
     {/* <Component1 arr={arr} obj={obj} show= {show} /> */}
     
    </main>
  );
}

export default App;

