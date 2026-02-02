
import { useState } from "react";

function App(){
const [showMore,setShowMore]=useState(false)

const viewMore=()=>{
  setShowMore(true)
}
const viewLess=()=>{
  setShowMore(false)
}
const fSize={fontSize:"24px",color:"red"}
const ffSize={fontSize:"24px",color:"green"}

  return(
<div>
<span style={!showMore ? (fSize):(ffSize)}>Lorem ipsum dolor acceler </span>

{!showMore&&(
<span style={{cursor:"pointer"}} onClick={viewMore}>...View More</span>
)}

{showMore&&(
  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni
     ad commodi libero perferendis officia perspiciatis quam,
     sapiente a dignissimos, obcaecati vero quasi quidem sint suscipit
      repudiandae at repellendus error!
     </span>
)}

{showMore&&(
  <span style={{cursor:"pointer"}} onClick={viewLess}>...View Less</span>
)}

  </div>

)}
export default App;



// import { useState } from "react";

// function App(){
//   const [showMore,setShowMore]=useState(false)
//   const handleClick= () => {
//     setShowMore(true)
//   }

//   return(

//     <div className="div">
//         <span>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, aut.
//         </span>

//       {!showMore &&
//            <button onClick={handleClick}>...View More</button>
//       }

//       {showMore&&
//       <span>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia aut fugit non voluptates dolor deleniti 
//         ab quaerat necessitatibus. Molestias, velit facere. Suscipit quis numquam itaque ipsum nulla, officia necessitatibus 
//         laboriosam soluta,nam modi quas aut id nemo ipsa qui dolor est reiciendis placeat impedit vitae sequi? Quia, reiciendis eos.
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias provident cupiditate dicta vel soluta? Perferendis 
//         architecto nobis vitae animi aut tenetur illum fuga facere culpa repudiandae, commodi eum accusamus!
//         <button onClick={() => {setShowMore(false)}}>...show less</button>
//       </span>
//       }



//     </div>
//     )}

// export default App;






// import { useState } from "react";

// function App() {
//   const [view, setView] = useState(false)

//   return (
//     <>
//       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolore maxime dignissimos debitis</span>
//       {!view && (
//         <span style={{ cursor: "pointer",fontSize:"24px" }} onClick={() => setView(true)}>...view more</span>
//       )}

//       {view && (

//         <span>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//           temporibus! Architecto nobis provident mollitia esse illum quidem quod, cupiditate consequuntur
//           perferendis minima incidunt optio est quam expedita quas fuga officia!
//         </span>
//       )}
//       {view &&
//         <span style={{ cursor: "pointer" ,fontSize: "24px"}} onClick={() => setView(false)}>...view less</span>}
      
//     </>

//   )
// };

// export default App;