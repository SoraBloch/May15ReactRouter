import React from 'react';
import { Link } from 'react-router-dom';

function PersonRow({ id, firstName, lastName, age, amountOfCars }) {
    return (
        <tr>

            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{amountOfCars}</td>
            <td>
                <Link to={`/addcarform/${id}`}>
                    <button  className="btn btn-warning">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/deletecars/${id}`}>
                    <button className="btn btn-warning">Delete Cars</button>
                </Link>
            </td>
        </tr>
    )

}

export default PersonRow;