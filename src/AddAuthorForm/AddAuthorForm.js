
import React from 'react';

const AddAuthorForm = ({match}) => {
  return (
    <div>
      <h1>Add Author</h1>
      <p>{ JSON.stringify(match) }</p>
    </div>
  );

}

export default AddAuthorForm;