import { useState } from "react";

function App() {
  const [view, setView] = useState(false)

  return (
    <>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore maxime dignissimos debitis</span>
      {!view && (
        <span style={{ cursor: "pointer" }} onClick={() => setView(true)}>...view more</span>
      )}

      {view && (

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          temporibus! Architecto nobis provident mollitia esse illum quidem quod, cupiditate consequuntur
          perferendis minima incidunt optio est quam expedita quas fuga officia!
        </span>
      )
      }
    </>

  )
};

export default App;