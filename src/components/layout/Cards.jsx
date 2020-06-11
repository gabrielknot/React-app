import './Cards.css'
import React from 'react'

export default (props)=>{
    const cardStyle = {
        backgroundColor: props.color||'#F83',
    }
    return(
        <div className='Card' style={cardStyle}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>{props.children}</div>
        </div>
    )
}