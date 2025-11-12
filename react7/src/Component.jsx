import React from "react";

const Component = (props) => {
    return (
        <div  className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>

        </div>
    );
}

export default Component;