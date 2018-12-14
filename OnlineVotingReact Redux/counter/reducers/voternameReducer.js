import votername from '../data/voternameData.js';

let voternameReducer=(state=votername,action)=> {
	console.log("state2",state);
	if(action.type=="voting")
	{
		/*let dummyarray;
		dummyarray={
			username:action.username
			
		};

		state.push(dummyarray);
		console.log("votestate",state);
		return state;*/
		return Object.assign({}, state, {
        username: action.username
      })
	}
	if(action.type=="logout")
	{
		
		console.log("hello")
		return Object.assign({}, state, {
        username:""
      })
	}
	
	return state;
}

export default voternameReducer;
