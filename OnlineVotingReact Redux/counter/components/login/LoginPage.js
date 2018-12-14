import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import LoginForm from './LoginForm.js';

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    
  }
   render() {
    console.log("hello",this.props);
    //const { votername } = this.props;
      return (
         <div className="row">
         	<div className="col-md-4 col-md-offset-4" >
         		<LoginForm signupProps={this.props} votername={this.props.votername}/>
         	</div>
         </div>
      );
   }
}

export default LoginPage;