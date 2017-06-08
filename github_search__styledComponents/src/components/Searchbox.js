// Libs
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	width: 100%;
	display:inline-flex;
	align-items:center;
	justify-content:space-between;
	margin-bottom: 3em;
	font-family: 'Ubuntu Condensed', sans-serif;
`;

const Button = styled.button`
	position: relative;
	background-color: transparent;
	border: 0;
	color: lightblue;
	padding-left: 2em;
	transition:all 200ms linear;
	i {
		cursor: pointer;
		font-size: calc(1em * 1.4);
	}
	&:hover,
	&:focus {
		outline:none;
		color: rgba(black);
	}
`;

const Input = styled.input`
	width: 100%;
  border-radius: 0;
  background-color: transparent;
  border:3px solid rgba(lightblue,1);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  height: 50px;
  font-size: 1.5em;
  font-weight: 100;
  padding: 0.5em 0;
  color: rgba(lightblue,0.9);
	font-family: 'Ubuntu Condensed', sans-serif;

	&::placeholder {
    color: rgba(black,0.5);

  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: transparent !important;
  }

  &:hover,
  &:focus {
    outline:none;
  }
`;
export default class Searchbox extends React.Component {
	// Default states
	constructor(props) {
		super(props);

		this.state = {
			username : ''
		}
		// estado de tipeo
		this.update = this.update.bind(this);

		// estado de submit
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// input type
	update(event) {
		event.preventDefault();
		let typed = event.target.value;
		this.props.changeUser(typed);
	}

	// Submit
	handleSubmit(event) {
	  event.preventDefault();
	  let username = this.props.username;
	  this.props.dataSource(username);
	}

	render() {
   	return (
			<Form onSubmit={this.handleSubmit}>

			  <Input	id="app__search"
								placeholder={this.props.username}
								onChange={this.update} />

			  <Button type="submit">
					<i>search</i>
				</Button>
			</Form>

		)
 	}
}
