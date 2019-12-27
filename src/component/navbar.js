import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = (props) =>{
    return(
           <React.Fragment>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/create">Create</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/logout">Log_out</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/delete">Delete</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">My Token id :{props.toNavbar}</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
           </React.Fragment>
    )
}
export default Navbar;