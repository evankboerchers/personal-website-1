import { queryByTitle } from '@testing-library/dom';
import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

function Quote() {
    const [quote, setQuote] = React.useState("Quote");
    const [author, setAuthor] = Raact.useState("Author");

    return (
        <div>
            <Typography>
                {quote}
            </Typography>
        </div>
    );
}

export default Quote;
