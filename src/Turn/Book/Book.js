import React from 'react';
import './Book.css';



const Book = ({ title, handleClick }) => {
  return (
    <div onClick={ () => handleClick( title ) } className="answer" >
      <p>{title}</p>
    </div>
  );
}

export default Book;