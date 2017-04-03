// Libs
import React from 'react';

export default class Searchbox extends React.Component {	
	// Default states
	constructor() {
		super();
		this.state = {			
			username : ''			
		}	
	}

	// input type 
	update(event) {
		const username = event.target.value;
		this.props.changeUser(username);
	}

	render() {		
   	return (
			<form>
				<div>{this.props.username}</div>
			  <input className="app__search" placeholder="search profile..." onChange={this.update.bind(this)}/>
			</form>
		)
 	}
}