// rootComponent

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routes from './routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import classes from './App.css';

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
        const logo="./assets/favicon.ico"
        return (
            <MuiThemeProvider>
                <div className={classes.App}>
                    <header className={classes.App_header}>
                        <img src={logo} className={classes.App_logo} alt="logo" />
                        <h1 className={classes.App_title}>Welcome to React</h1>
                    </header>
                    <div style={{marginTop:15,marginBottom:0}}>
                    <Link to='/'>User</Link>|
                    <Link to='/pizza'>Pizza</Link>
                    {routeArr}
                    </div>
                    {/* <footer >
                        <h4 >inside footer</h4>
                    </footer> */}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;