import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import ListRow from './ListRow';

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
            <section>
                <h3>'BusinessDirectory'</h3>
                {loading === true ? 'Loading...' : rows}
            </section>
        </Fragment>
    );
};

export default List;
