import { useState } from "react";

interface Props { items: string[], heading: string }

function ListGroup({ items, heading }: Props) {

    const [selectedIndex, setselectedIndex] = useState(-1)

    return (
        <>
            <h1>{heading}</h1>

            <ul className="list-group">

                {items.length === 0 && <h2>Nothing to render</h2>}

                {items.map((item, index) => (

                    <li
                        className=
                        {selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => { setselectedIndex(index) }}>

                        {item}

                    </li>

                ))}
            </ul >
 
        </>);
}
export default ListGroup;