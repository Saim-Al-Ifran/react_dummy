import React from 'react';

const Section = (props) => {

        const {title,description} = props;
        const listItems = description.map((item)=> <li>{item}</li>);
  return (
      <>
          <h1>{title}</h1>
          <ul>
               {listItems}
          </ul>
      </>
  )
}

export default Section