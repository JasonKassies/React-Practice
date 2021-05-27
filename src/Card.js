import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={'https://robohash.org/${props.id}/set_set4?size=200x200'}/>
            <diov>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </diov>
        </div>
    );
}

export default Card;