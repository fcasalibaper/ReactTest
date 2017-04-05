// Libs
import React from 'react';

export default class Searchbox extends React.Component {	
	// Default states
	constructor() {
		super();
		this.state = {			
			username : ''			
		}
		this.update = this.update.bind(this);
	}

	// input type 
	update(event) {
		event.preventDefault();
		let typed = event.target.value;
		this.props.changeUser(typed);
	}

	render() {		
   	return (
   		<div >
   			<div>{this.props.username}</div>
				<form className="app__search__form" >					
				  <input id="app__search" className="app__search" placeholder={this.props.username} onChange={this.update} />
				  <a className="app__search__button"><i className="material-icons">search</i></a>
				</form>
			</div>
		)
 	}
}