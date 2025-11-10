const Job=(props) =>{
    return(

        <div>
            <h1>{props.position}</h1>
            <h2>{props.salary}</h2>
            <h2>{props.company}</h2>

        </div>
    );
};

export default Job;