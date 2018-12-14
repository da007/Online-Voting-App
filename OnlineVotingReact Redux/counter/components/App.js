import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';



class App extends React.Component {
  constructor(props){
    super(props);

    
  }
   render() {
      console.log("app",this.props);
      return (
         <div className="wrapper">
          <Header />

          {React.cloneElement(this.props.children,this.props)}
         </div>
      );
   }
}


class Header extends React.Component {
   render() {
      return (
         <div className="header">
            
            
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      
      <Link className="navbar-brand" to="/login">OnlinePoll</Link>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><Link to="/home">Home</Link></li>
        
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
           
            
         </div>
      );
   }
}


export default App;