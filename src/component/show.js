import React from 'react';
import Navbar from './navbar';
import Axios from 'axios'

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId:this.props.match.params.id,
            userData: []

        }
    }

    componentDidMount(){
        Axios.get('https://reqres.in/api/users/'+ this.state.userId)
        .then(response => {
            //console.log(response.data.data)
            this.setState({userData: response.data.data})
        })
        
    }
     
    render(){
        console.log(this.state.userData)
        return(
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-5">
                            <div class="card">
                                <img src={this.state.userData.avatar} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Full Name : {this.state.userData.first_name} {this.state.userData.last_name}</h5>
                                    <p class="card-text">Email : {this.state.userData.email}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Show;