import React from 'react'

const Button = (props) => {
    const {type=null,text,color} = props;
  return (
    <>
    <button
     type={type}
     style={{
        background:color,
        outline: 'none',
        border: 'none',
        padding: '7px 11px',
        borderRadius: '7px',
        color: 'white',
        marginRight:'5px',
        cursor:'pointer'
    }}
    >
        {text}
    </button>
    
    </>
  )
}

export default Button;