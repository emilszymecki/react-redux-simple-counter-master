import * as React from 'react';

const ResetCounter = (props) => {
  return (
    <div>
    	<button type="button" onClick={() => props.reset() }>Click Me!</button>
    </div>
  );
}

export default ResetCounter;
