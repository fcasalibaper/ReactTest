// Libs
import React from 'react';

// Componente de Search
import Searchbox from './Searchbox';

const API = 'https://api.github.com/users/';

export default class ContentUser extends React.Component {
  // default States
  constructor() {
    super();   
    this.state = {
      user            : 'facasalibaper',
      name             : 'Fer',
      repositorios     : '3',
      seguidores       : '3',
      siguiendo        : '6',
      url              : '#',
      imageProfile     : 'https://avatars1.githubusercontent.com/u/6304138?v=3'    
    };
  }

  render() { 
   return (       
    <div className="app__profile">  
      
      <Searchbox />
      <div className="app__profile__content">
        <hgroup className="app__title">
          <h3>Github profile</h3>
        </hgroup>

        <figure className="app__images">
          <aside className="app__bg"></aside>            
          <picture className="app__profilePic">
            <img src={this.state.imageProfile} />
          </picture>
        </figure>

        <header className="app__name">
          <h1>
            {this.state.name}
            <small>{this.state.shortdescription}</small>
          </h1>
          <a className="btn" href={this.state.url}><span>Profile</span></a>
        </header>

        <ul className="app__data">
          <li className="app__data__features">
            <a href={this.state.url+'?tab=followers'} target="_blank">
              {this.state.seguidores}
              <span>Seguidores</span>   
            </a>  
          </li>
          <li className="app__data__features">
            <a href={this.state.url+'?tab=repositories'} target="_blank">
              {this.state.repositorios}
              <span>Repositorios</span>
            </a>  

          </li>
          <li className="app__data__features">
            <a href={this.state.url+'?tab=following'} target="_blank">
              {this.state.siguiendo}
              <span>Siguiendo</span>    
            </a>  
          </li>
        </ul>
      </div>
    </div>
    )
  }
}
