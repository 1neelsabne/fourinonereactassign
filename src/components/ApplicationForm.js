import React, { Component } from 'react'

// Regular expressions for Validations

const regForName = RegExp(/[A-Z][a-z]*.{3,}/);
const regForAge = RegExp(/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/);
const regForPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
const regForAadhaar = RegExp(/^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/);
const regForPan = RegExp(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
const regForAdd = RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/);
const regForCountry = RegExp(/[A-Z][a-z]*.{4,}/);
const regForCity = RegExp(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/);
const regForSate = RegExp(/[A-Z][a-z]+(?: +[A-Z][a-z]+)*/);
const regForZip = RegExp(/^(\d{4}|\d{6})$/);
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForUname = RegExp(/^[a-z0-9_.]+$/);
const regForPass = RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/);

// Class Component

export class ApplicationForm extends Component {

    //Class Constructor and Sate Data

    constructor(props) {
        super(props);
        this.state = {
            // items: [],
            pass: null,
            errors: {
                fname: '',
                lname: '',
                mname: '',
                age: '',
                phone: '',
                aadhaar: '',
                pan: '',
                add: '',
                country: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                uname: '',
                pass: '',
                cpass: '',
                fail: ''
            }
        };
    }

    //onChange Event Handler with validation handling

    onChangeUser = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'fname':
                errors.fname = regForName.test(value) ? '' : 'Name starts with capital letter and length must be > 3, it does not include any numbers and symbols.';
                break;
            case 'lname':
                errors.lname = regForName.test(value) ? '' : 'Name starts with capital letter and length must be > 3, it does not include any numbers and symbols.';
                break;
            case 'mname':
                errors.mname = regForName.test(value) ? '' : 'Name starts with capital letter and length must be > 3, it does not include any numbers and symbols.';
                break;
            case 'age':
                errors.age = regForAge.test(value) ? '' : 'Age should be a number and in between 1 to 99';
                break;
            case 'mobile':
                errors.phone = regForPhone.test(value) ? '' : 'Phone should be a number, and should be starting with 6/7/8/9, and must be a 10 digit, kindly dont include +0 or +91 country codes'
                break;
            case 'aadhaar':
                errors.aadhaar = regForAadhaar.test(value) ? '' : 'Aadhaar no should be of 12 digit and must start with 2 to 9 and include (space) after 4 digit';
                break;
            case 'pan':
                errors.pan = regForPan.test(value) ? '' : 'Pan no should be of 10 places, First 5 places are letters and Second 4 places are digits and third 1 place is a letter';
                break;
            case 'add':
                errors.add = regForAdd.test(value) ? '' : 'Address does not include any special characters except , . \' -';
                break;
            case 'country':
                errors.country = regForCountry.test(value) ? '' : 'Country Name starts with capital letter and length must be > 4, it does not include any numbers and symbols.';
                break;
            case 'city':
                errors.city = regForCity.test(value) ? '' : 'City name does not include any numbers and special characters';
                break;
            case 'state':
                errors.state = regForSate.test(value) ? '' : 'State name does not include any numbers and special characters';
                break;
            case 'zip':
                errors.zip = regForZip.test(value) ? '' : 'ZipCode must be 4 or 6 digit and only have a numbers';
                break;
            case 'email':
                errors.email = regForEmail.test(value) ? '' : 'Email Id is not valid';
                break;
            case 'uname':
                errors.uname = regForUname.test(value) ? '' : 'Username can only have: lowercase letters, numbers, dots, underscores';
                break;
            case 'pass':
                errors.pass = regForPass.test(value) ? '' : 'Password must be 8 - 16 characters long and only have :  at least a symbol, upper and lower case letters and a numbers';
                break;
            case 'cpass':
                errors.cpass = (this.state.pass === value) ? '' : 'Password does not match, type same password';
                break;
            default:
                alert('Some fields are not declared..');
        }
        this.setState({ [name]: value });
    }

    //onClick Event Handler with Error Handling

    onSubmitButton = (event) => {
        event.preventDefault();
        event.target.reset();
        // let { items, email, pass, city, state, zip } = this.state;

        if (this.validate(this.state.errors)) {
            alert("Form is valid and submitted successfully!");
            // this.setState({
            //     items: [...items, { email: email, pass: pass, city: city, state: state, zip: zip }]
            // });
        }
        else {
            alert("Invalid Form, try again !!");
        }


    };

    //Validating input Lengths

    validate = (errors) => {
        let valid = true;
        Object.values(errors).forEach((val) => val.length > 0 && (valid = false));

        return valid;
    }

    //Rendering Contents on React (Displaying) 

    render() {

        return (
            <>
                <div className="jumbotron text-left">
                    <h3><center>Application Form</center></h3>
                    <hr />
                    {/* Form Control with Grid System*/}

                    <form onSubmit={this.onSubmitButton}>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputFname">First Name</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-user-edit"></i></span>
                                        <input type="text" className="form-control" id="exampleInputFname" aria-describedby="emailHelp" placeholder="Enter your first name" name="fname" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.fname}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputLname">Last Name</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-user-edit"></i></span>
                                        <input type="text" className="form-control" id="exampleInputLname" aria-describedby="emailHelp" placeholder="Enter your last name" name="lname" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.lname}</small>
                                </div>
                            </div>


                            <div className="form-row">
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputMname">Middle Name</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-user-edit"></i></span>
                                        <input type="text" className="form-control" id="exampleInputMname" aria-describedby="emailHelp" placeholder="Enter your middle name (optional)" name="mname" onChange={this.onChangeUser} />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.mname}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputAge">Age</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-calculator"></i></span>
                                        <input type="text" className="form-control" id="exampleInputAge" aria-describedby="emailHelp" placeholder="Enter your age" name="age" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.age}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputMobname">Mobile No</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-mobile"></i></span>
                                        <input type="text" className="form-control" id="exampleInputMobname" aria-describedby="emailHelp" placeholder="Enter your mobile no." name="mobile" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.phone}</small>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col mb-3">
                                    <label htmlFor="gen">Gender</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-venus-mars"></i></span>
                                        <select className="form-control" id="gen" defaultValue={""} required>
                                            <option value="" disabled>Select your gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.state}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="ms">Marital Status</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-people-arrows"></i></span>
                                        <select className="form-control" id="ms" defaultValue={""} required>
                                            <option value="" disabled>Select your marital status</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                        </select>
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.state}</small>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputAdhaar">Aadhaar No</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-id-card"></i></span>
                                        <input type="text" className="form-control" id="exampleInputAdhaar" aria-describedby="emailHelp" placeholder="Enter your aadhaar no." name="aadhaar" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.aadhaar}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputPan">Pan No</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-id-card"></i></span>
                                        <input type="text" className="form-control" id="exampleInputPan" aria-describedby="emailHelp" placeholder="Enter your pan no." name="pan" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.pan}</small>
                                </div>

                            </div>


                            <div className="form-row ">
                                <div className="col mb-3">
                                    <label htmlFor="exampleFormControlTextarea1">Address</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-map-marked-alt"></i></span>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Enter your address" name="add" onChange={this.onChangeUser} required></textarea>
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.add}</small>
                                </div>
                            </div>

                            <div className="form-row">

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault02">Country</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-globe-asia"></i></span>
                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Country" name="country" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.country}</small>
                                </div>

                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault03">State</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-place-of-worship"></i></span>
                                        <input type="text" className="form-control" id="validationDefault03" placeholder="State" name="state" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.state}</small>
                                </div>


                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault04">City</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-city"></i></span>
                                        <input type="text" className="form-control" id="validationDefault04" placeholder="City" name="city" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.city}</small>
                                </div>


                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault05">Zip</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-map-pin"></i></span>
                                        <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" name="zip" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.zip}</small>
                                </div>
                            </div>

                            <div className="form-row">

                                <div className="col mb-3">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-envelope"></i></span>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.email}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputUsername">User name</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-at"></i></span>
                                        <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Set User name" name="uname" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.uname}</small>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-key"></i></span>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="pass" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.pass}</small>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="exampleInputCPassword1">Confirm Password</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-key"></i></span>
                                        <input type="password" className="form-control" id="exampleInputCPassword1" placeholder="Confirm Password" name="cpass" onChange={this.onChangeUser} required />
                                    </div>
                                    <small id="emailHelp" className="form-text text-danger font-italic">{this.state.errors.cpass}</small>
                                </div>
                            </div>
                        </div>



                        <div className="form-check ">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.onChangeUser} required />
                            <label className="form-check-label" htmlFor="exampleCheck1">I agree to the terms & conditions and privacy policy </label>
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary">Submit</button> &nbsp;&nbsp;
                        <button type="reset" className="btn btn-danger">Reset</button>

                    </form>
                    <hr />
                    <br />

                    {/* Social Media Login */}

                    <div className="text-center">
                        <i className="fab fa-facebook" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                        <i className="fab fa-twitter" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                        <i className="fab fa-google-plus" style={{ fontSize: '30px' }}></i> &nbsp;&nbsp;
                        <i className="fab fa-pinterest" style={{ fontSize: '30px' }}></i>
                    </div>
                </div>
            </>
        )
    }
}

export default ApplicationForm


