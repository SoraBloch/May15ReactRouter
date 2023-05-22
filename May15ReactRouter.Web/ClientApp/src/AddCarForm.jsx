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
        const {data} = await axios.get(`/api/peoplecars/getpersonbyid?personId=${id}`);
        this.setState({ person: data, car: { personId: id } });
    }
   
    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }

    onAddCarClick = async () => {
        await axios.post('/api/peoplecars/addcarforperson', this.state.car);
        this.props.history.push('/');
    }

    render() {
        const { make, model, year } = this.state.car;
        const { firstName, lastName } = this.state.person;
        return (
            < div className="row" >
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2>Add a Car for {firstName} {lastName}</h2>
                    <input type="text" onChange={this.onTextChange} value={make} className="form-control" name="make" placeholder="Make" />
                    <br />
                    <input type="text" onChange={this.onTextChange} value={model} className="form-control" name="model" placeholder="Model" />
                    <br />
                    <input type="text" onChange={this.onTextChange} value={year} className="form-control" name="year" placeholder="Year" />
                    <br />
                    <button onClick={this.onAddCarClick} className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>
        )

    }
}

export default AddCarForm;