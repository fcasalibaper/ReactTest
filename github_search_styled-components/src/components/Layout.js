// Libs
import React from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Condensed');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  :root {font-size: 14px;}

  body,html {
    height:100%;min-height: 100%;margin: 0;
    font-family: 'Ubuntu Condensed', sans-serif;
    font-weight:300;
  }
  * {
  	box-sizing:border-box;
  }
  figure,
  ul {
  	margin:0;
  	padding: 0;
  }
  li {
  	list-style-type: none
  }

  a {
    outline: none;
    color:$grey;
    text-decoration: none;
    transition: all 200ms linear;

    &:hover,
    &:focus {
      color: $lightblue !important;
    }
  }
`;

const Appcontainer = styled.section`
  padding: 0;
  margin: 0;
  height:100%;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 9;
`;

import ContentUser from './ContentUser';

export default class App extends React.Component {
  render() {
    return (
      <Appcontainer>
        <ContentUser />
      </Appcontainer>
    )
  }
}
