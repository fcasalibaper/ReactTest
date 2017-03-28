// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// css
import './css/styles.css';

var API = 'https://api.github.com/users/fcasalibaper';
var repo = {
  name             : "Fernando Casaliba",
  shortdescription : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eveniet, error quia vitae aliquid saepe.",
  repositorios     : 1,
  seguidores       : 5,
  siguiendo        : 10,
  url              : "https://github.com/fcasalibaper",
  imageProfile     : "https://avatars1.githubusercontent.com/u/6304138?v=3"
}
var SearchBox = React.createClass({
  render: function() {
    return (
      <input className="app__search" placeholder="search profile..."/>
    )
  }
});
    
var App = React.createClass ({
  /*getDefaultProps: function() {
    
       fetch(API)
            .then((response) => response.json())
            .then((responseJson) => {
               this.setState({
                 'xyz' : responseJson.movies,
                 'people' : [{'name':'something_else', 'email':'email@gmail.com'}, {'name':'morgan', 'email':'mogo@gmail.com'}]

               });
            });
    
    console.log(people.name)
    
  },*/
  getDefaultProps: function() {
    return {
      name             : repo.name,
      shortdescription : repo.shortdescription,
      repositorios     : repo.repositorios,
      seguidores       : repo.seguidores,
      siguiendo        : repo.siguiendo,
      url              : repo.url,
      imageProfile     : repo.imageProfile
    }
  },
  
  render : function() {    
    return (      
      <div className="app">       
        <div className="app__profile">
          <SearchBox />
          <div className="app__profile__content">
            <hgroup className="app__title">
              <h3>Github profile</h3>
            </hgroup>

            <figure className="app__images">
              <aside className="app__bg"></aside>            
              <picture className="app__profilePic">
                <img src={this.props.imageProfile} />
              </picture>
            </figure>

            <header className="app__name">
              <h1>{this.props.name}
                <small>{this.props.shortdescription}</small>
              </h1>
              <a className="btn" href={this.props.url}><span>Profile</span></a>
            </header>

            <ul className="app__data">
              <li className="app__data__features">
                <a href={this.props.url+'?tab=followers'} target="_blank">
                  {this.props.seguidores}
                  <span>Seguidores</span>   
                </a>  
              </li>
              <li className="app__data__features">
                <a href={this.props.url+'?tab=repositories'} target="_blank">
                  {this.props.repositorios}
                  <span>Repositorios</span>
                </a>  

              </li>
              <li className="app__data__features">
                <a href={this.props.url+'?tab=following'} target="_blank">
                  {this.props.siguiendo}
                  <span>Siguiendo</span>    
                </a>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
