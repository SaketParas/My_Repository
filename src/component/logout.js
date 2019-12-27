import React from 'react';
import Navbar from './navbar';

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
         <div>
             <Navbar/>
                <div className="container">
                    <h4 className="center">Logout</h4>
                    <p>this is Logout page</p>
                </div>
         </div>
        )
    }
}
export default Logout;