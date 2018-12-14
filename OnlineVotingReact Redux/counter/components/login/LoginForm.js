import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import validateInput from '../validations/loginValidation.js';


var user=[];
var user1=[];
var flag=0;
class LoginForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},

      
    }
    this.onChange = this.onChange.bind(this);
    
  }

  onChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

isValid(){
    const{ errors, isValid } = validateInput(this.state);

    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  }

  logIn(e){
    e.preventDefault();


    if(this.isValid()){
       user=this.props.signupProps.signupdetails;
           console.log("looo",user);
           for(var i=0;i<user.length;i++){
            if((this.state.username==user[i].username)&&(this.state.password==user[i].password)){
               flag=0;
              
             browserHistory.push('vote');
              this.props.votername(this.state.username);
              break;
        }
        else
        {
          flag=1;
        }
        }
        if(flag==1)
        {
          alert("check ur credentials");
        }
          
      this.setState({ errors: {} });
        }
    }

   
  
   render() {
    console.log("login",this.props.signupProps.signupdetails);
    const { errors } = this.state;
      return (
         <form >
          <h1>Enter Login Details</h1>

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

         

          <div className="form-group">
            <button className="btn btn-primary btn-lg" onClick={this.logIn.bind(this)}>Login</button>
          </div>
         </form>

        
      );
   }
}

export default LoginForm;