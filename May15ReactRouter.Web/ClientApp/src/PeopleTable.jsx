import React from 'react';
import PersonRow from './PersonRow';
import axios from 'axios';
import { Link } from 'react-router-dom';


class PeopleTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        },
        currentPersonId: ''
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get('/api/peoplecars/getallpeople');
        const people = response.data;
        this.setState({ people });
    }

    render() {
        const { people } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>

                <Link to={`/addpersonform`}>
                    <button className="btn btn-success btn-lg w-100">Add Person</button>
                </Link>
                <br />
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(p => <PersonRow
                            key={p.id}
                            person={p}
                            amountOfCars={p.cars.length}
                        />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;
