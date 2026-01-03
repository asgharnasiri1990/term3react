import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from "styled-components";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {

    const [selectedIndex, setselectedIndex] = useState(-1)


    return (
        <>
            <h1>{heading}</h1>

            <ul className={[styles.listGroup,styles.container].join(' ')}>

                {items.length === 0 && <h2>Nothing to render</h2>}

                {items.map((item, index) => (

                    <li
                        className=
                        {selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => {
                            setselectedIndex(index)
                            onSelectItem(item)
                        }}>


                        {item}

                    </li>
    
                ))}
            </ul >

        </>);
}
export default ListGroup;