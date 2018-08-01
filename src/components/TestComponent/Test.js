import React, { Component } from 'react';
import classes from '../PizzaImage/PizzaImage.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { withRouter } from 'react-router-dom';

import Axios from 'axios';

import AutoComplete from 'material-ui/AutoComplete';
// import Select from 'react-select';
// import {withRouter,hashHistory } from 'react-router';

class Test extends Component {
    constructor(props) {
        super(props);
        // this.textInput=React.createRef();
    }

    state = {
        saying: '',
        preData: [],
        searchText: '',
        data: [{
            "id": 1,
            "name": "Miranda Holcomb",
            "age": 26,
            "gender": "female",
            "company": "NAXDIS",
            "email": "mirandaholcomb@naxdis.com",
            "phone": 9696286517
        },
        {
            "id": 2,
            "name": "Elinor Thind",
            "age": 25,
            "gender": "female",
            "company": "YURTURE",
            "email": "elinorthomas@yurture.com",
            "phone": 9150623495
        },
        {
            "id": 3,
            "name": "Johnson Gates",
            "age": 23,
            "gender": "male",
            "company": "SULFAX",
            "email": "johnsongates@sulfax.com",
            "phone": 9466449043
        },
        {
            "id": 4,
            "name": "Mavis Reilly",
            "age": 31,
            "gender": "female",
            "company": "MYOPIUM",
            "email": "mavisreilly@myopium.com",
            "phone": 9779690647
        },
        {
            "id": 6,
            "name": "Trujillo Barnett",
            "age": 37,
            "gender": "male",
            "company": "PLASMOS",
            "email": "trujillobarnett@plasmos.com",
            "phone": 9044468969
        }]
    }
    componentDidMount() {
        // Axios.get('http://localhost:3000/data').
        // then(res=>{
        //     console.log('response',res.data)
        //   let data=res.data;
        //     this.setState({preData:data});
        // });
        // console.log('dataaaaaaaaaaaaaaa',this.state.preData);
    }
    _demo = () => {
        console.log('inside demo function');
        // browserHistory.push('/table');
        this.props.history.push("/table");
    }

    // handleChange = name => event => {
    //     this.setState({
    //       [name]: event.target.value,
    //     });
    //   };
    focusTextInput = () => {
        this.refs.textInput.focus();
    }
    update = (e) => {
        //   this.setState({saying:this.refs.textInput.value});
        this.setState({ saying: e.target.value });
        console.log('this.textinput.value', this.refs.textInput.value);
    }
    handleUpdateInput = () => {
        //conditions////////////
        // this.setState({searchText:value});
        // console.log("searchText-------------",value);
    }
    handleNewRequest = (value) => {
        this.setState({ searchText: value });
    }

    render() {
        console.log('pre data', this.state.preData);
        return (
            <div className={classes.informationDiv}>
                <span>Hi there information</span>
                <div className={classes.buttonStyle}>
                    <Button variant="outlined" color="primary" onClick={this._demo} >
                        Open Table
                    </Button>
                    

                </div>
                <hr />
                <div style={{marginTop:30,marginBottom:30}}>
                    <form className={classes.formContainer} noValidate autoComplete="off">
                        <span>
                            <input
                                type="text"
                                ref="textInput"
                                onChange={this.update}
                            />
                        </span>
                        <span>
                            <input
                                type="button"
                                value="Focus the text input"
                                onClick={this.focusTextInput}
                            />
                        </span>{this.state.saying}
                    </form>
               </div>
               <hr/>
                <div style={{marginTop:30}}>
                    <AutoComplete
                        hintText="Type anything"
                        openOnFocus={true}
                        // searchText={this.state.searchText}
                        onUpdateInput={this.handleUpdateInput}
                        onNewRequest={this.handleNewRequest}
                        dataSource={this.state.data}
                        dataSourceConfig={{ text: 'name', value: 'name' }}
                        filter={(searchText, key) => searchText !== '' && key.indexOf(searchText) !== -1}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(Test);
//https://www.youtube.com/watch?v=jTOyO1EcjdE