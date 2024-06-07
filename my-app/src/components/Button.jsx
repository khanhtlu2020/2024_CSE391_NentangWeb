// import React from 'react';
// import '../bootstrap/dist/css/bootstrap.css';

// function Button(props) {
//     return (
//         <button type="button" className="btn btn-primary btn-sm" onClick={props.onClick}>
//             {props.text}
//         </button>
//     );
// }

// export default Button;

import React from 'react';
import '../bootstrap/dist/css/bootstrap.css';

function Button(props) {
    return (
        <button
            type="button"
            className={`btn ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}

export default Button;


