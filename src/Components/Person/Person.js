import React from 'react';

const person = (props) => {

    return (
        <div>
            <h1>La persona es {props.name} y su edad es {props.age}</h1>
            <p>{props.children}</p>
        </div>

    );

}
export default person