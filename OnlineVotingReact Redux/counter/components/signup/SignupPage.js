import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


import SignupForm from './SignupForm.js';




class SignupPage extends React.Component {
  constructor(props){
    super(props);

    
  }
   render() {
    const { signup } = this.props;
      return (
         <div className="row">
         	<div className="col-md-4 col-md-offset-4" >
         		<SignupForm signup={this.props.signup} />
         	</div>
         </div>
      );
   }
}



export default SignupPage;