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
        searchBox: ''
    }

    componentDidMount = async () => {
        await this.refreshPeople();
    }

    refreshPeople = async () => {
        const response = await axios.get('/api/peoplecars/getallpeople');
        const people = response.data;
        this.setState({people});
    }

    onClearSearchBoxClick = () => {
        this.setState({ searchBox: '' })
        this.refreshPeople();
    }

    onSearchBoxTextChange = (e) => {
        this.setState({ searchBox: e.target.value });
        const { people } = this.state;
        const filteredPeople = people.filter(p => p.firstName.includes(e.target.value) || p.lastName.includes(e.target.value));
        this.setState({ people: filteredPeople });
    }

    render() {
        const { people, searchBox } = this.state;
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-10">
                        <input onChange={this.onSearchBoxTextChange} type="text" className="form-control form-control-lg" placeholder="Search People" value={searchBox} />
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.onClearSearchBoxClick} className="btn btn-dark btn-lg w-100">Clear</button>
                    </div>
                </div>

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
                            currentPersonId={p.id}
                            amountOfCars={p.cars.length}
                        />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PeopleTable;

