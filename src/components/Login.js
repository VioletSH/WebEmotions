import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codigo: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.codigo.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
     (this.state.codigo == 1234 && this.state.password == "1234") ? this.setLoged(): alert('credenciales incorrectas');;
  }
  setLoged(){
    this.props.userHasAuthenticated(true);
    this.props.history.push("/emotions");
}
  render() {
    console.log(this.props);
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
        <h1>Violet <span>AR</span></h1>
          <FormGroup controlId="codigo" bsSize="large">
            <ControlLabel>Código</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              value={this.state.codigo}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Contraseña</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}