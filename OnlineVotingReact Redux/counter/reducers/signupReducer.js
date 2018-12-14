import signup from '../data/signupData.js';

let signupReducer=(state=signup,action)=> {

	if(action.type=="signup")
	{
		let dummyarray;
		dummyarray={
			username:action.username,
			password:action.password
		};

		state.push(dummyarray);
		console.log("reduceState",state);
		return state;
	}
	
	return state;
}

export default signupReducer;
