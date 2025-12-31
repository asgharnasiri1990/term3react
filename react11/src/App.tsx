import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function App() {
    const [alertVisible, setAlerVisibility] = useState(false)

    return (
        <div>
            {alertVisible &&
                <Alert onClose={() => setAlerVisibility(false)}>
                    Alert</Alert>}

            <Button onClick={() => setAlerVisibility(true)}
                onClose={() => setAlerVisibility(false)} >
                OPEN Button
            </Button>

        </div>)
}

export default App;