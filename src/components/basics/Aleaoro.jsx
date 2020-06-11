import React from 'react'

export default props =>{
    const aleatorio=parseInt(Math.floor(Math.random() *
    (props.segundo-props.primeiro))+ props.primeiro )
    var parOuImpar= aleatorio%2 ? 'impar':'par';
    return(
    <>
        {aleatorio}
        <p>{parOuImpar}</p>
    </>
    )
}



