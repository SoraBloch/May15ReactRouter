import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CarRow from './CarRow'

class DeleteCars extends React.Component {
    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecars/getallcarsforperson?personId=${id}`);
        console.log(data);
        this.setState({ cars: data, currentPersonId: id });
    }

    onDeleteCarsClick = async () => {
        const { id } = this.props.match.params;
        console.log(id)
        await axios.post(`/api/peoplecars/deletecarsforperson?personId=${id}`);
        this.props.history.push('/');
    }

    render() {
        const { cars } = this.state;
        return (
            <>
                <div className="row mt-5">
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
                    <div className="col-md-6" style={{marginTop: 20}}>
                        <Link to={`/`}>
                            <button className="btn btn-primary btn-lg w-100">No</button>
                        </Link>
                    </div>
                    <div className="col-md-6" style={{marginTop: 20}}>
                        <button onClick={this.onDeleteCarsClick} className="btn btn-danger btn-lg w-100">Yes</button>
                    </div>
                </div>

            </>
        )
    }
}

export default DeleteCars;