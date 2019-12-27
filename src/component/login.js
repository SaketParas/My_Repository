import React from 'react';
import Axios from 'axios';
import { Link, NavLink,} from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userToken:'',

        }
    }

    userInputChange = (userData) => {
        this.setState({[userData.target.name]:userData.target.value})
    }

    userSubmit = (inputSubmit) => {
        inputSubmit.preventDefault();
         Axios.post('https://reqres.in/api/login', {
            email: this.state.email,
            password: this.state.password
         })
         .then(response => {
             console.log(response.data.token)
             this.setState({userToken: response.data.token})
             this.props.giveToken(response.data.token)
        }) 
        this.props.history.push('/home')
    }
    render() {
        console.log(this.state.userToken)
        return (
            <React.Fragment>
                <div className="container w-50 mt-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <form className="mt-5" onSubmit={this.userSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.userInputChange} required/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.userInputChange} required/>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                  <button type="submit" class="btn btn-danger font-weight-bolder btn-lg">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
                        )
                    }
                
                }
export default Login