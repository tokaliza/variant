import React from "react";
import {useState} from "react";

function Data(props) {
    let [data, setData] = useState(props.data.img);
    let [newData, setNewData] = useState(props.newData.img);

    const change = () => {
        setData(props.newData.img);
    }

    return (
        <div>
            <div>
                <h1>Data Component</h1>
                <div>{data}</div>
                <button onClick={change}>+</button>
            </div>
        </div>
    );
}

export default Data;
