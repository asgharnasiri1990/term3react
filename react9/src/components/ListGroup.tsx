function ListGroup() {
    const items = ['NYc', 'LA', 'Tokyo', 'London', 'Tehran']
    return (
        <>
            <h1>List:</h1>
            <ul className="list-group">
                {items.length === 0 && <h2>Nothing to render</h2> }
                {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </>
    );
}


export default ListGroup;