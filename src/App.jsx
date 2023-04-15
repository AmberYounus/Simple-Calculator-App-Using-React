import React from 'react';
import {add,sub,mult,div} from './Calc';
import './index.css';

function App(){
return(
  <>
  <h1 id='calc'>Calculator</h1>
  <ul>
    <li>Addition of two number is {add(20,2)}</li>
    <li>Subtraction of two number is {sub(210,2)}</li>
    <li>Multiplication of two number is {mult(80,2)}</li>
    <li>Division of two number is {div(81,2)}</li>
    </ul>
    </> 
);
 }
 export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
