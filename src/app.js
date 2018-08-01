// rootComponent

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let routeArr = [];
for (var i = 0; i < routes.length; i++) {
    // console.log('routes9999999',routes);
    routeArr.push(
        <Route key={i} exact path={routes[i].path} component={routes[i].component} />
    );
}
console.log('routes array', routeArr);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Link to='/'>User</Link>|
                    <Link to='/pizza'>Pizza</Link>
                    {routeArr}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;