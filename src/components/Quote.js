import React from 'react';

const Quote = (props) => (
    <div className="quote">
        <p id="quote-text"
            className="quote__text"
            style={{ color: props.color }}
        >
            "{props.quote}"
        </p>
        <p
            className="quote__author"
            style={{ color: props.color }}
        >
            {props.author}
        </p>
    </div>
);


export default Quote;