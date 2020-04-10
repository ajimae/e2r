// import react library
import * as React from 'react';

// style
import './Spinner.scss';

const Spinner = (props) => {
  return (
    <div className={`spinner ${props.size ? props.size : ''}`} />
  );
};

export default Spinner;
