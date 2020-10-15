import React from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const contact = (props) => {
    const {route} = props;
    console.log(route);
    
    return(
    <>
        <h1>This is the contact page</h1>
        <ImagePlaceholder key={{route}} />
    </>
)
}

export default contact;