import React from "react";

const Products = (props) => {
    return (
        <div  className="card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <h3>{props.price}</h3>

        </div>
    );
}

export default Products;