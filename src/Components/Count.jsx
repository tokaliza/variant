import React from "react";
import {useState} from "react";
import img3 from '../Assets/aster.jpg';

function Count(props) {
    let [number, setNumber] = useState(props.data.number);
    let [name, setName] = useState(props.data.name);
    let [picture, setPicture] = useState(props.data.img);

    const change = () => {
        setNumber(number + 1);
        setName('Aster');
        setPicture(<img src={img3} alt='flowerAster'/>)
    }

    return (
        <div>
            <header>
                <p>{number}</p>
                <p>{name}</p>
                <div>{picture}</div>
                <button onClick={change}>+</button>
            </header>
        </div>
    );
}

export default Count;