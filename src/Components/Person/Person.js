import React from 'react';

const person = (props) => {

    return (
        <div>
            {/* //onClick can call to a function of App. If that function is sent in props */}
            <h1 onClick={props.funtionClick}>La persona es {props.name} y su edad es {props.age}</h1>
            <p >{props.children}</p>
        </div>

    );

}
export default person