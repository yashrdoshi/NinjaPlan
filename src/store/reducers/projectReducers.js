const initState = {
    projects : [
        {id:1,title:'NinjaPlan',content:'something....'},
        {id:2,title:'Yelpcamp',content:'something....'},
        {id:3,title:'BrewCrew',content:'something....'},
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Created Project',action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Create Project error',action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;