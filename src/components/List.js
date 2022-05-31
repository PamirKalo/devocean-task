import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ListRow from './ListRow';
import './List.css';

const List = () => {
    const [catalog, loading] = useSelector((store) => [
        store.businesses.catalog,
        store.businesses.loading,
    ]);

    const rows = catalog.map((el) => {
        return (
            <ListRow
                key={el.id}
                name={el.name}
                description={el.description}
                id={el.id}
            />
        );
    });

    return (
        <Fragment>
            <div className='list'>
                <div className='list-row'>
                    <span className='list-header-cell'>NAME</span>
                    <span className='list-header-cell'>DESCRIPTION</span>
                </div>
                {loading === true ? 'Loading...' : rows}
            </div>
        </Fragment>
    );
};

export default List;
