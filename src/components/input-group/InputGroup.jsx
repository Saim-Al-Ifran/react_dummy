import React from 'react'

const InputGroup = (props) => {
       const{type,id,text} = props;
       
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'.5rem',
        marginBottom:'1rem'
  }}
  >
      <label
      style={{
         fontFamily:'Arial',
         fontSize:'1rem',
         color:'#424242',
         fontWeight:'bold'  
      }}
      htmlFor={type}
      >
      {text}
      </label>
      <input
       type={type}
       id={id}
       style={{
            padding:'.5rem 1rem',
            outline:'none',
            border:'1px solid #ddd',
            borderRadius:'0.15rem',
            fontFamily:'Arial',
            fontSize:'.9rem',
            color:'#666' 
      }}
      />
  </div>
  )
}

export default InputGroup;