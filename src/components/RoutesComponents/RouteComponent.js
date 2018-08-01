import React from 'react';
import FirstChild from './FirstChildComponent';

const ColorContext = React.createContext('light');

export  class RouteComponent extends React.Component{
    state={
        show:false
    }
    handleClick=()=>{
        this.setState({show:true});
    }
    render(){
        console.log('inside route component dom');
        return(
            <ColorContext.Provider value="red">
            <div>
                <h1>Hello there, checking Route</h1>
                <span onClick={this.handleClick}>
                  Click Here to show FirstChild  {this.state.show === true ? <FirstChild/>:null}
                </span>
            </div>
            </ColorContext.Provider>
        )
    }
}
export { ColorContext}
