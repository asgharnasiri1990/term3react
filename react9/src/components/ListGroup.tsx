import { useState } from "react";

function ListGroup() {
    let items = ['NYc', 'LA', 'Tokyo', 'London', 'Tehran']
    const [selectedIndex, setselectedIndex] = useState(-1)

    return (
        <>
            <h1>List:</h1>
            <ul className="list-group">

                {items.length === 0 && <h2>Nothing to render</h2>}

                {items.map((item, index) => (
                    <li
                        className={selectedIndex == (index) ? "list-group-item active" : "list-group-item"}

                        key={item}

                        onClick={() => { setselectedIndex(index) }}>
                        {item}</li>
                ))}
            </ul >

        </>
    );
}


export default ListGroup;