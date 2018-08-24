import React from 'react';

import './Book.css';

const Book = ({ title, onClick }) => {
  return (
    <div className="answer" onClick={() => {onClick(title) }} >
      <p>{title}</p>
    </div>
  );
}

export default Book;