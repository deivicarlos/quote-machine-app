import React from 'react';

const Quote = (props) => (
    <div className="quote">
        <p id="quote-text" className="quote__text">"{props.quote}"</p>  
        <p id="quote-author" className="quote__author">{props.author}</p>  
    </div>
);


export default Quote;