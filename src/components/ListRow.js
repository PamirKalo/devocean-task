import React from 'react';
import { Link } from 'react-router-dom';
import './ListRow.css';

const ListRow = (props) => {
    return (
        <div className='list-row'>
            <span className='list-cell'>
                <Link to={`/details/${props.id}`}>{props.name} </Link>
            </span>
            <span className='list-cell'>
                <Link to={`/details/${props.id}`}>{props.description} </Link>
            </span>
        </div>
    );
};

export default ListRow;
