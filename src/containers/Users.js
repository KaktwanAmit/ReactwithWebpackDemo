import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {history} from 'react-router-dom';

class Users extends Component {

    _routeComponent=()=>{
        console.log('inside route Component 1',this.props);
        this.props.history.push('/checkRoute');
    }
    render(){
        return(
            <div>
                <h1>The Users</h1>
                <p>Awesome Users using this!!!</p>
                <p>Click on pizza to go on Pizza page!!!</p>

                <Button variant="outlined" color="primary" onClick={this._routeComponent} >
                       Go to route Component
                    </Button>
            </div>
        )
        return(
            <div>
                <h1>hi this is second return</h1>
            </div>
        )
        
    }
    render(){
        return(
            <div>
                <h1>The Users</h1>
                <p>Awesome Users using this!!!</p>
                <p>Click on pizza to go on Pizza page!!!</p>

                <Button variant="outlined" color="primary" onClick={this._routeComponent} >
                       Go to route Component
                    </Button>
            </div>
        )
        return(
            <div>
                <h1>hi this is second return</h1>
            </div>
        )
    }
}

export default Users;