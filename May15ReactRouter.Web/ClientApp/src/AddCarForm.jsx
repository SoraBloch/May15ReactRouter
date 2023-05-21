import React from 'react';
import axios from 'axios';


class AddCarForm extends React.Component {
    state = {
        person: {
            firstName: '',
            lastName: '',
        },
        car: {
            make: '',
            model: '',
            year: '',
            personId: 0
        }
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/people/getpersonbyid?personid=${id}`);
        this.setState({ person: data, car: { personId: id } });

    }

    onTextChange = e => {

        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }

    onAddCarClick = async () => {
        await axios.post('/api/people/addcar', this.state.car);
        this.props.history.push('/');
    }

    render() {
        const { make, model, year } = this.state.car;
        return (
            < div className="row" >
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2>Add a Car for {firstName} {lastName}</h2>
                    <input type="text" onChange={this.onTextChange} value={make} className="form-control" name="make" placeholder="Make" value="" />
                    <br />
                    <input type="text" onChange={this.onTextChange} value={model} className="form-control" name="model" placeholder="Model" value="" />
                    <br />
                    <input type="text" onChange={this.onTextChange} value={year} className="form-control" name="year" placeholder="Year" value="" />
                    <br />
                    <button onClick={this.onAddCarClick} className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>
        )

    }
}

export default AddCarForm;