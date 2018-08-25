import React from 'react';

const Continue = ({show, onContinue}) => {
  return (
    <div className="row continue d-flex">
      { show 
      ? <div className="col-11 d-flex justify-content-end">
          <button className="btn btn-lg btn-primary" onClick={onContinue} >Continue</button>
        </div>
      : null }
    </div>
  );
}

export default Continue;