import React, { Fragment } from 'react';
import Row from './Row';
import './Details.css';

const Details = (props) => {
    const { business, nearby } = props;
    const { image, address, email, phone } = business;

    const nearbyPlaces = nearby.map((el) => {
        return (
            <Row
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
            <section className='details-section'>
                <div className='details'>
                    <div
                        className='details-image'
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                    {/* <div className='details-info'> */}
                    <div className='details-address'>
                        <h3>Address</h3>
                        <br />
                        <span>
                            {address.number} {address.street}
                        </span>
                        <br />
                        <span>
                            {address.city}, {address.zip}
                        </span>
                    </div>
                    <div className='details-contacts'>
                        <h3>Contact</h3>
                        <br />
                        <span>{phone}</span>
                        <br />
                        <span>{email}</span>
                    </div>
                    <div className='details-nearby-places'>
                        <h3>Nearby Places</h3>
                        <div className='nearby-table'>{nearbyPlaces}</div>
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </Fragment>
    );
};

export default Details;
