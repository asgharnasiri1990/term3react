import Pet from "./Pet"
import "./App.css";

const App = () => {
  return (

    <div>

      <h1>Adopt me!</h1>

      <Pet name="Luna" animal="Dog" breed="Havanese" adopted={true} />
      <Pet name="Pepper" animal="Bird" breed="cocktile" adopted={false} />
      <Pet name="Doink" animal="Cat" breed="mixed" adopted={true} />

    </div>
  )
}

export default App;
