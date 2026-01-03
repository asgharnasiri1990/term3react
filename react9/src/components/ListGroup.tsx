import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from "styled-components";

interface ListItemProps {
    active: boolean;
}

const List = styled.ul`
    list-style: none;
    padding: 0;
    `;

const ListItem = styled.li<ListItemProps>`
padding: 5px 0;
background: ${Props => Props.active ? "green" : "none"}
`

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {

    const [selectedIndex, setselectedIndex] = useState(0)
    
    return (
        <>
            <h1>{heading}</h1>

            <List>

                {items.length === 0 && <h2>Nothing to render</h2>}

                {items.map((item, index) => (

                    <ListItem
                        active={index === selectedIndex}
                        key={item}
                        onClick={() => {
                            setselectedIndex(index)
                            onSelectItem(item)
                        }}>


                        {item}

                    </ListItem>

                ))}
            </List >

        </>);
}
export default ListGroup;