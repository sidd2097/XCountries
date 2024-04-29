import React from 'react';

const CountryItem = ({country}) => {
    const {name, flags} = country;

    return (
        <div className='country-item'>
            <img src={flags.svg} alt={name.common}></img>
            <p>{name.common}</p>
        </div>
    )
}

export default CountryItem;