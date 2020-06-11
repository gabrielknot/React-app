import React from 'react'

export default (props)=>{

    return(
        <div>
            {React.Children.map(props.children,i=>{
                return React.cloneElement(i,props)
            })
        }
        </div>
    )
}