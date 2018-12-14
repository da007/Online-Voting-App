import votingfinal from '../data/voterfinalData.js';

let voterfinalReducer=(state=votingfinal,action)=> {
	console.log("state3",state);
	if(action.type=="final")
	{
		/*let dummyarray;
		dummyarray={
			trumph:action.trumph,
			clinton:action.clinton,
			tP:action.tP,
			cP:action.cP
			
		};

		state=dummyarray;
		console.log("final",state);
		return state;*/
		return Object.assign({}, state, {
      	    trumph:action.trumph,
			clinton:action.clinton,
			tP:action.tP,
			cP:action.cP
      })
		
	}
	return state;
}

export default voterfinalReducer;