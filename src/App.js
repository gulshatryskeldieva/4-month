import React from "react";

function  Welcome(props) {
        return <h1>Привет , {props.name}</h1>;
    }

 function App() {
     return(
         <div>
             <Welcome name="Argen"/>
             <Welcome name="Sara"/>
             <Welcome name="Cara"/>
         </div>
     );
 }

 export default App;
