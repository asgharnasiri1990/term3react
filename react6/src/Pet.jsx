const Pet = (props) => {

    return (

        <div className="div">

            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h2>{props.breed}</h2>
            {props.adopted}

            <p>{props.adopted ? "✅Adopted" : "❌Not Adopted"} </p>

        </div>
    )
}

export default Pet;