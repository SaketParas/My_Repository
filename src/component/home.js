import React from 'react';
import Navbar from './navbar';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData: []
        }
    }
    componentDidMount(){
        Axios.get('https://reqres.in/api/users?page=1')
        .then(response => {
            console.log(response.data.data)
            this.setState({userData: response.data.data})
        })
        
    }
    render(){
        console.log(this.props.passingData)

        var showUser = this.state.userData.map(eachUser => {
            return(
                <tr>
                   
                    <Link to={`/show/ ${eachUser.id}`} scope="row">{eachUser.id}</Link>
                    <td>{eachUser.first_name}</td>
                    <td>{eachUser.last_name}</td>
                    <td>{eachUser.email}</td>
                   <td> <Link to={`/edit/ ${eachUser.id}`}>Edit Me</Link></td>
                   <td> <Link to={`/delete/ ${eachUser.id}`}>Delete Me</Link></td>
                </tr>
            )
        })
        return(
          <React.Fragment>
              <Navbar toNavbar={this.props.passingData}/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <table class="table table-bordered mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {showUser}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
          </React.Fragment>
        )
    }
}
export default Home;