import React from 'react';
import { Link } from 'react-router-dom';

const ListRow = (props) => {
    return (
        <div>
            <Link to={`/details/${props.id}`}>
                <span className='name'>{props.name}</span>
                <span className='description'>{props.description}</span>
            </Link>
        </div>
    );
};

export default ListRow;
