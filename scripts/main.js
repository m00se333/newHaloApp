var React = require('react');
var ReactDOM = require('react-dom');

// Firebase
var Rebase = require("re-base");
var base = Rebase.createClass("https://newhalo-dd410.firebaseio.com/");
// React Catalyst for 2 way data flow
var Catalyst = require("react-catalyst");
 
var Layout = React.createClass({
  mixins: [Catalyst.LinkedStateMixin],
  getInitialState: function(){
      return {
        profile: {
          gamertag: null,
          spartan: null,
          emblem: null,
        },
        userSearch: {}

      }
  },


    // var search = document.getElementById("search").value;
    
    // var userSearch = this.state.userSearch
    // userSearch.firstQuery = search
    // this.setState({userSearch: userSearch})



    //    var abc = this.state.abc;
    //    abc.xyz = 'new value';
    //    this.setState({abc: abc});


    /* 
          
          setProfile take this.state.profile and condenses it, then
          sets a new item in the object equal to search, that is created
          and sent by the user when the submit button is clicked.
          this.setState({profile: profile}) is confusing, but I think it 
          sort of "refreshes" the state to reflect the changes.


    */

  render: function(){
      return (
        <div id="content">
          <Header />
          <PlayerForm first={[true]} profile={this.state.profile}
                      userSearch={this.state.userSearch}linkState={this.linkState}/>

        </div>
      )
    }
});

var Header = React.createClass({
  render: function(){
      return (
        <div id="header">
          <h1>Type in an XboxLive Gamertag</h1>
        </div>
        )
    }

});

var SearchInput = React.createClass({
  setProfile: function(event){
    event.preventDefault();
    console.log(this.props.first);
    this.props.first[0] = false;
  },

  /*
    
    I have this wired up to dynamically update the state of the application
    encapsulated in the component <Layout /> using linkState I am able to update
    state for two endpoints of the profile object. SearchForm is linked to the 
    profile.spartan endpoint and updates the state as the value of the text input
    changes. I can use this to make a cool user experience to see the dynamic
    text, I like it.

  */
  render: function(){
    var linkState = this.props.linkState

    var firstSearch = (
        <div id="searchForm">     
            <form>
              <input type="text" valueLink={linkState("userSearch.firstQuery")}/>
              <button onClick={this.setProfile}>Submit</button>
            </form>
            <div id="searchDisplay">
              <span>{this.props.userSearch.firstQuery}</span>
            </div>
        </div>  
      )

    var secondSearch = (
        
        <div id="searchForm">     
            <form onSubmit={this.props.setProfile}>
              <input type="text" valueLink={linkState("userSearch.firstQuery")}/>
              <button onClick={this.setProfile}>Submit</button>
            </form>
            <div id="searchDisplay">
              <span>{this.props.userSearch.firstQuery}</span>
            </div>
        </div> 

      )


      return (
        firstSearch 
        )
  }
})



/*
  This is the old player form. This successfully sets state for the 
  gamertag endpoint in the profile object.


  <div id="playerForm">
    <form>
      <input type="text" defaultValue="Lore Eye An Us" id="search"/>
      <input type="submit" onClick={this.props.setProfile}/>
    </form>
    <div id="preview">
      <span>{this.props.profile.gamertag}</span>
    </div>
*/

var PlayerForm = React.createClass({

  render: function(){
      return (
            <SearchInput {...this.props}/>
        )
  }
})

ReactDOM.render(<Layout />, document.getElementById("app"));