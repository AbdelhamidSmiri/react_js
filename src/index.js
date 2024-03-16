import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './test/test';
import reportWebVitals from './reportWebVitals';
import Inputs from './Forms/Inputs';
import List from './Lists/List';
import Counter from './State/Counter';
import Buttons from './Events/Buttons';
import FormsUser from './Forms/FormsUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsarray = ['Strawberry', 'orange', 'apple', 'citron', 'lemon'];
root.render(
  <React.StrictMode>
    <Test lastname='Abdelhamid' />
    <Inputs />
    <Counter />
    {/* <List fruits={fruitsarray} />
    <Buttons />
    
    <FormsUser /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
