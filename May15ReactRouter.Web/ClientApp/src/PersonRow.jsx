import React from 'react';
import { Link } from 'react-router-dom';

function PersonRow({ person, amountOfCars, currentPersonId }) {
    const { firstName, lastName, age } = person;

    return (
        <tr>

            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{amountOfCars}</td>
            <td>
                <Link to={`/addcarform/${currentPersonId}`}>
                    <button  className="btn btn-warning">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/deletecars/${currentPersonId}`}>
                    <button className="btn btn-warning">Delete Cars</button>
                </Link>
            </td>
        </tr>
    )

}

export default PersonRow;