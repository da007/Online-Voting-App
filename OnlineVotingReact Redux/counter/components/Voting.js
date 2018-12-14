import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
var fig=0;



class Voting extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    	trumph:this.props.votingfinaldetails.trumph,
    	clinton:this.props.votingfinaldetails.clinton,
    	tP:this.props.votingfinaldetails.tP,
    	cP:this.props.votingfinaldetails.cP,
    	toVote: false
    }

   
	//this.onVoting = this.onVoting.bind(this);   
	
	
  }


componentWillUpdate(){
	
	
	console.log("lllll",this.state.tP);
}

 onVoting(a){
  	
  	

  	
  	if(a=="trumph"){
  		var total1= (this.state.trumph+1)+(this.state.clinton);
  		this.setState({
  				trumph:this.state.trumph+1,
  				toVote:true,tP:Math.round(((this.state.trumph+1)/total1)*100)+"%",
  				cP:Math.round(((this.state.clinton)/total1)*100)+"%"
  			})


  	}
  	else{
  		var total2= (this.state.trumph)+(this.state.clinton+1);
  		this.setState({
  			clinton:this.state.clinton+1,
  			toVote:true,cP:Math.round(((this.state.clinton+1)/total2)*100)+"%",
  			tP:Math.round(((this.state.trumph)/total2)*100)+"%"})
  	}
  }
  
 


  logoutfun(){
    this.props.voteLogout();
     this.props.votingFinal(this.state.trumph,this.state.clinton,this.state.tP,this.state.cP);
  	browserHistory.push('home');

  }
  
   render() {
   
   console.log(this.state.trumph);
    console.log("asdjh",this.props);
    console.log("hi",this.props.voternamedetails.username);
   
      return (
         <div>
         	
         		<p className="uwelcome">Welcome <span className="uname">{ this.props.voternamedetails.username }</span></p>
         		<div className="VotingSelection">
         			<div className="trumph ">
         				<img src="../assets/images/trumph.jpg"  alt="trumphimage" />
         				<button type="button" disabled={this.state.toVote} className="btn btn-primary btn-block btn-lg" onClick={this.onVoting.bind(this,"trumph")}>Vote</button>
         			</div>
         			<div className="barName">
	         			<label className="progTrumph">TRUMPH</label>
	         			<label className="progTrumph">CLINTON</label>
	         		</div>
         		
         			<div className="bar">
         		
	         			<div className="progress">
	  						<div className="progress-bar" role="progressbar" aria-valuenow="70"
	  							aria-valuemin="0" aria-valuemax="100" style={{width:this.state.tP}}>
	    						{this.state.tP}
	  						</div>
	         			</div>

	         			<div className="progress">
	  						<div className="progress-bar" role="progressbar" aria-valuenow="70"
	  						aria-valuemin="0" aria-valuemax="100" style={{width:this.state.cP}}>
	    						{this.state.cP}
	  						</div>
	         			</div>
         		
         			</div>
         			<div className="clinton">
         		 		<img src="../assets/images/clinton.jpg"  alt="clintonimage"/>
         		 		<button type="button" disabled={this.state.toVote} className="btn btn-primary btn-block btn-lg" onClick={this.onVoting.bind(this,"clinton")}>Vote</button>
         			</div >
         			<button onClick={this.logoutfun.bind(this)} className="logout btn btn-success btn-lg">Logout</button>
         		</div>
         		
         		<div className="clear"></div>
         		
         		
         		

         		
         		
         		
         </div>
      );
   }
}




export default Voting;