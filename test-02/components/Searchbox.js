// Libs
import React from 'react';

export default class Searchbox extends React.Component {
	
	constructor() {
		super();
		this.state = {			
			typed : ''			
		}	
	}

	onChange(event) {
		this.setState({typed : event.target.value})		
	}

	render() { 
   	return (
			<form>
				<div>{this.state.typed}</div>
			  <input className="app__search" placeholder="search profile..." value={this.state.user} onChange={this.onChange.bind(this)}/>
			</form>
		)
 	}
}