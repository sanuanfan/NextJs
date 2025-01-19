import React from 'react'

type buttonType = {
    text: string;
}
const Button: React.FC<buttonType> = (props) => {
    return (
        <div className='btn btn-ghost'>
            {props.text}
        </div>
    )
}

export default Button
