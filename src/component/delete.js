import React from 'react';
import Navbar from './navbar';
import Axios from 'axios';

class Delete extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                userId:this.props.match.params.id,
                userData: [],
                userDel: ''
        }
    }
    componentDidMount(){
        Axios.get('https://reqres.in/api/users/'+ this.state.userId)
        .then(response => {
            //console.log(userData.response.data.data.id)
            this.setState({userData:response.data.data})
        })
        
    }
    delUser = () =>{
        //console.log('clicked')
        Axios.delete('https://reqres.in/api/users/' + this.state.userId)
        .then(response => {
            //console.log(response.status)
            this.setState({userDel: response.status})
        })
    }
    
    render(){
        //console.log(this.state.userData)
        //console.log(this.state.userDel)
        return(
            <React.Fragment>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-5">
                        <div class="card">
                            <img src={this.state.userData.avatar} class="card-img-top w-20 h-20" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Full Name : {this.state.userData.first_name} {this.state.userData.last_name}</h5>
                               <button className="btn btn-primary" onClick={this.delUser}>Delete me now</button>
                               <h4>Delted status: {this.state.userDel}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
}
export default Delete;