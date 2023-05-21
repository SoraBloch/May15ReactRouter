import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import PeopleTable from './PeopleTable';
import AddPersonForm from './AddPersonForm';
import AddCarForm from './AddCarForm';
import DeleteCars from './DeleteCars';


const App = () => {
    return (
            <Layout>
                <Route exact path='/' component={PeopleTable} />
                <Route exact path='/addpersonform' component={AddPersonForm} />
                <Route exact path='/addcarform/:id' component={AddCarForm} />
                <Route exact path='/deletecars/:id' component={DeleteCars} />
            </Layout>
    )
}

export default App;