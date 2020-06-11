import React from 'react'

export default function Segundo(props){
    let Assinantes= props.assinantes
    function myLoop() {         //  create a loop function
        setTimeout(function() {
            
            Assinantes++;                    //  increment the counter
            if (Assinantes < 10000) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
    }, 3000)
}
    return (
    <div>
        <h6>assinantes:</h6>
        <div>{Assinantes}</div>
    </div> 
    )
}