import { useState } from "react"

const Student = (props) => {
    const [Likes, setLikes] = useState(0)

    const increaseLikes = () => (
        setLikes(Likes + 1)
    )
    
    return (
        <div className="card">
            <img src={props.photo} alt="" />
            <h3> Name: {props.name} </h3>
            <h4>Age:  {props.age}</h4>
            <h4>Degree:  {props.degree}</h4>
            <p>Exam: {props.passed ? "✅Paased" : "❌Failed"}</p>
            <button onClick={increaseLikes}>Likes:{props.button} {Likes}</button>

        </div>
    )
}
export default Student;