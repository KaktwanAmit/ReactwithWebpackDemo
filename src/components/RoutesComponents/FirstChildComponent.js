import React from 'react';
import SecondChild from './SecondChildComponent';

class FirstChild extends React.Component{
    state={
        show:false
    }
    _handleClick=()=>{
        this.setState({show:true});
    }
    render(){
        console.log('inside first child component')
        return(
            <div>
                <h1>Hi I am inside FirstChild</h1>
                <span onClick={this._handleClick}>
                    click to show SecondChild 
                    {this.state.show === true ? <SecondChild/>:null}
                </span>
            </div>
        )
    }
}
export default FirstChild;