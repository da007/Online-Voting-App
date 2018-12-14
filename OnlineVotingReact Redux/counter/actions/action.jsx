export let signup = (username,password)=>{
	
	return{
		type: 'signup',
		username:username,
		password:password
	};
}

export let votername = (username)=>{
	
	return{
		type: 'voting',
		username:username
		
	};
}

export let voteLogout = ()=>{
	
	return{
		type: 'logout',
		
		
	};
}

export let votingFinal = (trumph,clinton,tP,cP)=>{
	
	return{
		type: 'final',
		trumph:trumph,
    	clinton:clinton,
    	tP:tP,
    	cP:cP,
		
		
	};
}