import React from 'react';
import { Link } from 'react-router-dom';

const NearbyRow = (props) => {
    return (
        <div>
            <Link to={`/details/${props.id}`}>
                <span>{props.name}</span>
                <span>{props.number}</span>
                <span>{props.street}</span>
                <span>{props.city}</span>
                <span>{props.zip}</span>
            </Link>
        </div>
    );
};

export default NearbyRow;