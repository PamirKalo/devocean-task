import React, { Fragment } from 'react';
import NearbyRow from './NearbyRow';

const Details = (props) => {
    const { business, nearby } = props;
    const { image, address, email, phone } = business;
    const nearbyPlaces = nearby.map((el) => {
        return (
            <NearbyRow
                key={el.id}
                id={el.id}
                name={el.name}
                number={el.address.number}
                street={el.address.street}
                city={el.address.city}
                zip={el.address.zip}
            />
        );
    });

    return (
        <Fragment>
            <section>
                <img src={image} alt='business' />
                <div>
                    <h3>Address</h3>
                    <div>
                        {address.number} {address.street}
                    </div>
                    <div>
                        {address.city} {address.zip}
                    </div>
                    <h3>Contact</h3>
                    <div>
                        {phone} {email}
                    </div>
                    <h3>Nearby Places</h3>
                    <div>{nearbyPlaces}</div>
                </div>
            </section>
        </Fragment>
    );
};

export default Details;
