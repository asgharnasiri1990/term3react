
import "./App.css"
import Student from "./Student";
const App = () => {

  return (
    <div className="div">
      
      <Student photo="1.webp" name="Ali" age={21} passed={false} />

      <Student photo="3.webp" name="Hassan" age={19} degree="PHD" passed={true} />
      
      <Student photo="4.webp" name="Linda" age={23} degree="Bsc" passed={true} />

      <Student photo="5.webp" name="Armin" age={26} degree="MA" passed={false} />
    
      <Student photo="4.webp" name="Linda" age={23} degree="Bsc" passed={true} />

    </div>
  )
}
export default App;