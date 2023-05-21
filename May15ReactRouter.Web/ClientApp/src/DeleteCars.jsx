import React from 'react';

export default function DeleteCars(cars, onDeleteCarsClick ) {
    return (
        <>
            <div classNameName="row mt-5">
                <div className="col-md-12">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars.map(c => <CarRow
                                    key={c.id}
                                    car={c}
                                />)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Are you sure you want to delete all of these cars?</h3>
                </div>
                <div className="col-md-6" style="margin-top: 20px;">
                    <Link to={`/`} style="text-decoration: none;">
                        <button className="btn btn-primary btn-lg w-100">No</button>
                    </Link>
                </div>
                <div className="col-md-6" style="margin-top: 20px;">
                    <button onClick={onDeleteCarsClick} className="btn btn-danger btn-lg w-100">Yes</button>
                </div>
            </div>

        </>
    )
}