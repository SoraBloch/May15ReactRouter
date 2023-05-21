import React from 'react';
import { Link } from 'react-router-dom';

function CarRow({ make, model, year }) {
    return (
        <tr>

            <td>{make}</td>
            <td>{model}</td>
            <td>{year}</td>
        </tr>
    )

}

export default CarRow;