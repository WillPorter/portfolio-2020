import React from 'react';

const FolioCard = (props) => {
    return(
        <>
            <div className="foliocard">
                <button className="foliocard">
                    <div className="foliocard__title">
                        {props.title}
                    </div>
                    <div className="foliocard__image">
                        {props.image}
                    </div>
                    <div className="foliocard__description">
                        {props.description}
                    </div>
                </button>
            </div>
        </>
    ) 
}

export default FolioCard;