// Libs
import React from 'react';
import styled from 'styled-components';

const AppProfile = styled.article`
  padding: 0;
  margin: 0;
  width:600px;
  height:100%;
  min-height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index: 9;
`;

const Button = styled.button`
  padding: calc(2em / 4) calc(2em / 1.2);
  border-radius:100px;
  color:pink;
  font-size: calc(2em / 1.5);
  text-decoration:none;
  transition:all 200ms linear;
  font-weight: 500;
  letter-spacing: 0.08em;
  overflow: hidden;
  background-color:white;
  position:relative;
  text-transform:uppercase;
  box-shadow: 0 0 0 rgba(146,168,209, 0), 0 0 0 rgba(146,168,209, 0);

  &:after {
    content:'';
    position: absolute;
    border-radius:100px;
    top: $size;
    left: $size;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: white;
  }

  &:hover,
  &:focus {
    text-decoration:none;
    color:$lightblue;
    border-color: $lightblue;
    box-shadow: 0 14px 28px rgba(146,168,209, 0.15), 0 10px 10px rgba(146,168,209, 0.12);
    @mixin bgLinear $pink, $lightblue, 0%, 70%, -80deg;
  }

  span {
    position: relative;
    color:black;
    z-index: 5;
    transition:all 200ms linear;
  }
`;

const AppProfile__content = styled.div`
  background-color: white;
  overflow: hidden;
  padding:0;
  border-radius: 10px;
  box-shadow: 0 0.75px 1px grey, 0 0.75px 1px rgba(0, 0, 0, 0.24);
  transition: all 200ms linear;
  position:relative;
  width:100%;

  hgroup {
    z-index: 1;
    padding: 2em;
    position:absolute;
    width: 100%;
    left: 0;

    h3 {
      color:white;
      font-size: 1.85em;
      line-height: 2.5;
      font-weight: 100;
      letter-spacing: 0.18em;
      text-align:center;
      color:rgba(255,255,255, 0.95);
      text-shadow: 1px 2px 1px rgba(0,0,0, 0.1),
                   1.5px 2px 2px rgba(0,0,0, 0.1),
                   2px 2.45px 3px rgba(0,0,0, 0.1);
    }
  }
`;

const AppImages = styled.div`
  position:relative;
  width:100%;

  aside {
    position: relative;
    width: 100%;
    height: 17rem;
    background-color: lightblue;
    background-image: linear-gradient(45deg, rgba(247, 202, 201, 1) 0%, rgba(146,168,209,1) 55%);
    z-index: 0;
  }

  figure {
    position: relative;
    display:block;
    background-color: white;
    max-width: 11rem;
    margin-left: -5.5rem;
    margin-top: -5.5rem;
    left:50%;
    overflow:hidden;
    border-radius:100%;
    border:0.7em solid white;
    img {
      position: relative;
      max-width:100%;
      height:auto;
      transform: scale(1.037);
    }
  }
`;

const MyData = styled.div`
  padding: 0 2em 2em;
  margin-top: calc(2em / 1.2);
  width: 100%;
  text-align:center;
  h1 {
    font-size: 2em;
    font-weight: 500;
    letter-spacing: 0.025em;
    color:black;
    display:flex;
    flex-direction:column;

    small,
    a {
      display: block;
      margin-top: calc(2em / 2);
      color:grey;
      font-size: 0.7em;
      line-height: 1.2;
      letter-spacing: 0.02em;
      margin-top: calc(2em/4);
      position: relative;
      display: inline-block;
      text-transform: uppercase;
    }


  }
`;

const UlData = styled.ul`
  overflow: hidden;
  position: relative;
  margin-top:calc(2em / 3);
  display:flex;
  align-items:center;
  justify-content:space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  border: 2px solid lightgrey;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;

  li {
    flex-grow:1;
    color: black;
    text-align:center;
    font-size: calc(3.5em / 1.2);
    font-weight: 500;
    transition: all 200ms linear;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);

    &:hover {
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.20),
                  0 0 20px rgba(0, 0, 0, 0.2),
                  0 0 10px rgba(0, 0, 0, 0.15),
                  0 0 5px rgba(0, 0, 0, 0.1),
                  0 0 1px rgba(0, 0, 0, 0.1);
    }

    a {
      display: block;
      height: 100%;
      min-height: 100%;
      padding: calc(2em / 1.7) 0;
      text-decoration:none;
      color:black;
    }

    &:nth-child(2) {
      border-left: 2px solid rgba(0,0,0, 0.10);
      border-right: 2px solid rgba(0,0,0, 0.10);
    }
    span {
      display:block;
      margin-top: 0.5em;
      color:grey;
      text-transform: uppercase;
      font-size: calc(1.5em / 3);
    }
  }
`;


// Componente de Search
import Searchbox from './Searchbox';

const API = 'https://api.github.com/users/';

export default class ContentUser extends React.Component {
  // default States
  constructor(props) {
    super(props);

    this.state = {
      username         : 'fcasalibaper',
      location         : '',
      name             : '',
      repositorios     : '',
      seguidores       : '',
      siguiendo        : '',
      url              : '',
      email            : '',
      imageProfile     : ''
    };

    this.changeUser = this.changeUser.bind(this);
  }

  // change User state
  changeUser(username) {
    this.setState({username})
  }

  // funcion llamada API
  dataSource(username) {
    let userUrl = API + username;

    fetch(userUrl)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        username        : data.login,
        location        : data.location,
        name            : data.name,
        repositorios    : data.public_repos,
        seguidores      : data.followers,
        siguiendo       : data.following,
        url             : data.html_url,
        email           : data.email,
        imageProfile    : data.avatar_url
      })
    })
  }

  // Monta la funcion antes de inicar el render()
  componentWillMount() {
    this.dataSource(this.state.username);
  }

  render() {
    return (

      <AppProfile>

        <Searchbox  changeUser={this.changeUser}
                    username={this.state.username}
                    dataSource={this.dataSource.bind(this)}/>

        <AppProfile__content>
          <hgroup>
            <h3>Github profile</h3>
          </hgroup>

          <AppImages>
            <aside></aside>
            <figure>
              <img src={this.state.imageProfile} />
            </figure>
          </AppImages>

          <MyData>
            <h1>
              {this.state.name}
              <small>
                {this.state.location}
              </small>
              <a  href={'mailto:'+this.state.email}
                  target="_self">{this.state.email}
              </a>
            </h1>
            <Button  href={this.state.url}
                target="_blank"><span>Profile</span>
            </Button>
          </MyData>

          <UlData>
            <li>
              <a  href={this.state.url+'?tab=followers'}
                  target="_blank">
                {this.state.seguidores}
                <span>Seguidores</span>
              </a>
            </li>
            <li>
              <a  href={this.state.url+'?tab=repositories'}
                  target="_blank">
                {this.state.repositorios}
                <span>Repositorios</span>
              </a>

            </li>
            <li>
              <a  href={this.state.url+'?tab=following'}
                  target="_blank">
                {this.state.siguiendo}
                <span>Siguiendo</span>
              </a>
            </li>
          </UlData>
        </AppProfile__content>
      </AppProfile>
    )
  }
}
