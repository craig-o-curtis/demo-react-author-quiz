import React from 'react';
import Form from 'react-jsonschema-form';

// config for react-jsonschema-form Form cmp
const schema = {
  "title" : "Identity",
  "type" : "object",
  "required" : [
    "firstName",
    "lastName"
  ],
  "properties" : {
    "firstName" : {
      "type" : "string",
      "title" : "First Name",
      "minLength" : 1,
      "maxLength" : 6
    },
    "lastName" : {
      "type" : "string",
      "title" : "Last Name",
    },
    "age" : {
      "type" : "number",
      "title" : "Age",
    }
  }
}

const CommentForm = () => {
  return (
    <Form schema={schema} noHtml5Validate onSumbit={console.log} showErrorList={false} />
  );
}

export default CommentForm;