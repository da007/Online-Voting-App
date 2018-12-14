import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from './actions/action.jsx';
import App from './components/App.js';



function mapStateToProps(state){
	console.log("state",state);
	return{
		signupdetails:state.signupReducer,
		voternamedetails:state.voternameReducer,
		votingfinaldetails:state.voterfinalReducer
		
	}
}

function mapDispachToProps(dispatch){

	return bindActionCreators(action,dispatch);
}

const Appmodule=connect(mapStateToProps,mapDispachToProps)(App);

export default Appmodule;


