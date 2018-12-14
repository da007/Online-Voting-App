import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import validateInput from '../validations/signupValidation.js';



class SignupForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  isValid(){
    const{ errors, isValid } = validateInput(this.state);
    
    if(isValid){
      
      this.props.signup(this.state.username,this.state.password);
    }
      else{
      this.setState({errors});
    }
    return isValid;
  }

  signIn(e){

    e.preventDefault();
    
    
    //console.log("bbbb",this.props);
    if(this.isValid()){
     
      this.setState({ errors: {} });
       browserHistory.push('login');
    }
    console.log(this.state);
  }
   render() {
    
    const { errors } = this.state;
      return (
         <form >
          <h1>Join Our Community!</h1>

          <div className={classnames("form-group",{ 'has-error': errors.username })}>
            <label className="control-label">Username</label>
            <input
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
            />
            {errors.username && <span className="help-block">{errors.username}</span>}
          </div>

          <div className={classnames("form-group",{ 'has-error': errors.email })}>
            <label className="control-label">Email</label>
            <input
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
            />
             {errors.email && <span className="help-block">{errors.email}</span>}
          </div>

          <div className={classnames("form-group",{ 'has-error': errors.password })}>
            <label className="control-label">Password</label>
            <input
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
            />
             {errors.password && <span className="help-block">{errors.password}</span>}
          </div>

          <div className={classnames("form-group",{ 'has-error': errors.passwordConfirmation })}>
            <label className="control-label">Password Confirmation</label>
            <input
              value={this.state.passwordConfirmation}
              onChange={this.onChange}
              type="password"
              name="passwordConfirmation"
              className="form-control"
            />
             {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg" onClick={this.signIn.bind(this)}>Sign Up</button>
          </div>
         </form>

      );
   }
}


export default SignupForm;