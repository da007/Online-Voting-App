import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';

class Home extends React.Component {
   render() {
    if(this.props.votingfinaldetails.trumph>this.props.votingfinaldetails.clinton){
      
     
      var tc=this.props.votingfinaldetails.trumph-this.props.votingfinaldetails.clinton;
      var t="Trumph leads Clinton by " + tc;
    }
    else if(this.props.votingfinaldetails.clinton>this.props.votingfinaldetails.trumph)
    {
       var tc=this.props.votingfinaldetails.clinton-this.props.votingfinaldetails.trumph;
      var t="Clinton leads Trumph by " + tc;
    }
    else
    {
      var t=""
    }
      return (
      	<div>

        <div className="liveNews">
        <p>LIVE NEWS</p>
        <marquee><span className="count">Votes for Trumph : {this.props.votingfinaldetails.trumph}</span><span className="count">Votes for Clinton : {this.props.votingfinaldetails.clinton}</span><span className="running">{t}</span></marquee> 
        </div>

         <div className="container1">
         <img src="../assets/images/banner.jpg" className="img-rounded" alt="banner image" width="95%" />
         </div>
		    <div className="homeContent">
         <p>Please Login your credentials to vote</p>
        </div>
        </div>
      );
   }
}


export default Home;