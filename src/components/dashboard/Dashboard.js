import React,{Component} from 'react'
import Notificatons from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect}from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
    render(){
        const {projects,auth,notofications} = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notificatons notofications={notofications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        projects: state.firestore.ordered.projects || state.project.projects,
        auth: state.firebase.auth,
        notofications:state.firestore.ordered.notofications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects',orderBy: ['createdAt','desc']},
        {collection:'notifications',limit:3,orderBy: ['time','desc']}
    ])
)(Dashboard)