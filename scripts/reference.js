var React = require('react');
var ReactDOM = require('react-dom');


var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation; //mixin
var History = ReactRouter.History

import createHashHistory from 'history/lib/createHashHistory'
const history = createHashHistory({ queryKey: false })
import { Link, IndexRoute } from "react-router";

var Nav = React.createClass({
  render: function(){
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/x">Boxes</Link>
        </nav>
      )
  }
});



var Box =  React.createClass({
  getInitialState: function(){
    return{
      color: "goldenrod"
    }
  },
  style: function() {
    return{
      background: this.state.color
    }

  },
  handleClick: function(){
    this.setState({color: "green"})
  },
  render: function(){
    return (
        <div className="block" id="homeRouteBlock" onClick={this.handleClick} style={this.style()}></div>
      )
  }
});

var DataButtons = React.createClass({
  

  render: function(){
    return(
      <div>
        <button onClick={this.props.loadData}>Load Data</button>
        <button onClick={this.props.hideData}>Hide Data</button>
      </div>
      )
  }
})


var Layout = React.createClass({
   getInitialState: function(){
        return {
          heroes: {}
        }
    },

  loadData: function(){
    this.setState({
      heroes: require("../mock/mockData.js")
    });
    document.getElementById("heroBox").style.display = "flex";
  },

  hideData: function(){
    document.getElementById("heroBox").style.display = "none";
  },

  renderHeroes: function(key){
    return(
        <Hero key={key} index={key} details={this.state.heroes[key]} />
      )
  },

  render: function(){
    return(
      <div>
      <DataButtons loadData={this.loadData} hideData={this.hideData} />
      <div id="heroBox" style={{display: "none"}}>
        {Object.keys(this.state.heroes).map(this.renderHeroes)}
      </div>
      </div>
      )
  }

});

var Hero = React.createClass({

  render: function(){
    var details = this.props.details;
    return(
        <div className="hero">
          {this.props.index}
          <ul>
            <li>{details.role}</li>
            <li>{details.universe}</li>
          </ul>
        </div>
      )
  }
});

/*

Lots of Boxes

*/
var MasterLayout = React.createClass({
    findChildren: function(){
        console.log(this)

    },

    render: function(){

      return(
        <div id="bigWrapper">
          <div id="headerContainer" >
            <h1>React Practice</h1>
            <Link to="/">One</Link>
            <Link to="/2">Two</Link>
            <Link to="/3">Three</Link>
            <button onClick={this.findChildren}>Think of the children</button>
          </div>
          <div id="contentContainer">
              {this.props.children}
          </div>
        </div>
        )
    }
});




var NotFound = React.createClass({
  render: function() {
      return (
          <h2>Not Found</h2>
        )
  }
})

var PageOne = React.createClass({
  render: function(){
    return(
      <div className="articleContainer" id="page1">
        <h1>Page1</h1>
        <Box/>
      </div>
        
      ) 
  }
})
var PageTwo = React.createClass({
  render: function(){
    return (
        <div className="articleContainer" id="page2">
          <h1>Page2</h1>
          <Layout />
        </div>
      )
  }
})
var PageThree = React.createClass({
  render: function(){
    return (
      <div className="articleContainer" id="page1">
        <h1>Page3</h1>
      </div>
      )
  }
})

var routes =  (
      <Router history={history}>
        <Route path="/" component={MasterLayout}>
          <IndexRoute component={PageOne} />
          <Route path="2" component={PageTwo} />
          <Route path="3" component={PageThree} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
  )

ReactDOM.render(routes, document.getElementById("app"))







