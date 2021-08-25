import React from "react";
import {NavLink} from 'react-router-dom'
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    );
}

const mapDispatchToprops = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
 
export default connect(null,mapDispatchToprops)(SignedInLinks);