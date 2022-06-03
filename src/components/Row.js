import React from 'react';
import { Link } from 'react-router-dom';
import './Row.css';

const Row = (props) => {
    const [rowClass, cellClass] =
        props.description == null
            ? ['nearby-row', 'nearby-cell']
            : ['list-row', 'list-cell'];
    const detailed = `${props.number}, ${props.street}, ${props.city}, ${props.zip} `;

    return (
        <div className={rowClass}>
            <span className={cellClass}>
                <Link to={`/details/${props.id}`}>{props.name}</Link>
            </span>

            <span className={cellClass}>
                <Link to={`/details/${props.id}`}>
                    {props.description || detailed}
                </Link>
            </span>
        </div>
    );
};

export default Row;
