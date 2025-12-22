import { useState } from "react";
import './List.css'
function Tab() {
    const [active, setActive] = useState("Signin")

    return (
        <div className="mainList">
            <button onClick={() => setActive("Signin")}>Sign in</button>
            <button onClick={() => setActive("Register")}>Register</button>


            {active === "Signin" && (
                <div className="Signin">
                    <h2>sign in:</h2>
                    <input placeholder="Enter your username " />
                    <input placeholder="Enter your Password " />
                    <button>Sign in</button>
                </div>
            )}

            {active === "Register" && (
                <div className="reg">
                    <h4>Fill in the form below:</h4>
                    <input type="text" placeholder="Enter your Full Name" />
                    <input type="text" placeholder="Enter your Phone Number" />
                    <input type="text" placeholder="Enter your Email" />
                    <input type="text" placeholder="Enter your referal" />
                    <input type="text" placeholder="Enter your " />

                    <button>register</button>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            )}


        </div>
    )
}

export default Tab;