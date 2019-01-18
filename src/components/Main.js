import React, { Component } from 'react'
import Routes from "../Routes";


class Main extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isAuthenticated: true
        };
        }
        
    userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
    }

    render(){
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return <Routes childProps={childProps}/>
    }
}

export default Main;