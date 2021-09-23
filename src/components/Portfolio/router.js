import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom';
import AppDeve from './AppDeve';
import Graphics from './Graphics'
import Web from './web'


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Web} />
                <Route exact path='/app' component={AppDeve} />
                <Route exact path='/graphics' component={Graphics} />

            </Router>
        )
    }
}


export default AppRouter; 