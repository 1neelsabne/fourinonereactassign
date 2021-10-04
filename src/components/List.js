import React, { Component } from 'react'

//Importing Child Component

import ListDetails from './ListDetails';

//Employee Name Array Object

const emp = [
    { first: 'Neel', last: 'Sabne', eid: '101', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Ayesha', last: 'Bangi', eid: '102', dep: 'Software Developer', email: 'ayesha.bangi@neosoftmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Pooja', last: 'Warekar', eid: '103', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Bilal', last: 'Khatik', eid: '104', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Vaishnavi', last: 'Bhalange', eid: '105', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Dhananjay', last: 'Gavade', eid: '106', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Aditya', last: 'Bora', eid: '107', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Shubham', last: 'More', eid: '108', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Komal', last: 'Bhandare', eid: '109', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Minal', last: 'Kamble', eid: '110', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Kunal', last: 'Mhaske', eid: '111', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Sairaj', last: 'Sawant', eid: '112', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Anushka', last: 'Bansal', eid: '113', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Rahul', last: 'Ghosh', eid: '114', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Kashyap', last: 'Patel', eid: '115', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Gaurav', last: 'Patil', eid: '116', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Pune' },
    { first: 'Gopal', last: 'Rajput', eid: '117', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Sandesh', last: 'Umathe', eid: '118', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Gaurav', last: 'Chouhan', eid: '119', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Noida' },
    { first: 'Piyusha', last: 'Patel', eid: '120', dep: 'Software Developer', email: 'neelsabne_1@hotmail.com', phone: '8446542912', add: 'Mumbai' }
];

//Class Component

export class List extends Component {
    render() {
        return (

            //Rendering Child Component and Passing Parameters to Child 
            //i.e. ListDetails Using Props

            <div className="jumbotron">
                <ListDetails empDetail={emp} />
            </div>
        )
    }
}

//Exporting Class Component

export default List
