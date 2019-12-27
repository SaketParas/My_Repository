import React from 'react';
import Navbar from './navbar';
import Axios from 'axios';

class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            full_name:'',
            job:'',
            userId: this.props.match.params.id,
        }
    }
    componentDidMount(){
        Axios.get('https://reqres.in/api/users/'+ this.state.userId)
        .then(response => {
            //console.log(userData.response.data.data.id)
            this.setState({full_name: response.data.data.first_name, job: response.data.data.job})
        })
        
    }
    userInputChange = (userInput) => {
        this.setState({[userInput.target.name] : userInput.target.value})
    }
    userSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        //console.log(this.state)
       Axios.put('https://reqres.in/api/users/' + this.state.userId,{
           name: this.state.full_name,
           job: this.state.job
       })
       .then(Response => {
           console.log(Response)
       })  
       this.props.history.push('/show/' + this.state.userId)
    }
    
    render(){
        console.log(this.state.userId)
        return(
            <React.Fragment>
               <Navbar />
               <h3>Edit Page</h3>
               <div className="container w-50 mt-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <form className="mt-5" onSubmit={this.userSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Full Name" name="full_name" value={this.state.full_name} onChange={this.userInputChange} required/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Job</label>
                                    <input type="text" class="form-control" placeholder="Job" name="job" value={this.state.job} onChange={this.userInputChange} required/>
                                </div>
                                  <button type="submit" class="btn btn-danger font-weight-bolder btn-lg">Create Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Edit