import React from 'react';

import {ColorContext} from './RouteComponent';

class SecondChild extends React.Component{
    render(){
        console.log('inside second child',ColorContext);
        return(
            <div>
            <ColorContext.Consumer>
              {value => <h1>Hi I am inside SecondChild and the color is =={value}</h1>}
            </ColorContext.Consumer>
            </div>
        )
    }
}
export default SecondChild;