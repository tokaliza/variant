import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Count from './Components/Count';
import Data from './Components/Data';
import MouseOver from './Components/MouseOver';
import img1 from './Assets/allium.jpeg';
import img2 from './Assets/angelonia.jpeg';
import reportWebVitals from './reportWebVitals';

let data = {
    number : 1,
    name: 'Allium',
    img: <img src={img1} alt='flowerAllium'/>
        }

let newData = {
    number : 5,
    name: 'Angelonia',
    img: <img src={img2} alt='flowerAngelonia'/>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App />
        <Count data={data}/>
        <Data data={data} newData={newData}/>
        <MouseOver />
    </div>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
