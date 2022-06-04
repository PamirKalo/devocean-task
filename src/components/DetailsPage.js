import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loading from './Loading';
import Details from './Details';
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
    const [catalog, loading, failed] = useSelector((store) => [
        store.businesses.catalog,
        store.businesses.loading,
    ]);

    const params = useParams();
    const id = params.id;
    const business = catalog.find((b) => b.id === id);

    if (failed === true) {
        return <ErrorPage />;
    }

    let content = null;
    if (loading === true) {
        content = <Loading />;
    } else if (typeof business === 'undefined') {
        content = 'Missing Data';
    } else {
        const nearby = catalog.filter(
            (b) => b.address.city === business.address.city && b !== business
        );
        content = <Details business={business} nearby={nearby} />;
    }

    return <Fragment>{content}</Fragment>;
};

export default DetailsPage;
